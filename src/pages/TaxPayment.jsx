import React, { useState, useEffect } from 'react';
import { Search, FileText, Calendar, IndianRupee, Home, Droplet, Building2, Users, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAllBills } from "../admin/services/billApi";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";








const colorMap = {
  emerald: "text-emerald-600",
  blue: "text-blue-600",
  purple: "text-purple-600",
  teal: "text-teal-600",
};



const TaxPaymentPage = ({ language = 'en' }) => {
  const [consumerNo, setConsumerNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [allBills, setAllBills] = useState([]);
  const [filteredBills, setFilteredBills] = useState([]);
  const [error, setError] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [hasSearched, setHasSearched] = useState(false);
  const { t } = useTranslation();



  

  const taxFilters = useMemo(() => ([
    { value: 'all', label: t("tax_payment.allTaxes"), icon: FileText },
    { value: 'gharpatti', label: t("tax_payment.gharpattiTax"), icon: Home },
    { value: 'water', label: t("tax_payment.waterCharge"), icon: Droplet },
    { value: 'divakar', label: t("tax_payment.divakarTax"), icon: Building2 },
    { value: 'arogyakar', label: t("tax_payment.arogyakarTax"), icon: Users }
  ]), [language]);
  

 

  // Apply filter whenever allBills or selectedFilter changes
  useEffect(() => {
    applyFilter();
  }, [allBills, selectedFilter]);

  const loadAllBills = async () => {
    try {
      setLoading(true);
      const res = await getAllBills();
      const bills = res.data?.bills || res.data || res.bills || [];
      
      const mappedBills = bills.map(bill => ({
        billNo: bill.bill_no || 'N/A',
        propertyNo: bill.property_no || 'N/A',
        ownerName: bill.owner_name || 'N/A',
        gharpattiTax: {
          pending: parseFloat(bill.gharpatti_pending) || 0,
          penalty: parseFloat(bill.gharpatti_penalty) || 0,
          current: parseFloat(bill.gharpatti_current) || 0,
        },
        waterCharge: {
          pending: parseFloat(bill.water_pending) || 0,
          current: parseFloat(bill.water_current) || 0,
        },
        divakarTax: {
          pending: parseFloat(bill.divakar_pending) || 0,
          current: parseFloat(bill.divakar_current) || 0,
        },
        arogyakarTax: {
          pending: parseFloat(bill.arogyakar_pending) || 0,
          current: parseFloat(bill.arogyakar_current) || 0,
        },
      }));

      setAllBills(mappedBills);
    } catch (err) {
      console.error("Error loading bills:", err);
      setError(t("tax_payment.error"));

    } finally {
      setLoading(false);
    }
  };

  const applyFilter = () => {
    let filtered = [...allBills];

    // Apply search filter
    if (consumerNo.trim()) {
      filtered = filtered.filter(bill => 
        String(bill.propertyNo).trim().toLowerCase().includes(consumerNo.trim().toLowerCase())
      );
    }

    // Apply tax type filter
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(bill => {
        switch(selectedFilter) {
          case 'gharpatti':
            return (bill.gharpattiTax.pending + bill.gharpattiTax.penalty + bill.gharpattiTax.current) > 0;
          case 'water':
            return (bill.waterCharge.pending + bill.waterCharge.current) > 0;
          case 'divakar':
            return (bill.divakarTax.pending + bill.divakarTax.current) > 0;
          case 'arogyakar':
            return (bill.arogyakarTax.pending + bill.arogyakarTax.current) > 0;
          default:
            return true;
        }
      });
    }

    setFilteredBills(filtered);
    setCurrentPage(1);
  };

  const handleSearch = async () => {
    if (!consumerNo.trim()) {
      setError(t.enterProperty);
      setFilteredBills([]);
    
      setHasSearched(true);

      return;
    }
  
    try {
      setLoading(true);
      setError("");
      setHasSearched(true);
  
      const res = await getAllBills();
      const bills = res.data?.bills || res.data || res.bills || [];
  
      const mappedBills = bills.map(bill => ({
        billNo: bill.bill_no || 'N/A',
        propertyNo: bill.property_no || 'N/A',
        ownerName: bill.owner_name || 'N/A',
        gharpattiTax: {
          pending: parseFloat(bill.gharpatti_pending) || 0,
          penalty: parseFloat(bill.gharpatti_penalty) || 0,
          current: parseFloat(bill.gharpatti_current) || 0,
        },
        waterCharge: {
          pending: parseFloat(bill.water_pending) || 0,
          current: parseFloat(bill.water_current) || 0,
        },
        divakarTax: {
          pending: parseFloat(bill.divakar_pending) || 0,
          current: parseFloat(bill.divakar_current) || 0,
        },
        arogyakarTax: {
          pending: parseFloat(bill.arogyakar_pending) || 0,
          current: parseFloat(bill.arogyakar_current) || 0,
        },
      }));
  
      const matchedBills = mappedBills.filter(bill =>
        String(bill.propertyNo).trim().toLowerCase() === consumerNo.trim().toLowerCase()
      );
  
      setAllBills(matchedBills);
      setFilteredBills(matchedBills);
      setCurrentPage(1);
  
    } catch (err) {
      console.error(err);
      setError(t("tax_payment.error"));

    } finally {
      setLoading(false);
    }
  };
  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleFilterChange = (filterValue) => {
    setSelectedFilter(filterValue);
    setCurrentPage(1);
  };

  const calculateTotal = (bill) => {
    const total = 
      (bill.gharpattiTax.pending || 0) +
      (bill.gharpattiTax.penalty || 0) +
      (bill.gharpattiTax.current || 0) +
      (bill.waterCharge.pending || 0) +
      (bill.waterCharge.current || 0) +
      (bill.divakarTax.pending || 0) +
      (bill.divakarTax.current || 0) +
      (bill.arogyakarTax.pending || 0) +
      (bill.arogyakarTax.current || 0);
    return total.toFixed(2);
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBills = filteredBills.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredBills.length / itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">{t("tax_payment.title")}</h1>
            <p className="text-emerald-100 mt-1">{t("tax_payment.subtitle")}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-6 border border-emerald-100">
          <label className="block text-base sm:text-lg font-semibold text-gray-700 mb-3">
          {t("tax_payment.consumerLabel")}
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={consumerNo}
                onChange={(e) => setConsumerNo(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t("tax_payment.consumerPlaceholder")}
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm sm:text-base"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button
              onClick={handleSearch}
              disabled={loading}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <Search size={20} />
                  <span className="hidden sm:inline">{t("tax_payment.searchButton")}</span>
                </>
              )}
            </button>
          </div>
          {error && (
           <p className="mt-3 text-red-500 text-sm font-medium">
           {t("tax_payment.enterProperty")}
         </p>
         
          )}
        </div>

        {/* Filter Section */}
{/* {hasSearched && (
  <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-6 border border-emerald-100">
    <div className="flex items-center gap-2 mb-4">
      <Filter size={20} className="text-emerald-600" />
      <h3 className="text-base sm:text-lg font-semibold text-gray-700">
      {t("tax_payment.filterLabel")}
      </h3>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
      {taxFilters.map((filter) => {
        const Icon = filter.icon;
        return (
          <button
            key={filter.value}
            onClick={() => handleFilterChange(filter.value)}
            className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl ${
              selectedFilter === filter.value
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <Icon size={16} />
            {filter.label}
          </button>
        );
      })}
    </div>
  </div>
)} */}


        {/* Pagination Info */}
        {/* {filteredBills.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 mb-4 border border-emerald-100">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs sm:text-sm text-gray-600">
          {t("tax_payment.showingResults")} {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredBills.length)} {t("tax_payment.of")} {filteredBills.length} {t("tax_payment.results")}
        </p>

              
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  
                  <div className="flex gap-1 sm:gap-2">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => goToPage(index + 1)}
                        className={`px-2 sm:px-3 py-1 rounded-lg font-medium transition-all text-xs sm:text-sm ${
                          currentPage === index + 1
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )} */}

        {/* Results */}
        {loading ? (
  <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-emerald-100">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-600 border-t-transparent mx-auto mb-4" />
    <p className="text-gray-600">{t("tax_payment.loading")}</p>
  </div>
) : hasSearched && filteredBills.length === 0 ? (
  <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center border border-emerald-100">
    <Search size={48} className="text-gray-400 mx-auto mb-4" />
    <p className="text-gray-600 text-sm sm:text-base">{t("tax_payment.noData")}</p>
  </div>
) : (
          <div className="space-y-4 sm:space-y-6">
            {currentBills.map((bill, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
                {/* Bill Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 sm:px-6 py-3 sm:py-4">
                  <h2 className="text-base sm:text-xl font-bold text-white flex items-center gap-2">
                    <FileText size={20} className="hidden sm:block" />
                    {t("tax_payment.billDetails")}
                  </h2>
                </div>

                {/* Bill Info Cards */}
                <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 bg-gradient-to-br from-emerald-50 to-teal-50">
                  <div className="bg-white p-3 sm:p-4 rounded-xl shadow-md border border-emerald-100">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">{t("tax_payment.billNo")}</p>
                    <p className="text-sm sm:text-lg font-bold text-emerald-700 truncate">{bill.billNo}</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-xl shadow-md border border-emerald-100">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">{t("tax_payment.propertyNo")}</p>
                    <p className="text-sm sm:text-lg font-bold text-emerald-700 truncate">{bill.propertyNo}</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-xl shadow-md border border-emerald-100">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">{t("tax_payment.ownerName")}</p>
                    <p className="text-sm sm:text-lg font-bold text-emerald-700 truncate">{bill.ownerName}</p>
                  </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-emerald-200">
  {t("tax_payment.taxType")}
</th>

                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b-2 border-emerald-200">
                          {t("tax_payment.pending")}
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b-2 border-emerald-200">
                          {t("tax_payment.penalty")}
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b-2 border-emerald-200">
                          {t("tax_payment.current")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {(selectedFilter === 'all' || selectedFilter === 'gharpatti') && (
                        <tr className="hover:bg-emerald-50 transition-colors">
                          <td className="px-6 py-4 flex items-center gap-2 font-medium text-gray-800">
                            <Home className="text-emerald-600" size={20} />
                            {t("tax_payment.gharpattiTax")}
                          </td>
                          <td className="px-6 py-4 text-center font-semibold text-orange-600">
                            ₹{bill.gharpattiTax.pending.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 text-center font-semibold text-red-600">
                            ₹{bill.gharpattiTax.penalty.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 text-center font-semibold text-blue-600">
                            ₹{bill.gharpattiTax.current.toFixed(2)}
                          </td>
                        </tr>
                      )}
                      {(selectedFilter === 'all' || selectedFilter === 'water') && (
                        <tr className="hover:bg-emerald-50 transition-colors">
                          <td className="px-6 py-4 flex items-center gap-2 font-medium text-gray-800">
                            <Droplet className="text-blue-600" size={20} />
                            {t("tax_payment.waterCharge")}
                          </td>
                          <td className="px-6 py-4 text-center font-semibold text-orange-600">
                            ₹{bill.waterCharge.pending.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 text-center text-gray-400">-</td>
                          <td className="px-6 py-4 text-center font-semibold text-blue-600">
                            ₹{bill.waterCharge.current.toFixed(2)}
                          </td>
                        </tr>
                      )}
                      {(selectedFilter === 'all' || selectedFilter === 'divakar') && (
                        <tr className="hover:bg-emerald-50 transition-colors">
                          <td className="px-6 py-4 flex items-center gap-2 font-medium text-gray-800">
                            <Building2 className="text-purple-600" size={20} />
                            {t("tax_payment.divakarTax")}
                          </td>
                          <td className="px-6 py-4 text-center font-semibold text-orange-600">
                            ₹{bill.divakarTax.pending.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 text-center text-gray-400">-</td>
                          <td className="px-6 py-4 text-center font-semibold text-blue-600">
                            ₹{bill.divakarTax.current.toFixed(2)}
                          </td>
                        </tr>
                      )}
                      {(selectedFilter === 'all' || selectedFilter === 'arogyakar') && (
                        <tr className="hover:bg-emerald-50 transition-colors">
                          <td className="px-6 py-4 flex items-center gap-2 font-medium text-gray-800">
                            <Users className="text-teal-600" size={20} />
                            {t("tax_payment.arogyakarTax")}
                          </td>
                          <td className="px-6 py-4 text-center font-semibold text-orange-600">
                            ₹{bill.arogyakarTax.pending.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 text-center text-gray-400">-</td>
                          <td className="px-6 py-4 text-center font-semibold text-blue-600">
                            ₹{bill.arogyakarTax.current.toFixed(2)}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="lg:hidden p-3 sm:p-4 space-y-3 sm:space-y-4">
                  {[
                    { name: t("tax_payment.gharpattiTax"), icon: Home, data: bill.gharpattiTax, color: 'emerald', filter: 'gharpatti' },
                    { name: t("tax_payment.waterCharge"), icon: Droplet, data: bill.waterCharge, color: 'blue', filter: 'water' },
                    { name: t("tax_payment.divakarTax"), icon: Building2, data: bill.divakarTax, color: 'purple', filter: 'divakar' },
                    { name: t("tax_payment.arogyakarTax"), icon: Users, data: bill.arogyakarTax, color: 'teal', filter: 'arogyakar' }
                  ].filter(tax => selectedFilter === 'all' || selectedFilter === tax.filter).map((tax, taxIndex) => (
                    <div key={taxIndex} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-3 sm:p-4 shadow-md border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                      <tax.icon className={colorMap[tax.color]} size={20} />

                        <h3 className="font-bold text-gray-800 text-sm sm:text-base">{tax.name}</h3>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-orange-50 p-2 sm:p-3 rounded-lg text-center">
                          <p className="text-xs text-gray-600 mb-1">{t("tax_payment.pending")}</p>
                          <p className="font-bold text-orange-600 text-xs sm:text-sm">₹{tax.data.pending.toFixed(2)}</p>
                        </div>
                        <div className="bg-red-50 p-2 sm:p-3 rounded-lg text-center">
                          <p className="text-xs text-gray-600 mb-1">{t("tax_payment.penalty")}</p>
                          <p className="font-bold text-red-600 text-xs sm:text-sm">
                            {tax.data.penalty ? `₹${tax.data.penalty.toFixed(2)}` : '-'}
                          </p>
                        </div>
                        <div className="bg-blue-50 p-2 sm:p-3 rounded-lg text-center">
                          <p className="text-xs text-gray-600 mb-1">{t("tax_payment.current")}</p>
                          <p className="font-bold text-blue-600 text-xs sm:text-sm">₹{tax.data.current.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Footer */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 sm:px-6 py-4 sm:py-5">
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <IndianRupee size={20} className="hidden sm:block" />
                      {t("tax_payment.total")}

                    </span>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      ₹{calculateTotal(bill)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Pagination */}
        {filteredBills.length > itemsPerPage && (
          <div className="mt-6 bg-white rounded-xl shadow-md p-4 border border-emerald-100">
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-xs sm:text-sm font-medium flex items-center gap-1"
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">{t("tax_payment.previous")}</span>
              </button>
              
              <div className="flex gap-1 sm:gap-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => goToPage(index + 1)}
                    className={`px-2 sm:px-4 py-2 rounded-lg font-medium transition-all text-xs sm:text-sm ${
                      currentPage === index + 1
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-xs sm:text-sm font-medium flex items-center gap-1"
              >
                <span className="hidden sm:inline">{t("tax_payment.next")}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaxPaymentPage;
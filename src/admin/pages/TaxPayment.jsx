import { useState, useEffect } from "react";
import { getAllBills, getBillById, deleteBill } from "../services/billApi";
import AddBillModal from "../components/AddBillModal";

import {
  Eye,
  Pencil,
  Trash2,
  Loader,
  Search,
  Download,
  Filter,
  IndianRupee,
  User,
  Hash,
  Calendar,
} from "lucide-react";

/* ================= ActionBar (SAME AS WATER SUPPLY) ================= */
function ActionBar({
  onView,
  onEdit,
  onDelete,
  onAdd,
  selectedId,
  currentPage,
  totalPages,
  onPageChange,
}) {
  const pages = Math.max(totalPages, 1); 


  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6 border border-gray-100">
      <div className="flex items-center justify-between">

        {/* LEFT ACTIONS */}
        <div className="flex gap-2">
          <button
            onClick={onView}
            disabled={!selectedId}
            className="flex items-center gap-2 px-4 py-2.5 border-2 border-blue-500 text-blue-600 rounded-lg disabled:opacity-40"
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">View</span>
          </button>

          <button
            onClick={onEdit}
            disabled={!selectedId}
            className="flex items-center gap-2 px-4 py-2.5 border-2 border-green-500 text-green-600 rounded-lg disabled:opacity-40"
          >
            <Pencil className="w-4 h-4" />
            <span className="hidden sm:inline">Edit</span>
          </button>

          <button
            onClick={onDelete}
            disabled={!selectedId}
            className="flex items-center gap-2 px-4 py-2.5 border-2 border-red-500 text-red-600 rounded-lg disabled:opacity-40"
          >
            <Trash2 className="w-4 h-4" />
            <span className="hidden sm:inline">Delete</span>
          </button>
        </div>

        {/* RIGHT PAGINATION + ADD */}
        <div className="flex items-center gap-4">
          <div className="flex gap-1 text-sm">
            <button
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 hover:bg-gray-100 rounded-lg disabled:opacity-40"
            >
              «
            </button>

            {[...Array(pages)].map((_, i) => (
              <button
                key={i}
                onClick={() => onPageChange(i + 1)}
                className={`px-3 py-2 rounded-lg font-medium ${
                  currentPage === i + 1
                    ? "bg-green-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => onPageChange(Math.min(pages, currentPage + 1))}
              disabled={currentPage === pages}
              className="px-3 py-2 hover:bg-gray-100 rounded-lg disabled:opacity-40"
            >
              »
            </button>
          </div>

          <button
            onClick={onAdd}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow"
          >
            + Add Payment
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN PAGE ================= */
export default function TaxPayment() {
  const [records, setRecords] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);


  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  /* ===== API (later real API) ===== */
  useEffect(() => {
    fetchBills();
  }, []);
  
  const fetchBills = async () => {
    try {
      setLoading(true);
      const res = await getAllBills();
  
      // backend returns: { bills: [], total, page }
      setRecords(res.data.bills || res.data);
    } catch (err) {
      console.error("Failed to load bills", err);
    } finally {
      setLoading(false);
    }
  };

  const handleView = async () => {
    if (!selectedId) return;
  
    try {
      const res = await getBillById(selectedId);
      alert(
        `Receipt: ${res.data.receiptNo}\nName: ${res.data.payerName}\nAmount: ₹${res.data.amount}`
      );
    } catch (err) {
      alert("Failed to fetch bill");
    }
  };

  const handleDelete = async () => {
    if (!selectedId) return;
  
    if (!window.confirm("Delete this bill?")) return;
  
    try {
      await deleteBill(selectedId);
      setSelectedId(null);
      fetchBills();
    } catch (err) {
      alert("Delete failed");
    }
  };
  

  /* ===== SEARCH ===== */
  const filteredRecords = records.filter(
    (r) =>
      r.payerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.receiptNo?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  /* ===== PAGINATION ===== */
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-6 pb-6 pt-3">
      <div className="max-w-7xl mx-auto">

        {/* SEARCH BAR */}
        <div className="bg-white p-4 rounded-xl shadow-md mb-4 border border-gray-100">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by Payer Name or Receipt No"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
              />
            </div>

            <button className="flex items-center justify-center gap-2 w-28 px-4 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all font-medium">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>

          <button className="flex items-center justify-center gap-2 w-28 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow">
            <Download className="w-5 h-5" />
            <span>Export</span>
          </button>

          </div>
        </div>

        {/* ACTION BAR */}
        <ActionBar
  onAdd={() => setShowAddModal(true)}
  onEdit={() => alert("Edit next step")}
  onView={handleView}
  onDelete={handleDelete}
  selectedId={selectedId}
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>


        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase">
                  <Hash className="inline w-4 h-4 mr-2" />
                  Receipt No
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase">
                  <User className="inline w-4 h-4 mr-2" />
                  Payer Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Payment Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase">
                  <IndianRupee className="inline w-4 h-4 mr-2" />
                  Amount
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center py-12">
                    <Loader className="w-8 h-8 animate-spin mx-auto text-blue-600" />
                    <p className="text-gray-500 mt-3">Loading records...</p>
                  </td>
                </tr>
              ) : paginatedRecords.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-12 text-gray-400">
                    <IndianRupee className="w-16 h-16 mx-auto mb-3 opacity-50" />
                    <p className="text-lg font-medium">No payments found</p>
                    <p className="text-sm">Add a payment to get started</p>
                  </td>
                </tr>
              ) : (
                paginatedRecords.map((r) => (
                  <tr
                    key={r.id}
                    onClick={() => setSelectedId(r.id)}
                    className={`cursor-pointer hover:bg-blue-50 ${
                      selectedId === r.id
                        ? "bg-blue-100 border-l-4 border-blue-600"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold">{r.receiptNo}</td>
                    <td className="px-6 py-4">{r.payerName}</td>
                    <td className="px-6 py-4">{r.paymentDate}</td>
                    <td className="px-6 py-4 font-bold text-green-600">
                      ₹{r.amount}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {showAddModal && (
  <AddBillModal
    onClose={() => setShowAddModal(false)}
    onSuccess={fetchBills}
  />
)}
      </div>
    </div>
  );
}


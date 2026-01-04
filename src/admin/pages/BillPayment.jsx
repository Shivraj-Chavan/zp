import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Eye, Pencil, Trash2, X, Save, Loader, Search, Download, Filter } from "lucide-react";
import * as XLSX from "xlsx";
import { addBill, getAllBills, updateBill, deleteBill, uploadBillsExcel } from "../services/billApi";

function ActionBar({ onView, onEdit, onDelete, onAdd, selectedId, currentPage, totalPages, onPageChange, onExcelUpload }) {
  const { t } = useTranslation();
  const MAX_PAGES = 5;

  const startPage = Math.max(
    1,
    currentPage - Math.floor(MAX_PAGES / 2)
  );

  const endPage = Math.min(
    totalPages,
    startPage + MAX_PAGES - 1
  );

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-1">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 mt-1">
          <button
            onClick={onView}
            disabled={!selectedId}
            className="flex items-center gap-2 px-4 py-2.5 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium"
            title={t('view')}
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">{t('view')}</span>
          </button>
          <button
            onClick={onEdit}
            disabled={!selectedId}
            className="flex items-center gap-2 px-4 py-2.5 border-2 border-green-500 text-green-600 rounded-lg hover:bg-green-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium"
            title={t('edit')}
          >
            <Pencil className="w-4 h-4" />
            <span className="hidden sm:inline">{t('edit')}</span>
          </button>
          <button
            onClick={onDelete}
            disabled={!selectedId}
            className="flex items-center gap-2 px-4 py-2.5 border-2 border-red-500 text-red-600 rounded-lg hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium"
            title={t('delete')}
          >
            <Trash2 className="w-4 h-4" />
            <span className="hidden sm:inline">{t('delete')}</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-1 text-sm">
            <button
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 hover:bg-gray-100 rounded-lg disabled:opacity-40 font-medium transition-all"
            >
              «
            </button>
            {startPage > 1 && (
              <>
                <button
                  onClick={() => onPageChange(1)}
                  className="px-3 py-2 hover:bg-gray-100 rounded-lg font-medium"
                >
                  1
                </button>
                <span className="px-2">…</span>
              </>
            )}

            {/* Page Numbers */}
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-2 rounded-lg font-medium transition-all ${currentPage === page
                    ? "bg-green-600 text-white"
                    : "hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            ))}

            {/* Last Page */}
            {endPage < totalPages && (
              <>
                <span className="px-2">…</span>
                <button
                  onClick={() => onPageChange(totalPages)}
                  className="px-3 py-2 hover:bg-gray-100 rounded-lg font-medium"
                >
                  {totalPages}
                </button>
              </>
            )}
            <button
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 hover:bg-gray-100 rounded-lg disabled:opacity-40 font-medium transition-all"
            >
              »
            </button>
          </div>

          <button
            onClick={onExcelUpload}
            className="flex items-center gap-2 px-4 py-2.5 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-medium"
          >
            <Download className="w-5 h-5" />
            <span className="hidden sm:inline">{t('uploadExcel')}</span>
          </button>

          <button
            onClick={onAdd}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2.5 rounded-lg hover:from-green-700 hover:to-green-800 font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <span className="text-xl">+</span>
            {t('addNew')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WaterSupply() {
  const { t } = useTranslation();
  const [records, setRecords] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("add");
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showExcelModal, setShowExcelModal] = useState(false);
  const [file, setFile] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const [formData, setFormData] = useState({
    bill_no: "",
    owner_name: "",
    property_no: "",
    gharpatti_pending: "",
    gharpatti_penalty: "",
    gharpatti_current: "",
    water_pending: "",
    water_current: "",
    divakar_pending: "",
    divakar_current: "",
    arogyakar_pending: "",
    arogyakar_current: "",
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getAllBills({
        page: currentPage,
        limit: 20,
        search: searchTerm,
      });

      setRecords(response.data.bills);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      console.error("Error fetching data:", err);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, searchTerm]);


  const filteredRecords = records;


  const handleAdd = () => {
    setMode("add");
    setFormData({
      bill_no: "",
      owner_name: "",
      property_no: "",
      gharpatti_pending: "",
      gharpatti_penalty: "",
      gharpatti_current: "",
      water_pending: "",
      water_current: "",
      divakar_pending: "",
      divakar_current: "",
      arogyakar_pending: "",
      arogyakar_current: "",
    });
    setShowModal(true);
  };

  const handleEdit = () => {
    const rec = records.find((r) => r.id === selectedId);
    if (!rec) return;
    setFormData(rec);
    setMode("edit");
    setShowModal(true);
  };

  const handleView = () => {
    const rec = records.find((r) => r.id === selectedId);
    if (!rec) return;
    setFormData(rec);
    setMode("view");
    setShowModal(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteBill(selectedId);
      setSelectedId(null);
      setShowDeleteConfirm(false);
      await fetchData();
    } catch (err) {
      console.error("Error deleting:", err);
      alert(t('failedToDelete'));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (mode === "add") {
        const response = await addBill(formData);
        console.log("Bill added:", response.data);
      } else {
        const response = await updateBill(selectedId, formData);
        console.log("Bill updated:", response.data);
      }

      setShowModal(false);
      setSelectedId(null);
      await fetchData();

    } catch (err) {
      console.error("Error submitting:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an Excel file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await uploadBillsExcel(formData);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Excel upload failed");
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = (record) => {
    const values = [
      record.gharpatti_pending,
      record.gharpatti_penalty,
      record.gharpatti_current,
      record.water_pending,
      record.water_current,
      record.divakar_pending,
      record.divakar_current,
      record.arogyakar_pending,
      record.arogyakar_current,
    ];
    return values.reduce((sum, val) => sum + parseFloat(val || 0), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto mt-0.5">
        <div className="bg-white p-2 rounded-xl shadow-md mb-3 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('searchByOwner')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>
            {/* <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all font-medium">
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">{t('filter')}</span>
            </button> */}
            <button className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium shadow-md">
              <Download className="w-5 h-5" />
              <span className="hidden sm:inline">{t('export')}</span>
            </button>
          </div>
       

        <ActionBar
          onAdd={handleAdd}
          onEdit={handleEdit}
          onView={handleView}
          onDelete={handleDelete}
          selectedId={selectedId}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onExcelUpload={() => setShowExcelModal(true)}
        />
 </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300 text-sm">
                  <th rowSpan="2" className="px-4 py-3 font-bold text-gray-700 border">
                    {t('billNo')}
                  </th>
                  <th rowSpan="2" className="px-4 py-3 font-bold text-gray-700 border">
                    {t('propertyNo')}
                  </th>
                  <th rowSpan="2" className="px-4 py-3 font-bold text-gray-700 border">
                    {t('ownerName')}
                  </th>

                  <th colSpan="3" className="px-4 py-3 font-bold text-center text-gray-700 border">
                    {t('gharpattiTax')}
                  </th>
                  <th colSpan="2" className="px-4 py-3 font-bold text-center text-gray-700 border">
                    {t('waterCharge')}
                  </th>
                  <th colSpan="2" className="px-4 py-3 font-bold text-center text-gray-700 border">
                    {t('divakarTax')}
                  </th>
                  <th colSpan="2" className="px-4 py-3 font-bold text-center text-gray-700 border">
                    {t('arogyakarTax')}
                  </th>

                  <th rowSpan="2" className="px-4 py-3 font-bold text-gray-700 border">
                    {t('total')}
                  </th>
                </tr>

                <tr className="bg-gray-50 text-xs">
                  <th className="px-3 py-2 border">{t('pending')}</th>
                  <th className="px-3 py-2 border">{t('penalty')}</th>
                  <th className="px-3 py-2 border">{t('current')}</th>

                  <th className="px-3 py-2 border">{t('pending')}</th>
                  <th className="px-3 py-2 border">{t('current')}</th>

                  <th className="px-3 py-2 border">{t('pending')}</th>
                  <th className="px-3 py-2 border">{t('current')}</th>

                  <th className="px-3 py-2 border">{t('pending')}</th>
                  <th className="px-3 py-2 border">{t('current')}</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-sm">
                {loading ? (
                  <tr>
                    <td colSpan="13" className="text-center py-10">
                      <Loader className="w-6 h-6 animate-spin mx-auto text-blue-600" />
                      <p className="text-gray-500 mt-2">{t('loadingRecords')}</p>
                    </td>
                  </tr>
                ) : filteredRecords.length === 0 ? (
                  <tr>
                    <td colSpan="13" className="text-center py-10 text-gray-500">
                      {t('noRecordsFound')}
                    </td>
                  </tr>
                ) : (
                  filteredRecords.map((r) => (
                    <tr
                      key={r.id}
                      onClick={() => setSelectedId(r.id)}
                      className={`cursor-pointer hover:bg-blue-50 ${selectedId === r.id ? "bg-blue-100 border-l-4 border-blue-600" : ""
                        }`}
                    >
                      <td className="px-3 py-2 border">{r.bill_no}</td>
                      <td className="px-3 py-2 border">{r.property_no}</td>
                      <td className="px-3 py-2 border font-medium">{r.owner_name}</td>

                      <td className="px-3 py-2 border text-right">{r.gharpatti_pending || 0}</td>
                      <td className="px-3 py-2 border text-right">{r.gharpatti_penalty || 0}</td>
                      <td className="px-3 py-2 border text-right">{r.gharpatti_current || 0}</td>

                      <td className="px-3 py-2 border text-right">{r.water_pending || 0}</td>
                      <td className="px-3 py-2 border text-right">{r.water_current || 0}</td>

                      <td className="px-3 py-2 border text-right">{r.divakar_pending || 0}</td>
                      <td className="px-3 py-2 border text-right">{r.divakar_current || 0}</td>

                      <td className="px-3 py-2 border text-right">{r.arogyakar_pending || 0}</td>
                      <td className="px-3 py-2 border text-right">{r.arogyakar_current || 0}</td>

                      <td className="px-3 py-2 border text-right font-bold text-green-700">
                        ₹{calculateTotal(r).toFixed(2)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          mode={mode}
          formData={formData}
          setFormData={setFormData}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )}

      {showDeleteConfirm && (
        <DeleteConfirmModal
          onConfirm={confirmDelete}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}

      {showExcelModal && (
        <ExcelUploadModal onClose={() => setShowExcelModal(false)} setFile={setFile} file={file} loading={loading} handleUpload={handleUpload} />
      )}
    </div>
  );
}

function Modal({ mode, formData, setFormData, onClose, onSubmit, loading }) {
  const { t } = useTranslation();

  const fields = [
    { key: "bill_no", label: t('billNo'), type: "text" },
    { key: "property_no", label: t('propertyNo'), type: "text" },
    { key: "owner_name", label: t('ownerName'), type: "text" },

    { key: "gharpatti_pending", label: t('gharpattiPending'), type: "number" },
    { key: "gharpatti_penalty", label: t('gharpattiPenalty'), type: "number" },
    { key: "gharpatti_current", label: t('gharpattiCurrent'), type: "number" },

    { key: "water_pending", label: t('waterPending'), type: "number" },
    { key: "water_current", label: t('waterCurrent'), type: "number" },

    { key: "divakar_pending", label: t('divakarPending'), type: "number" },
    { key: "divakar_current", label: t('divakarCurrent'), type: "number" },

    { key: "arogyakar_pending", label: t('arogyakarPending'), type: "number" },
    { key: "arogyakar_current", label: t('arogyakarCurrent'), type: "number" },
  ];

  const getModalTitle = () => {
    if (mode === "add") return t('addNewBillRecord');
    if (mode === "edit") return t('editBillRecord');
    return t('viewBillRecord');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{getModalTitle()}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
          {fields.map(({ key, label, type }) => (
            <div key={key}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={type}
                disabled={mode === "view"}
                value={formData[key] || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [key]: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none disabled:bg-gray-100"
                placeholder={`${label}`}
              />
            </div>
          ))}
        </div>

        <div className="p-6 border-t border-gray-200 flex gap-3">
          {mode !== "view" && (
            <button
              onClick={onSubmit}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  {t('saving')}
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  {t('saveRecord')}
                </>
              )}
            </button>
          )}
          <button
            onClick={onClose}
            className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-all"
          >
            {mode === "view" ? t('close') : t('cancel')}
          </button>
        </div>
      </div>
    </div>
  );
}

function DeleteConfirmModal({ onConfirm, onCancel }) {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trash2 className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
            {t('confirmDeletion')}
          </h3>
          <p className="text-center text-gray-600 mb-6">
            {t('deleteConfirmMessage')}
          </p>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-all"
            >
              {t('cancel')}
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all"
            >
              {t('delete')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExcelUploadModal({ onClose, handleUpload, setFile, file, loading }) {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">{t('uploadExcelFile')}</h2>
        <input
          type="file"

          accept=".xlsx,.xls"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border rounded px-3 py-2 mb-4"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            {t('cancel')}
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={handleUpload} disabled={loading}

          >
            {t('upload')}
          </button>
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";
import {
  Eye,
  Pencil,
  Trash2,
  Loader,
  Search,
  Download,
  Filter,
  Home,
  User,
  IndianRupee,
  Hash,
} from "lucide-react";

/* ================= ActionBar (MATCHES WATER SUPPLY) ================= */
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
  const pages = Math.max(totalPages, 1); // ⭐ IMPORTANT FIX

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4 border border-gray-100">
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
                    : "hover:bg-gray-100 text-gray-700"
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
            + Add Property
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN PAGE ================= */
export default function PropertyTax() {
  const [records, setRecords] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/property-tax");
      const data = await res.json();
      setRecords(data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredRecords = records.filter(
    (r) =>
      r.ownerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.propertyNo?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-6 pb-6 pt-3">
      <div className="max-w-7xl mx-auto mt-1">

        {/* SEARCH BAR */}
        <div className="bg-white p-4 rounded-xl shadow-md mb-3 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by Owner Name or Property No..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
              />
            </div>

            <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-lg">
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filter</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg shadow">
              <Download className="w-5 h-5" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>

        {/* ACTION BAR */}
        <ActionBar
          onAdd={() => {}}
          onEdit={() => {}}
          onView={() => {}}
          onDelete={() => {}}
          selectedId={selectedId}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">
                    <Hash className="inline w-4 h-4 mr-2" /> Property No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">
                    <User className="inline w-4 h-4 mr-2" /> Owner Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">
                    <Home className="inline w-4 h-4 mr-2" /> Area
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">
                    <IndianRupee className="inline w-4 h-4 mr-2" /> Tax Amount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center py-12">
                      <Loader className="w-8 h-8 animate-spin mx-auto text-blue-600" />
                      <p className="text-gray-500 mt-3">Loading records...</p>
                    </td>
                  </tr>
                ) : paginatedRecords.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-12 text-gray-400">
                      <Home className="w-16 h-16 mx-auto mb-3 opacity-50" />
                      <p className="text-lg font-medium">No records found</p>
                      <p className="text-sm">Add a new property to get started</p>
                    </td>
                  </tr>
                ) : (
                  paginatedRecords.map((r) => (
                    <tr
                      key={r._id}
                      onClick={() => setSelectedId(r._id)}
                      className={`cursor-pointer hover:bg-blue-50 ${
                        selectedId === r._id
                          ? "bg-blue-100 border-l-4 border-blue-600"
                          : ""
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold">{r.propertyNo}</td>
                      <td className="px-6 py-4">{r.ownerName}</td>
                      <td className="px-6 py-4">{r.area}</td>
                      <td className="px-6 py-4 font-bold text-green-600">
                        ₹{r.taxAmount}
                      </td>
                      <td className="px-6 py-4 font-semibold">{r.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

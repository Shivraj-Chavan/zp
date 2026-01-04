import { FiEye, FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";

export default function ActionBar({ onAdd, onExcelUpload }) {
  
  return (
    <div className="bg-white shadow-sm border rounded-lg px-4 py-2 flex items-center justify-between sticky top-14 z-10">

      {/* LEFT : Actions */}
      <div className="flex items-center gap-2">
        <ActionIcon icon={<FiEye />} label="View" />
        <ActionIcon icon={<FiEdit2 />} label="Edit" />
        <ActionIcon icon={<FiTrash2 />} label="Delete" danger />
      </div>

      {/* CENTER : Pagination */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <button className="px-2 hover:text-green-600">«</button>
        <button className="px-3 py-1 rounded bg-green-100 text-green-700 font-semibold">
          1
        </button>
        <button className="px-3 py-1 rounded hover:bg-gray-100">2</button>
        <button className="px-3 py-1 rounded hover:bg-gray-100">3</button>
        <button className="px-2 hover:text-green-600">»</button>
      </div>

      {/* RIGHT : Add */}
      {/* RIGHT : Add buttons */}
<div className="flex items-center gap-2">
  
  {/* Add New */}
  <button
    onClick={onAdd}
    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded shadow-sm"
  >
    <FiPlus />
    Add New
  </button>

  {/* Upload Excel */}
  <button
    onClick={onExcelUpload}
    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded shadow-sm"
  >
    Upload Excel
  </button>

</div>

    </div>
  );
}

/* Small reusable icon button */
function ActionIcon({ icon, label, danger }) {
  return (
    <button
      title={label}
      className={`p-2 rounded border hover:bg-gray-100 transition
        ${danger ? "text-red-600 hover:bg-red-50" : "text-gray-700"}
      `}
    >
      {icon}
    </button>
  );
}

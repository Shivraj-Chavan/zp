import { useState } from "react";
import { addBill } from "../services/billApi";

export default function AddBillModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    type: "water",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await addBill(form);
      onSuccess();   // reload table
      onClose();     // close modal
    } catch (err) {
      alert("Failed to add bill");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-lg font-bold mb-4">Add Bill</h2>

        <input
          name="name"
          placeholder="Consumer Name"
          className="border w-full mb-3 p-2"
          onChange={handleChange}
        />

        <input
          name="amount"
          placeholder="Amount"
          className="border w-full mb-3 p-2"
          onChange={handleChange}
        />

        <select
          name="type"
          className="border w-full mb-4 p-2"
          onChange={handleChange}
        >
          <option value="water">Water Supply</option>
          <option value="property">Property Tax</option>
          <option value="tax">Tax Payment</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-1 border">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-1 bg-green-600 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

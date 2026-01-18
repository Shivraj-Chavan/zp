export default function AdminBillingTable({ data }) {

    const total = (row) => {
      const sum = (o) =>
        Number(o.pending || 0) +
        Number(o.penalty || 0) +
        Number(o.current || 0);
  
      return (
        sum(row.propertyTax) +
        sum(row.waterCharge) +
        sum(row.otherTax)
      );
    };
  
    return (
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-sm">
  
          {/* HEADER */}
          <thead>
            <tr className="bg-green-100">
              <th rowSpan="2" className=" px-2">Sr No</th>
              <th rowSpan="2" className=" px-2">Property No</th>
              <th rowSpan="2" className=" px-2">Property Holder</th>
  
              <th colSpan="3" className=" px-2">Property Tax</th>
              <th colSpan="3" className=" px-2">Water Charge</th>
              <th colSpan="3" className=" px-2">Other Tax</th>
  
              <th rowSpan="2" className=" px-2">Total</th>
            </tr>
  
            <tr className="bg-green-50">
              {Array(3).fill("Pending").map((_, i) => <th key={`ptp${i}`} className="">Pending</th>)}
              {Array(3).fill("Penalty").map((_, i) => <th key={`ptpe${i}`} className="">Penalty</th>)}
              {Array(3).fill("Current").map((_, i) => <th key={`ptc${i}`} className="">Current</th>)}
            </tr>
          </thead>
  
          {/* BODY */}
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan="13" className="text-center py-6 text-gray-400">
                  No records found
                </td>
              </tr>
            )}
  
            {data.map((row, i) => (
              <tr key={row._id} className="hover:bg-gray-50">
                <td className="border px-2 text-center">{i + 1}</td>
                <td className="border px-2">{row.propertyNo}</td>
                <td className="border px-2">{row.ownerName}</td>
  
                <td className="border px-2">{row.propertyTax.pending}</td>
                <td className="border px-2">{row.propertyTax.penalty}</td>
                <td className="border px-2">{row.propertyTax.current}</td>
  
                <td className="border px-2">{row.waterCharge.pending}</td>
                <td className="border px-2">{row.waterCharge.penalty}</td>
                <td className="border px-2">{row.waterCharge.current}</td>
  
                <td className="border px-2">{row.otherTax.pending}</td>
                <td className="border px-2">{row.otherTax.penalty}</td>
                <td className="border px-2">{row.otherTax.current}</td>
  
                <td className="border px-2 font-semibold">
                  ₹ {total(row)}
                </td>
              </tr>
            ))}
          </tbody>
  
        </table>
      </div>
    );
  }
  
import React, { useEffect, useState } from "react";

const DynamicTable = () => {
  // State to store the fetched data
  const [tableData, setTableData] = useState([]);

  // Simulate data fetching (replace with actual API call)
  useEffect(() => {
    // Example static data (replace with dynamic data fetching)
    const fetchData = async () => {
      const data = [
        { law: "Traffic Violation", violationPercentage: 45, caseDetails: "Speeding on highway" },
        { law: "Theft", violationPercentage: 30, caseDetails: "Stolen wallet" },
        { law: "Property Dispute", violationPercentage: 25, caseDetails: "Land ownership issue" },
      ];
      setTableData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Violation Cases</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Law</th>
            <th className="py-2 px-4 border-b">% of Violation</th>
            <th className="py-2 px-4 border-b">Case Details</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{row.law}</td>
              <td className="py-2 px-4 border-b">{row.violationPercentage}%</td>
              <td className="py-2 px-4 border-b">{row.caseDetails}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
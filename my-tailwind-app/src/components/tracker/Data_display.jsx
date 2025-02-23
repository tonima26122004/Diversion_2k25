import React, { useState } from "react";
import axios from "axios";

const Data_display = ({ city }) => {
  const [pieChartUrl, setPieChartUrl] = useState(null);
  const [error, setError] = useState(null);

  // ✅ Update with correct Flask URL
  const BASE_URL = "http://127.0.0.1:5000"; 

  const handleDownloadPieChart = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/download_pie_chart`, {
        responseType: 'blob',
      });

      const imageUrl = URL.createObjectURL(new Blob([response.data]));
      setPieChartUrl(imageUrl);
      setError(null);
    } catch (error) {
      console.error("Error downloading pie chart:", error);
      setError("Failed to download the pie chart. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Charts for {city}, West Bengal</h2>

      {error && <p className="text-red-500">{error}</p>}

      <button 
        onClick={handleDownloadPieChart} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Download and Display Pie Chart
      </button>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Pie Chart</h3>
        {pieChartUrl ? (
          <img src={pieChartUrl} alt="Pie Chart" className="w-full h-auto" />
        ) : (
          <p>No Pie Chart Available</p>
        )}
      </div>
    </div>
  );
};

export default Data_display;

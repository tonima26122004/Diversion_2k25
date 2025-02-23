import React, { useEffect, useState } from "react";
import axios from "axios";

const Data_display = () => {
  const [charts, setCharts] = useState({ pie_chart: null, bar_chart: null });
  const [error, setError] = useState(null);

  // Backend Base URL
  const BASE_URL = "https://48ab-2409-40e0-2c-1348-a18e-36e1-ede4-9d91.ngrok-free.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/charts`, {
          params: { city: "Kolkata", state: "WestBengal" },
          headers: { "Content-Type": "application/json" },
        });

        console.log("Response Data:", response.data); // Debugging Log

        if (response.data.pie_chart && response.data.bar_chart) {
          setCharts(response.data);
          setError(null);
        } else {
          throw new Error("Invalid data format received from backend");
        }
      } catch (error) {
        console.error("Error fetching charts:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Charts for Kolkata, West Bengal</h2>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          {/* Pie Chart */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Pie Chart</h3>
            {charts.pie_chart ? (
              <img src={charts.pie_chart} alt="Pie Chart" className="w-full h-auto" />
            ) : (
              <p>Loading Pie Chart...</p>
            )}
          </div>

          {/* Bar Chart */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Bar Chart</h3>
            {charts.bar_chart ? (
              <img src={charts.bar_chart} alt="Bar Chart" className="w-full h-auto" />
            ) : (
              <p>Loading Bar Chart...</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Data_display;

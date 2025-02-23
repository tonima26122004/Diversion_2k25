import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const kolkata_data = {
  "Percentage": [30, 20, 50], // Converted to numbers
  "Violation Name": ["Violation A", "Violation B", "Violation C"]
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const data = kolkata_data["Percentage"].map((value, index) => ({
  name: kolkata_data["Violation Name"][index],
  value: value
}));

const Data_display = () => {
  return (
    <ResponsiveContainer width="100%" height={400}> {/* Increased height */}
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120} // Increased outer radius
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Data_display;

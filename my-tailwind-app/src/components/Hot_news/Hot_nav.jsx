import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Using Lucide for dropdown arrow

const HotNav = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("About Constitution");

  return (
    <div className="w-[25%] pl-6" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Title */}
      <div className="mb-2">
        <span className="text-xl font-libra text-black">
          Search <span className="text-red-900">News</span> by{" "}
          <span className="text-red-900">Category</span>
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-between border border-black rounded-full p-1 pl-2">
        {/* Category Dropdown */}
        <div className="flex items-center gap-2 ml-4">
          <label className="text-black">Category:</label>
          <div className="relative">
            <select
              className="bg-transparent rounded py-1 ml-2 text-gray-500 pr-6 appearance-none outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="About Constitution">About Constitution</option>
              <option value="Traffic">Traffic</option>
              <option value="Crime">Crime</option>
              <option value="Education">Education</option>
            </select>

            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 bg-[#E4E2D6] w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HotNav;

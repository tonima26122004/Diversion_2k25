import React from "react";

const TopNav = () => {
  return (
    <div
      className="w-2/5  pl-6 "
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Title */}
      <div className=" mb-2">
        <span className="text-xl font-libra text-black">
          Explore <span className="text-red-900">Articles</span>, Discover{" "}
          <span className="text-red-900">Rights</span>
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-between border border-black rounded-full p-1 pl-2 ">
        {/* Part No Dropdown */}
        <div className="flex items-center ">
          <label htmlFor="part" className="text-black">
            Part No.
          </label>
          <select
  id="part"
  className=" bg-transparent text-gray-500 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
>
  {Array.from({ length: 16 }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ))}
</select>

        </div>

        {/* Article No Input */}
        <div className="flex ml-2 items-center gap-2">
          <label htmlFor="article" className="text-black">
            Article No.
          </label>
          <input
            id="article"
            type="number"
            className="bg-transparent rounded  py-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="324"
            min={1}
            max={324}
          />
        </div>

        {/* Categories Dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="categories" className="text-black">
            Categories
          </label>
          <select
            id="categories"
            className="bg-transparent rounded  py-1 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="traffic">Traffic</option>
            <option value="crime">Crime</option>
            <option value="education">Education</option>
          </select>
        </div>

        {/* Search Button */}
        <button className=" bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800">
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

export default TopNav;

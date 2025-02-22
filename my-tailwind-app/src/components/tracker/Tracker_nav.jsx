import React from 'react'

const Tracker_nav = () => {
  return (
    <div>
        <div className="flex  mx-3 my-3 items-center justify-between border border-black rounded-full p-1 pl-2 ">
  {/* City Dropdown */}
  <div className="flex items-center ">
    <label htmlFor="city" className="text-black">
      City : 
    </label>
    <select
      id="city"
      className="bg-transparent text-gray-500 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      <option value="kolkata">Kolkata</option>
      {Array.from({ length: 16 }, (_, index) => (
        <option key={index + 1} value={`city${index + 1}`}>
          City {index + 1}
        </option>
      ))}
    </select>
  </div>

  {/* State Dropdown */}
  <div className="flex items-center gap-2">
    <label htmlFor="state" className="text-black">
      State : 
    </label>
    <select
      id="state"
      className="bg-transparent rounded py-1 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      <option value="westbengal">West Bengal</option>
      <option value="state1">State 1</option>
      <option value="state2">State 2</option>
      <option value="state3">State 3</option>
    </select>
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
  )
}

export default Tracker_nav

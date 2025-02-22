import React from "react";

const Numpad = ({ onNumberClick }) => {
  return (
    <div className="flex flex-col items-center bg-[#E4E2D6]  rounded-lg">
      {/* Numpad Grid */}
      <div className="grid grid-cols-5 gap-2">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => onNumberClick(num)}
            className="w-10 h-10 bg-[#766C40] border-2 border-black text-white text-2xl font-bold rounded-md flex items-center justify-center shadow-md active:bg-gray-900"
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Numpad;

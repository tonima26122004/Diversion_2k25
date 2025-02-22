import React from "react";

const Tracker3_card= ({ title, date, content, onLearnMore }) => {
  return (
    <div className="bg-transparent border-[#766C4066] border-4 rounded-xl p-4 flex justify-between w-[99%] min-h-[200px]">
      {/* Left Section (50%) */}
      <div className="w-[50%] flex flex-col justify-between">
        <h2 className="text-3xl font-libra font-semibold">{title}</h2>
        <p className="text-md font-libra text-black">{date}</p>
      </div>

      {/* Right Section (65%) */}
      <div className="w-[65%] flex flex-col justify-between">
        <div className="flex justify-end">
          <button onClick={onLearnMore} className="p-2 w-14 transition">
            <img src="hot_card_more.svg" alt="Learn More" />
          </button>
        </div>
        <p className="text-sm font-libra text-gray-700 break-words">{content}</p>
      </div>
    </div>
  );
};

export default Tracker3_card;
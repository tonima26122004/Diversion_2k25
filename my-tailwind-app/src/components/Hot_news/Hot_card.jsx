import React from "react";
import { ArrowUpRight } from "lucide-react";

const HotCard = ({ title, date, content, onLearnMore }) => {
  return (
    <div className="bg-transparent border-[#766C4066] border-4 rounded-xl p-4 flex justify-between w-[99%] h-[200px] ">
      {/* Left Section (35%) */}
      <div className="w-[30%] flex flex-col justify-between ">
        <h2 className="text-3xl font-libra font-semibold">{title}</h2>
        <p className="text-md font-libra text-black">{date}</p>
      </div>
      
      {/* Right Section (65%) */}
      <div className="w-[65%] flex flex-col justify-between ">
        <div className="flex justify-end">
          <button
            onClick={onLearnMore}
            className="p-2 w-14 transition"
          >
            <img src="hot_card_more.svg" alt="" />
          </button>
        </div>
        <p className="text-sm font-libra text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default HotCard;


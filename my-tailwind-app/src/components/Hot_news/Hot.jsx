import React from "react";
import Nav from "../main copy/Nav";
import LanguageDropdown from "../bot copy/Lang";
import HotCard from "./Hot_card.jsx";
import HotNav from "./Hot_nav.jsx";

const Hot = () => {
  return (
    <div className="relative">
      <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
        <Nav />

        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative flex flex-col">
          {/* Sticky Top Section */}
          <div className="sticky top-0 z-10 bg-[#E4E2D6]">
            {/* Heading */}
            <div className="flex justify-between items-center py-2 px-4">
              <div className="flex flex-col w-full gap-2">
                <h1 className="text-5xl font-libra text-[#52524D]">
                  Latest News Updates
                </h1>
                <h1 className="text-xl font-libra text-[#52524D]">
                  Stay Informed on the Latest Headlines
                </h1>
                <div className="border-[#766C40] border-2 w-[45%]"></div>
              </div>
              <div className="flex items-center gap-4">
                <LanguageDropdown />
                <button>
                  <img className="w-32" src="User.svg" alt="User Profile" />
                </button>
              </div>
            </div>

            {/* Sticky HotNav */}
            <HotNav />
          </div>

          {/* Scrollable Content */}
          <div className=" flex-1 px-4 py-4 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-[#766C40] scrollbar-track-transparent">
            <div className="flex flex-col gap-4 items-center w-full">
              {/* Cards */}
              <div className="flex flex-col gap-4 items-center w-full">
                {Array.from({ length: 25 }).map((_, index) => (
                  <HotCard
                    key={index}
                    title="Supreme Court Upholds 'Secular' and 'Socialist' in Preamble"
                    date="February 14, 2025"
                    content="The Supreme Court, on November 26, 2024, dismissed petitions challenging the inclusion of the words 'secular' and 'socialist' in the Preamble of the Constitution. The court affirmed that these terms, added through the Forty-second Amendment Act of 1976, align with the nation's foundational principles and that Parliament holds the authority to amend the Constitution under Article 368."
                    onLearnMore={() => alert("Learn more clicked!")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;

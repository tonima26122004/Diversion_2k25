import React from "react";
import Nav from "../main copy/Nav";
import LanguageDropdown from "../bot copy/Lang";
import HotCard from "./Hot_card.jsx";

const Hot = () => {
  return (
    <div className="relative">
      <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
        <Nav />
        
        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-hidden main">
          {/* Heading */}
          <div className="flex">
            <div className="flex flex-col w-full gap-2 py-2">
              <div>
                <img className="px-4 w-[180px]" src="Part no.svg" alt="" />
              </div>

              <h1 className="text-3xl font-libra px-4 text-[#52524D] ">
                “Name and territory of the Union”
              </h1>
              <div className="border-[#766C40] border-2 w-[25%]"></div>
            </div>
            <div className="flex items-center gap-4 px-3">
              <LanguageDropdown />
              <button>
                <img className="w-32" src="User.svg" alt="User Profile" />
              </button>
            </div>
          </div>

          {/* content */}
          <div className="flex justify-center">
          <div className="flex flex-col gap-4 ">
            {/* cards */}
          <HotCard
            title="Supreme Court Upholds 'Secular' and 'Socialist' in Preamble"
            date="February 14, 2025"
            content="The Supreme CouOn November 26, 2024, the Supreme Court of India dismissed petitions challenging the inclusion of the words 'secular' and 'socialist' in the Preamble of the Constitution. The court affirmed that these terms, added through the Forty-second Amendment Act of 1976, align with the nation's foundational principles and that Parliament holds the authority to amend the Constitution under Article 368.rt has ruled in favor of maintaining key amendments, reinforcing democratic principles and ensuring constitutional integrity."
            onLearnMore={() => alert("Learn more clicked!")}
          />
          <HotCard
            title="Supreme Court Upholds 'Secular' and 'Socialist' in Preamble"
            date="February 14, 2025"
            content="The Supreme CouOn November 26, 2024, the Supreme Court of India dismissed petitions challenging the inclusion of the words 'secular' and 'socialist' in the Preamble of the Constitution. The court affirmed that these terms, added through the Forty-second Amendment Act of 1976, align with the nation's foundational principles and that Parliament holds the authority to amend the Constitution under Article 368.rt has ruled in favor of maintaining key amendments, reinforcing democratic principles and ensuring constitutional integrity."
            onLearnMore={() => alert("Learn more clicked!")}
          />



          </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Hot;


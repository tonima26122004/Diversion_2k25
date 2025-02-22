
import React from "react";
import Nav from "../Knowledge/part_hub/Nav";

import  { useState, useEffect } from "react";


import LanguageDropdown from "../bot copy/Lang";
import Displaybox from "./Displaybox";
import About_nav from "./read_nav";

const A_hub = () => {
  const [read, setRead] = useState([]);
  const [articleNo, setArticleNo] = useState(1);

  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await fetch("/knowledge.json");
        const result = await response.json();

        if (Array.isArray(result.Articles)) {
          setRead(result.Articles);
        } else {
          console.error("Data format is incorrect:", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetch_data();
  }, []);

  return (
    <div className="relative">
      <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
        <Nav />

        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-hidden">
          {/* Heading */}
          <div className="flex">
            <div className="flex flex-col w-full gap-2 py-2">
              <div>
                <img className="px-4 w-[180px]" src="Part no.svg" alt="" />
              </div>

              <h1 className="text-3xl font-libra px-4 text-[#52524D]">
                {read.length > 0 ? `“${read[0].Title}”` : "Loading..."}
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

          {/* Nav */}
          <About_nav />

          {/* Displaybox */}
          <div className="relative border-2 border-black w-[90%] h-[74%] mx-auto mt-3 p-4 rounded-xl">
            <Displaybox read={read} articleNo={articleNo} />

            <button className="flex items-center absolute gap-3 bottom-6 text-lg font-semibold border-4 border-black p-1 rounded-lg left-1/2 -translate-x-1/2">
              <img className="w-[20px]" src="listen.svg" alt="" />
              Listen to the article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default A_hub;

import React from "react";
import Nav from "../main copy/Nav";
import LanguageDropdown from "../bot copy/Lang";
import Displaybox from "./Displaybox";
import { Link } from "react-router-dom";


const A_hub = () => {
  return (
    <div className="relative">
      <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
        <Nav />

        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-hidden">

            {/* Heading */}
          <div className="flex">
            <div className="flex flex-col w-full gap-2 py-4">
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

          {/* Nav */}
          <div className="mt-6">
            <ul className="font-libra flex gap-14 justify-center text-xl">
                <li>
                <Link
                    
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#65090A] after:transition-all after:duration-400 hover:after:w-full"
                >
                    Read the article
                </Link>
                </li>
                <li>
                <Link
                    to="/Visualize your lesson"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#65090A] after:transition-all after:duration-400 hover:after:w-full"
                >
                    Visualize your lesson
                </Link>
                </li>
                <li>
                <Link
                    to="/Play to find way"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#65090A] after:transition-all after:duration-400 hover:after:w-full"
                >
                    Play to find way
                </Link>
                </li>
                <li>
                <Link
                    to="/Related cases"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#65090A] after:transition-all after:duration-400 hover:after:w-full"
                >
                    Related cases
                </Link>
                </li>
            </ul>
            </div>;

          {/* displaybox */}
          
          <div className="relative border-2 border-black w-[90%] h-[72%] mx-auto mt-4 p-4 rounded-xl">
            <Displaybox/>
             
             <button className="flex items-center absolute gap-3 bottom-6 text-lg font-semibold border-4 border-black p-1 rounded-lg left-1/2 -translate-x-1/2">
                <img className="w-[20px]" src="listen.svg" alt="" />
                listen the article
             </button>
            </div>



        </div>
      </div>
    </div>
  );
};

export default A_hub;

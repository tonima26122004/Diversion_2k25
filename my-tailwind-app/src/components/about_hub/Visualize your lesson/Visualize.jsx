import React from "react";
import Nav from "../../main copy/Nav";
import LanguageDropdown from "../../bot copy/Lang";

import Visualize_nav from "./Visualize_nav"

import  { useState } from "react";




   


const Visualize = () => {
  
  return (
    <div className="relative">
      <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
        <Nav/>

        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-hidden">

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

          {/* Nav */}
          <Visualize_nav/>

          {/* displaybox */}
          
          <div className="relative border-2 border-black w-[90%] h-[74%] mx-auto mt-3 p-4 rounded-xl">
            {/* <Displaybox/> */}
             
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

export default Visualize;


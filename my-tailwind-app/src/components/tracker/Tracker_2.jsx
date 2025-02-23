import React from 'react';
import Nav from '../Knowledge/part_hub/Nav';
import LanguageDropdown from '../bot copy/Lang';
import Data_display from './Data_display';

const Tracker_2 = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
          <Nav />

          <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-hidden">
            {/* Heading */}
            <div className="flex">
              <div className="flex flex-col w-full gap-2 py-2">
                <div>
                  <h1 className='text-5xl my-2 font-libra px-4'>Law Violation Tracker</h1>
                </div>

                <h1 className="text-2xl font-libra px-4 text-[#52524D] ">
                  Stay updated on high-risk areas and legal breaches near you.
                </h1>
                <div className="border-[#766C40] border-2 w-[88%]"></div>
              </div>
              <div className="flex items-center gap-4 px-3">
                <LanguageDropdown />
                <button>
                  <img className="w-32" src="User.svg" alt="User Profile" />
                </button>
              </div>
            </div>

            <div className="relative border-2 border-black w-[98%] h-[74%] mx-auto mt-3 p-4 rounded-xl">
              <h1 className="text-2xl px-4 font-libra font-semibold text-[#766C40] ">
                Tracking Law <a className="text-2xl font-libra text-[#65090A]">Violations</a> Across{" "}
                <a className="text-2xl font-libra text-[#65090A]">Regions & Time in Newtown:</a>
              </h1>

              <div>
        <Data_display city="Kolkata" />
      </div>  
            

            </div>
          </div>
        </div>
      </div>

      {/* Pass the city prop to Data_display */}
      
    </div>
  );
};

export default Tracker_2;
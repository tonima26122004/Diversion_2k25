import React, { useState } from 'react';
import Nav from '../Knowledge/part_hub/Nav';
import LanguageDropdown from '../bot copy/Lang';
import Tracker_nav from './Tracker_nav';
import Map_display from './Map_display';

const Tracker = () => {
  const [city, setCity] = useState('kolkata');
  const [state, setState] = useState('westbengal');

  const handleCityChange = (newCity) => {
    setCity(newCity);
    // Add logic to update map based on city
  };

  const handleStateChange = (newState) => {
    setState(newState);
    // Add logic to update map based on state
  };

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
                  <h1 className='text-5xl my-2 font-libra px-6'>Law Violation Tracker</h1>
                </div>

                <h1 className="text-3xl font-libra px-4 text-[#52524D]">
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

            <div className="relative border-2 border-black w-[90%] h-[74%] mx-auto mt-3 p-4 rounded-xl">
              <h1 className="text-2xl px-4 font-libra font-semibold text-[#766C40]">
                Enter place to view <a className="text-2xl font-libra text-[#65090A]">law violation data</a> near you:
              </h1>

              <div className='flex items-center'>
                <div className=''><Tracker_nav onCityChange={handleCityChange} onStateChange={handleStateChange} /></div>
                <div><h1 className='mx-2'>or</h1></div>
                <div className='bg-black text-white mx-4 px-4 py-1 font-libra rounded-2xl text-lg'>
                  <button className='flex items-center justify-between gap-4'>
                    <img src="location.svg" alt="" />
                    <h1>Choose your current location</h1>
                  </button>
                </div>
              </div>

              <div><Map_display /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
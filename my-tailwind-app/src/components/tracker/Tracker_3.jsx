import React from 'react'

import Nav from '../Knowledge/part_hub/Nav';
import LanguageDropdown from '../bot copy/Lang';
import Tracker3_card from "./Tracker3_card.jsx";


const Tracker_3 = () => {
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
            {/* <img className="px-4 w-[180px]" src="Part no.svg" alt="" /> */}
            <h1 className='text-5xl my-2 font-libra px-6'>Law Violation Tracker</h1>
          </div>

          <h1 className="text-3xl font-libra px-4 text-[#52524D] ">
          Stay updated on high-risk areas and legal breaches near you.
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
      <div className="relative border-2  border-black w-[90%] h-[74%] mx-auto mt-3 p-4 rounded-xl">
<div><h1 className="text-3xl my-3 px-4 font-libra font-semibold text-[#766C40] "><a className="text-3xl font-libra text-[#65090A]" >Law Violation </a> in Newtown: </h1></div>
<div className='max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent flex flex-col gap-2'> 
<Tracker3_card 
  title="Sample Title" 
  date="Feb 23, 2025" 
  content="This is a sample content." 
  onLearnMore={() => console.log("Learn More clicked")}
/>
<Tracker3_card 
  title="Sample Title" 
  date="Feb 23, 2025" 
  content="This is a sample content." 
  onLearnMore={() => console.log("Learn More clicked")}
/>
<Tracker3_card 
  title="Sample Title" 
  date="Feb 23, 2025" 
  content="This is a sample content." 
  onLearnMore={() => console.log("Learn More clicked")}
/>
</div>


        </div>
    </div>
  </div>
</div>
<div>


</div>

    </div>
  )
}

export default Tracker_3

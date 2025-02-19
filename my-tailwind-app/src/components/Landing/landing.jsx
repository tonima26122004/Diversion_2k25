import { useState } from 'react'
import Land_nav from './land_nav'
import Land_home from './Land_home'
import Landing_about from './Landing_about'



function Landing() {
  

  return (
    <>
    <div className="bg-[#E4E2D6] w-screen h-screen overflow-y-auto">
    <div className='w-[95%] mx-auto flex flex-col gap-7'>
      <Land_nav/>
      <Land_home/>
      <Landing_about/>
    </div>
      
      
    </div>
    </>
  )
}

export default Landing

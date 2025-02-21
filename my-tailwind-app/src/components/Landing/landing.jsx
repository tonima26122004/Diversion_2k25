import { useState } from 'react'
import Land_nav from './land_nav'
import Land_home from './Land_home'
import Landing_about from './Landing_about'
import Land_about_1 from './Land_about_1'
import Explore from './Explore'
import ExpandableCard from './ExpandableCard'



function Landing() {
  

  return (
    <>
    <div className="bg-[#E4E2D6] w-screen h-screen overflow-y-auto">
    <div className='w-[95%] mx-auto flex flex-col gap-7'>
      <Land_nav/>
      <Land_home/>

      <div className='flex items-center gap-5'>
        <Landing_about/>
        <Land_about_1/>
      </div>

      <Explore/>
      <ExpandableCard/>
      
    </div>
      
      
    </div>
    </>
  )
}

export default Landing

import React from 'react'

const  Discover = () => {
  return (
    <div>
      <div className='flex'>
        <div className='w-[50%] flex my-7 flex-col '> 
            <img className='w-8xl' src="discover.svg" alt="" />
            <div className=''> 
            <button className='flex bg-[#766C40] justify-between rounded-3xl gap-2 text-lg text-white my-3 items-center  px-4 py-1'>
                <span>view all</span>
                <span className=''><img className='' src="Arrow.svg" alt="" /></span>
            </button>
            </div>
            
        </div>
        <div className='w-[50%]'> </div>

      </div>
    </div>
  )
}

export default  Discover

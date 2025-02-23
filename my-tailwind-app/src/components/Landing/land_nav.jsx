import React from 'react';
import { useNavigate } from 'react-router-dom';

const Land_nav = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full bg-[#766C40] mx-auto rounded-full mt-4">
        <div className='ml-1'> 
          <img className='h-24' src="logo_1.svg" alt="" />
        </div>

        <div className='flex '>
          <ul className='flex gap-10 mr-10 text-white text-lg font-md font-libra'>
            <button id='Home'>Home</button>
            <button id='About'>About</button>
            <button id='Features'>Features</button>
            <button id='Testimonials'>Testimonials</button>
            <button id='FAQ'>FAQ</button>
            <button 
              className='bg-[#E4E2D6] rounded-full text-black px-4 p-1 font-semibold' 
              onClick={handleLoginClick}
            >
              Login/Register
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Land_nav;
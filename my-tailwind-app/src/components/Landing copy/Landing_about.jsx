import React from 'react';

const Landing_about = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 items-center mt-5  w-[45%]">
      {/* Left side - two smaller cards */}
      <div className="flex flex-col gap-6 w-[45%]">
        <div className="bg-[#766C40] p-5 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-white font-libra">Empowering Knowledge</h1>
            <img src="book.svg" alt="Icon" className="" />
          </div>
          <p className="text-white text-sm mt-2 font-libra">
            Simplified storytelling and real-world cases make constitutional learning accessible and insightful for everyone.
          </p>
        </div>

        <div className="bg-[#766C40] p-5 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-white font-libra">Constitutional Awareness</h1>
            <img src="cons.svg" alt="Icon" className="" />
          </div>
          <p className="text-white text-sm mt-2 font-libra">
            Foster a sense of civic responsibility by understanding the real importance and relevance of the Constitution.
          </p>
        </div>
      </div>

      {/* Right side - two larger cards */}
      <div className="flex flex-col gap-6 w-[45%]">
        <div className="bg-[#766C40] p-5 rounded-lg shadow-lg ">
          <div className="flex items-center gap-3">
            <div className='flex flex-col gap-2 mx-auto'>
              <div className='mx-auto'><h1 className='text-4xl font-libra text-white '>95%</h1></div>
              <div><h1 className="text-xl font-bold text-white font-libra"> Positive Feedback</h1></div>
            </div>
          </div>
          <p className="text-white mt-2 text-center font-libra">
            At Pocket Legal Aid, we empower individuals with accessible legal knowledge, ensuring simplified learning and engagement at every step.
          </p>
        </div>

        <div className="bg-[#766C40] p-5 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-white font-libra">Seamless Accessibility</h1>
            <img src="japan.svg" alt="Icon" className="" />
          </div>
          <p className="text-white mt-2 font-libra ">
            High language compatibility and intuitive design ensure learning without barriers for all users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing_about;

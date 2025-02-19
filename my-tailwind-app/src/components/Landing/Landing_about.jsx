import React from 'react';

const Landing_about = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8 bg-gray-100 w-[35%]">
      {/* Left side - two smaller cards */}
      <div className="flex flex-col gap-6 w-[40%]">
        <div className="bg-slate-500 p-5 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-white">Empowering Knowledge</h1>
            <img src="/mnt/data/image.png" alt="Icon" className="w-6 h-6" />
          </div>
          <p className="text-white mt-2">
            Simplified storytelling and real-world cases make constitutional learning accessible and insightful for everyone.
          </p>
        </div>

        <div className="bg-slate-500 p-5 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-white">Constitutional Awareness</h1>
            <img src="/mnt/data/image.png" alt="Icon" className="w-6 h-6" />
          </div>
          <p className="text-white mt-2">
            Foster a sense of civic responsibility by understanding the real importance and relevance of the Constitution.
          </p>
        </div>
      </div>

      {/* Right side - two larger cards */}
      <div className="flex flex-col gap-6 w-[50%]">
        <div className="bg-slate-600 p-5 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-white">95% Positive Feedback</h1>
            <img src="/mnt/data/image.png" alt="Icon" className="w-6 h-6" />
          </div>
          <p className="text-white mt-2">
            At Pocket Legal Aid, we empower individuals with accessible legal knowledge, ensuring simplified learning and engagement at every step.
          </p>
        </div>

        <div className="bg-slate-600 p-5 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-white">Seamless Accessibility</h1>
            <img src="/mnt/data/image.png" alt="Icon" className="w-6 h-6" />
          </div>
          <p className="text-white mt-2">
            High language compatibility and intuitive design ensure learning without barriers for all users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing_about;

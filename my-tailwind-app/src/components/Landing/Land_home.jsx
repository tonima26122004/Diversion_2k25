import React from "react";

const Land_home = () => {
  return (
    <><div>
      <div className="flex items-center mx-4 relative">
        <div className="w-[50%] flex flex-col gap-5 relative">
          <div className="relative">
            <img
              className="absolute right-0 bottom-0 z-0"
              src="hero_head.svg"
              alt="" />
            <h1 className="text-8xl font-libra font-md relative z-10">
              Learn Smarter,
              <br /> Know Your Rights.
            </h1>
          </div>

          <p className="text-xl font-libra">
            Revolutionize the way you learn the Indian Constitution with our
            interactive web app. Say goodbye to the boredom of traditional study
            methods and immerse yourself in a world of storytelling, quizzes,
            and real-life case explorations. Gain clarity on your rights,
            responsibilities, and constitutional amendments in a fun, dynamic,
            and insightful way.
          </p>

          <div>
            <button className="flex gap-3 bg-[#766C40] px-5 font-libra py-2 rounded-full">
              <span className="text-white">Explore Law</span>
              <img src="Arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="w-[50%] flex justify-end">
          <img src="hero.svg" alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Land_home;

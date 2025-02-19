import React, { useState } from "react";
import Nav from "../../main copy/Nav";
import LanguageDropdown from "../../bot copy/Lang";
import Game_nav from "./Game_nav";
import Numpad from "./numpad";
import InputBox from "./stage";

const Game = () => {
  const [answers, setAnswers] = useState({});

  const questionText = `Alex: But sir, only this region was empty!!
Police: Whatever it might be you are not allowed to park it here!!
Alex: But ....... sir ...... what shall I do now?`;

  const handleAnswerSubmit = (stage, value) => {
    setAnswers((prev) => ({ ...prev, [stage]: value }));
  };

  return (
    <div className="relative">
      <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
        <Nav />

        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-hidden">
          {/* Heading */}
          <div className="flex">
            <div className="flex flex-col w-full gap-2 py-2">
              <div>
                <img className="px-4 w-[180px]" src="Part no.svg" alt="" />
              </div>

              <h1 className="text-3xl font-libra px-4 text-[#52524D] ">
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

          {/* Nav */}
          <Game_nav />

          {/* Display box */}
          <div className="relative border-2 border-black w-[90%] h-[74%] mx-auto p-4 rounded-xl">
            <div className="ml-4">
              <div className="font-libra text-3xl">
                Guess the <span className="text-red-900">Answers.</span>
              </div>
              <div className="flex gap-10">
                <img
                  className="w-[300px]"
                  src="playtofind.svg"
                  alt="displaybox"
                />
                <div className="font-libra text-3xl mt-12 w-full">
                  {questionText.split("\n").map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                   <div className="mt-6 text-2xl font-semibold text-gray-700 flex gap-8">
                {Object.entries(answers).map(([stage, value], index) => (
                  <div key={index} className="flex items-center font-libra">
                    <span className="text-[#4B0F0F]">{stage}:</span>
                    <span className="ml-2 text-[#766C40];
]">{value}</span>
                  </div>
                ))}
              </div>
                </div>
              </div>

              {/* Display answered questions side by side */}
             
            </div>

            {/* Input Box (connected to numpad) */}
            <InputBox onAnswerSubmit={handleAnswerSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;

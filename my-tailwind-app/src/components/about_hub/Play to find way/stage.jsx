import React, { useState } from "react";
import Numpad from "./numpad";

const stages = ["Article Number", "Section Number", "1st Fine", "2nd Fine"];
const correctAnswers = ["10", "5", "500", "1000"]; // Dummy correct answers

const InputBox = ({ onAnswerSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [stageIndex, setStageIndex] = useState(0);
  const [answeredStages, setAnsweredStages] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleButtonClick = (num) => {
    setInputValue((prev) => (prev.length < 5 ? prev + num : prev));
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleBackspace = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const handleNextStage = () => {
    if (inputValue === correctAnswers[stageIndex]) {
      setAnsweredStages((prev) => ({ ...prev, [stages[stageIndex]]: inputValue }));
      onAnswerSubmit(stages[stageIndex], inputValue); // Send to Game.js
      if (stageIndex < stages.length - 1) {
        setStageIndex(stageIndex + 1);
        setInputValue("");
      }
    }
  };

  const handlePreviousStage = () => {
    if (stageIndex > 0) {
      setStageIndex(stageIndex - 1);
      setInputValue("");
    }
  };

  const handleSubmit = () => {
    if (inputValue === correctAnswers[stageIndex]) {
      setAnsweredStages((prev) => ({ ...prev, [stages[stageIndex]]: inputValue }));
      onAnswerSubmit(stages[stageIndex], inputValue);
      setIsCompleted(true);
    }
  };

  return (
    <div className="flex flex-col font-libra items-center bg-[#E4E2D6] rounded-lg">
      {!isCompleted ? (
        <>
          {/* Input Box */}
          <div className="flex items-center mb-4">
            <span className="text-2xl font-semibold text-[#6f1818] mr-2">
              {stages[stageIndex]}:
            </span>
            <div className="border-2 border-[#4B0F0F] rounded-md text-2xl font-semibold w-32 h-10 flex items-center justify-center bg-transparent">
              {inputValue || "_"}
            </div>
          </div>

          {/* Numpad */}
          <Numpad onNumberClick={handleButtonClick} />

          {/* Control Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handlePreviousStage}
              className={`px-4 py-1 bg-transparent border-2 border-black text-black font-semibold rounded-md shadow-md ${
                stageIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-white"
              }`}
              disabled={stageIndex === 0}
            >
              Previous Stage
            </button>

            <button
              onClick={handleClear}
              className="px-4 py-1 bg-transparent border-2 border-black text-black font-semibold rounded-md shadow-md hover:bg-black hover:text-white"
            >
              Clear
            </button>

            {/* Conditional Rendering: Next Stage or Submit Button */}
            {stageIndex < stages.length - 1 ? (
              <button
                onClick={handleNextStage}
                className={`px-4 py-1 bg-transparent border-2 border-black text-black font-semibold rounded-md shadow-md ${
                  inputValue === correctAnswers[stageIndex] ? "hover:bg-black hover:text-white" : "opacity-50 cursor-not-allowed"
                }`}
                disabled={inputValue !== correctAnswers[stageIndex]}
              >
                Next Stage
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className={`px-4 py-1 bg-transparent border-2 border-black text-black font-semibold rounded-md shadow-md ${
                  inputValue === correctAnswers[stageIndex] ? "hover:bg-black hover:text-white" : "opacity-50 cursor-not-allowed"
                }`}
                disabled={inputValue !== correctAnswers[stageIndex]}
              >
                Submit
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="text-3xl font-bold text-red-900 mt-6"> Good Job! 🎉</div>
      )}
    </div>
  );
};

export default InputBox;

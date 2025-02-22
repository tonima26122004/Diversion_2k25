import React from "react";
import Nav from "../Knowledge/part_hub/Nav";
import Carousel from "./carousel";
import LanguageDropdown from "../bot copy/Lang";
import ExamCard from './ExamCard'; // Importing the card component

const exams = [
  {
    category: "Law Practice",
    title: "All India Bar Examination (AIBE)",
    description: "Certification exam for law graduates, testing constitutional and legal knowledge.",
  },
  {
    category: "Government Administration",
    title: "Civil Services Examination (CSE)",
    description: "Tests constitutional knowledge for IAS, IPS, and other civil service roles.",
  },
  {
    category: "Judicial",
    title: "Judicial Services Examinations",
    description: "Exams for judicial positions requiring thorough constitutional knowledge.",
  },
  {
    category: "State Governance",
    title: "State Public Service Commission Exams",
    description: "State-level exams assessing candidates’ understanding of the Constitution.",
  },
];

const Quiz = () => {
  return (
    <div className="bg-[#766C40] h-screen w-screen flex items-center relative overflow-y-scroll">
      <Nav />
      <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative p-6 overflow-y-scroll">
        
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-full gap-2">
            <h1 className="text-5xl font-libra px-4 text-black">Test your knowledge</h1>
            <h1 className="text-3xl font-libra px-4 text-[#52524D]">
              Ready to begin? Start the quiz now!
            </h1>
            <div className="border-[#766C40] border-2 w-4/6"></div>
          </div>
          <div className="flex items-center gap-4 px-3">
            <LanguageDropdown />
            <button>
              <img className="w-32" src="User.svg" alt="User Profile" />
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-6">
          <Carousel />
        </div>

        {/* Exam Cards Section */}
        <h2 className="text-3xl font-libra px-4 text-[#5A2D0C] mt-8 ml-2">
          Some <span className="text-red-800 font-bold">top examinations</span> of INDIA:
        </h2>
        <div className="flex overflow-x-auto gap-4 mt-4 ml-5 scrollbar-thin scrollbar-thumb-[#766C40] scrollbar-track-[#E4E2D6]">
          {exams.map((exam, index) => (
            <ExamCard key={index} category={exam.category} title={exam.title} description={exam.description} />
          ))}
        </div>
        
        <h2 className="text-3xl font-libra px-4 text-black mt-8 ml-2">
          Design Your <span className="text-red-800 font-bold">Ultimate Quiz with AI Suggestions</span> 
        </h2>
        <div className="w-[170px] h-[150px] flex flex-col justify-center items-center bg-[#766C40] rounded-xl ml-6 mt-4">
          <img src="plus.svg" alt="Preamble" className="w-12 border-4 border-white h-auto rounded-xl p-2"/>
          <div className="text-white text-lg font-libra mt-4">Create Quiz</div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

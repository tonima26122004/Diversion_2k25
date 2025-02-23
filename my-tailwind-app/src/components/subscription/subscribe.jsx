import React from "react";

import { ChevronLeft } from "lucide-react";
import LanguageDropdown from "../bot copy/Lang";

const PrimeSubscription = () => {
  return (
    <div className="min-h-screen font-libra bg-white flex flex-col items-center py-6 px-4">
      <div className="flex items-center w-full">
      <button className="flex gap-2 text-black border border-black px-4 py-2 rounded-full hover:bg-gray-200 ">
        <ChevronLeft size={20} />
        Back
      </button>
      <div className="flex gap-4  w-full justify-end items-s">
      
        <LanguageDropdown />
        <img src="User.svg" alt="user" className="w-12" />
        </div>
        </div>
      {/* Main Content */}
      <div className="bg-[#F5F1E6]  border-black border-2 rounded-lg p-6 mt-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-black mb-4">
          What do you get with Prime?
        </h2>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#766C40] lg:grid-cols-4 gap-4 p-4 rounded-lg">
          {/* Feature 1 */}
          <div className="bg-[#766C40] text-white p-4 rounded-lg flex gap-2">
            <div className="w-2 h-68 bg-white"></div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center text-red-900">
                <img src="diamond2.svg" alt="Bot" className="w-6 h-6 mr-2" />
                Legal Aid Bot – Unlimited Chats
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Get unlimited access to our AI-powered legal aid bot for instant legal insights.</li>
                <li>Ask questions, get advice, and learn about your rights anytime!</li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#766C40] text-white p-4 rounded-lg flex gap-2">
            <div className="w-2  h-68 bg-white"></div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center text-red-900">
                <img src="diamond2.svg" alt="Hub" className="w-6 h-6 mr-2" />
                Knowledge Hub – Visualize Your Laws
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Experience interactive legal visualizations to understand complex laws effortlessly.</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#766C40] text-white p-4 rounded-lg flex gap-2">
            <div className="w-2 h-68 bg-white"></div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center text-red-900">
                <img src="diamond2.svg" alt="Quiz" className="w-6 h-6 mr-2" />
                Create & Participate in Quizzes
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Build your own quizzes to test and challenge your friends.</li>
                <li>Join interactive quizzes and compete with peers to sharpen your legal knowledge!</li>
              </ul>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#766C40] text-white p-4 rounded-lg flex gap-2">
            <div className="w-2 h-68 bg-white"></div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center text-red-900">
                <img src="diamond2.svg" alt="Updates" className="w-6 h-6 mr-2" />
                Exclusive Updates & Features
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Be the first to access new updates, case studies, and legal resources.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plans Section */}
        <div className="flex flex-row justify-center items-center gap-8 w-full mt-6">
          <div className="bg-[#766C40] text-white px-6 py-4 w-1/3 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-red-900">Student Premium</h3>
            <p className="text-sm mt-1">Free Upgrade to Premium</p>
          </div>

          <div className="bg-[#766C40] text-white px-6 py-4 w-1/3 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-red-900">Monthly Plan</h3>
            <p className="text-sm mt-1">₹199/month</p>
          </div>

          <div className="bg-[#766C40] text-white px-6 py-4 w-1/3 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-red-900">Yearly Plan</h3>
            <p className="text-sm mt-1">₹1,999/year (Save 15%)</p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default PrimeSubscription;
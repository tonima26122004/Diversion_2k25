import React from "react";
import { ChevronLeft } from "lucide-react";

const PrimeSubscription = () => {
  return (
    <div className="min-h-screen font-libra bg-[#766C40] flex flex-col items-center py-6 px-4">
      {/* Main Content */}
      <div className="bg-[#F5F1E6] border-2 border-[#766C40] rounded-lg p-6 mt-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-black mb-4">
          What do you get with Prime?
        </h2>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#766C40] lg:grid-cols-4 gap-4 p-4 rounded-lg">
          <div className="bg-[#766C40] text-white p-4 rounded-lg">
            <div className="flex flex-row items-center gap-2">
            <div className="w-1 h-40 border-2 border-white"></div>
            <div>
            <h3 className="font-semibold text-lg mb-2 text-red-900">
              Legal Aid Bot – Unlimited Chats
            </h3>
            
            <ul className="list-disc list-inside text-sm">
              <li>
                Get unlimited access to our AI-powered legal aid bot for instant
                legal insights.
              </li>
              <li>Ask questions, get advice, and learn about your rights anytime!</li>
            </ul>
            </div>
          </div>
          </div>

          <div className="bg-[#766C40] text-white p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-red-900">
              Knowledge Hub – Visualize Your Laws
            </h3>
            <ul className="list-disc list-inside text-sm">
              <li>
                Experience interactive legal visualizations to understand
                complex laws effortlessly.
              </li>
            </ul>
          </div>

          <div className="bg-[#766C40] text-white p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-red-900">
              Create & Participate in Quizzes
            </h3>
            <ul className="list-disc list-inside text-sm">
              <li>Build your own quizzes to test and challenge your friends.</li>
              <li>
                Join interactive quizzes and compete with peers to sharpen your
                legal knowledge!
              </li>
            </ul>
          </div>

          <div className="bg-[#766C40] text-white p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-red-900">
              Exclusive Updates & Feature
            </h3>
            <ul className="list-disc list-inside text-sm">
              <li>
                Be the first to access new updates, case studies, and legal
                resources.
              </li>
            </ul>
          </div>
        </div>

        {/* Plans Section */}
        <div className="flex flex-row justify-center items-center gap-36 w-full mt-6">
          <div className="bg-[#766C40] text-white px-6 py-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-red-900">Student Premium</h3>
            <p className="text-sm mt-1">Free Upgrade to Premium</p>
          </div>

          <div className="bg-[#766C40] text-white px-6 py-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-red-900">Monthly Plan</h3>
            <p className="text-sm mt-1">₹199/month</p>
          </div>

          <div className="bg-[#766C40] text-white px-6 py-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-red-900">Yearly Plan</h3>
            <p className="text-sm mt-1">₹1,999/year (Save 15%)</p>
          </div>
        </div>
      </div>

      <button className="flex gap-2 text-black border border-black px-4 py-2 rounded-full hover:bg-gray-200 mt-6">
        <ChevronLeft size={20} />
        Back
      </button>
    </div>
  );
};

export default PrimeSubscription;

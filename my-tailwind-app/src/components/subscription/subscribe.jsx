import React from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft } from "lucide-react";

const PrimeSubscription = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-[#F5F1E6] border-2 border-[#766C40] rounded-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-black mb-4">
            What do you get with Prime?
          </DialogTitle>
        </DialogHeader>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-lg bg-[#766C40]">
          {/* Feature 1 */}
          <div className="bg-[#766C40] text-white p-4 rounded-lg flex gap-2">
            <div className="w-2 h-40 bg-white"></div>
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
            <div className="w-2 h-36 bg-white"></div>
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
            <div className="w-2 h-40 bg-white"></div>
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
            <div className="w-2 h-36 bg-white"></div>
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

        <button
          onClick={onClose}
          className="flex gap-2 text-black border border-black px-4 py-2 rounded-full hover:bg-gray-200 mt-6"
        >
          <ChevronLeft size={20} />
          Back
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default PrimeSubscription;

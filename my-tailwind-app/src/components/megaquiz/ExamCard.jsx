import React from 'react';

const ExamCard = ({ category, title, description }) => {
    return (
        <div className="w-[250px] md:w-[300px] bg-gradient-to-b from-[#8b7331] to-[#A89B78] text-black p-4 rounded-xl shadow-md font-libra flex flex-col">
            <h4 className="text-sm font-semibold text-black mb-1">{category}</h4>
            <div className='border-t-2 border-red-950 rounded-e-lg w-40'></div>
            <h3 className="text-xl font-libra text-white font-bold mb-2">{title}</h3>
            <p className="text-md text-red-900 mb-4">{description}</p>

            {/* Constant Buttons and Text */}
            <button className="bg-black text-white w-36 px-4 py-2 rounded-3xl text-sm flex items-center gap-2 hover:bg-gray-800 transition">
                Start Solving &gt;&gt;
            </button>
            <p className="text-md mt-2 text-white">Previous year Question-papers with solutions</p>
            <button className="bg-black text-white px-4 py-2 w-36 rounded-3xl text-sm flex items-center gap-2 mt-2 hover:bg-gray-800 transition">
                View Papers &gt;&gt;
            </button>
        </div>
    );
};

export default ExamCard;

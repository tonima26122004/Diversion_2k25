import React from 'react';

const Card = ({ number, title, onExplore }) => {
  return (
    <div className="flex flex-col ml-8">
      {/* Diamond Image with Number */}
      <div
        className="w-96 h-40 bg-center bg-contain bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/diamond.svg')" }}
      >
        <span className="text-2xl font-libra font-bold text-red-950 flex items-center pb-3">{number}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 font-libra flex justify-center w-96">{`“${title}”`}</h3>

      {/* Line Decoration */}
      <div>
        <img src="line.svg" alt="Preamble" className="w-[390px] mt-4" />
      </div>

      {/* Explore Button */}
      <button
        onClick={onExplore} // The onClick prop is passed here
        className="px-4 py-2 border w-32 flex ml-32 font-libra justify-center bg-black rounded-full text-white hover:bg-gray-800 transition"
      >
        Explore &gt;&gt;
      </button>
    </div>
  );
};

export default Card;

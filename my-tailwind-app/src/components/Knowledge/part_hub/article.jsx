import React from 'react';

const ArticleCard = ({ articleNumber, articleName, readUrl}) => {
  return (
    <div className="relative flex flex-col items-center font-libra p-6 rounded-lg max-w-xs mx-auto">
      
      {/* Top Design */}
      <img src="top.svg" alt="Top Decorative Design" className="w-full" />

      {/* Article Title */}
      <h2 className="text-xl font-semibold text-red-800">
        Article <div className="text-black"><center>{articleNumber}</center></div>
      </h2>
      <img src="lineart.svg" alt="Line Separator" className="w-1/2" />
      
      {/* Article Name in Quotes */}
      <h3 className="text-lg font-medium text-gray-800 text-center">
        “{articleName}”
      </h3>

      {/* Buttons */}
      <div className="flex flex-col space-y-2 w-full items-center">
        <a href={"/Read the article"} className="bg-black text-white text-md font-medium py-1 px-2 rounded-full text-center transition-all duration-300 hover:bg-gray-800 inline-block">
          Read the article and more
        </a>
       
      </div>

      {/* Bottom Design */}
      <img src="bottom.svg" alt="Bottom Decorative Design" className="w-full mt-2" />
      
    </div>
  );
};

export default ArticleCard;

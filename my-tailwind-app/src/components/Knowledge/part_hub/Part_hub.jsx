import React from "react";
import Nav from "./Nav";
import ArticleCard from "./article";
import LanguageDropdown from "../../bot copy/Lang";
const partnumber = ["1"]
const Part_hub = ({ partnumber}) => {
  return (
    <div className="">
      <div className="bg-[#766C40] h-screen w-screen overflow-y-scroll flex items-center justify-between relative">
        <Nav />

        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative  flex flex-col items-start overflow-y-auto">
          {/* Heading */}
          <div className="flex w-full">
            <div className="flex flex-col w-full gap-2 py-2">
              <div className="border-2 border-black ml-4 rounded-full w-32 p-2">
              <div className="flex items-center justify-center gap-4 font-libra text-3xl p-1 border-2 border-black rounded-full w-28 text-red-950">
                Part:1
              </div>
              </div>
              <h1 className="text-3xl font-libra px-4 text-black">
                “Name and territory of the Union”
              </h1>
              <div className="border-[#766C40] border-2 felx justify-start w-[45%]"></div>
            </div>

            <div className="flex items-center gap-4 px-3">
              <LanguageDropdown />
              <button>
                <img className="w-32" src="User.svg" alt="User Profile" />
              </button>
            </div>
          </div>

          {/* Scrollable Article Cards */}
          <div className="mt-4 space-y-4 ml-12">
            <div className="flex space-x-36">
              <ArticleCard
                articleNumber={1}
                articleName="Name and territory of the Union"
                readUrl="/Read the article"
                
              />
              <ArticleCard
                articleNumber={1}
                articleName="Name and territory of the Union"
                readUrl="/read-article"
               
              />
              <ArticleCard
                articleNumber={1}
                articleName="Name and territory of the Union"
                readUrl="/read-article"
                
              />
            </div>
            </div>
            <div className="mt-4 space-y-4 ml-12">
            <div className="flex space-x-36">
              <ArticleCard
                articleNumber={1}
                articleName="Name and territory of the Union"
                readUrl="/read-article"
                
              />
               
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part_hub;

import React from "react";
import Nav from "./Nav";
import ArticleCard from "./article";

const Part_hub = () => {
  return (
    <div className="">
      <div className="bg-[#766C40] h-screen w-screen overflow-y-scroll flex items-center justify-between relative">
        <Nav />

        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative p-6 flex flex-col items-start overflow-y-auto">

          {/* Heading */}
          <div className="flex w-full">
            <div className="flex flex-col w-full gap-2 py-2">
              <div>
                <img className="px-4 w-[180px]" src="Part no.svg" alt="Part Number" />
              </div>

              <h1 className="text-3xl font-libra px-4 text-[#52524D]">
                “Name and territory of the Union”
              </h1>
              <div className="border-[#766C40] border-2 w-[25%]"></div>
            </div>

            <div className="flex items-center gap-4 px-3">
              <button>
                <img className="w-32" src="User.svg" alt="User Profile" />
              </button>
            </div>
          </div>

          {/* Scrollable Article Cards */}
          <div className="mt-4  space-y-4 overflow-y-auto  ml-12">
            <div className="flex space-x-36">
              <ArticleCard
                articleNumber={1}
                articleName="Name and territory of the Union"
                readUrl="/Read the article"
                visualizeUrl="/visualize"
                playUrl="/play"
                casesUrl="/cases"
              />
              <ArticleCard
                articleNumber={1}
                articleName="Name and territory of the Union"
                readUrl="/read-article"
                visualizeUrl="/visualize"
                playUrl="/play"
                casesUrl="/cases"
              />
              <ArticleCard
                articleNumber={1}
                articleName="Name and territory of the Union"
                readUrl="/read-article"
                visualizeUrl="/visualize"
                playUrl="/play"
                casesUrl="/cases"
              />
            </div>
            <div className="flex justify-start space-x-36">
              <ArticleCard
                articleNumber={1}
                articleName="Name and territory of the Union"
                readUrl="/read-article"
                visualizeUrl="/visualize"
                playUrl="/play"
                casesUrl="/cases"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Part_hub;

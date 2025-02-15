import React, { useEffect, useState } from "react";
import Nav from "../main copy/Nav";
import LanguageDropdown from "../bot copy/Lang";
import HotCard from "./Hot_card.jsx";
import HotNav from "./Hot_nav.jsx";

const Hot = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      
        const res = await fetch(
          "https://newsapi.org/v2/everything?q=political&from=2025-2-14&sortBy=publishedAt&apiKey=52c8562a09804547856d91128eee3af1"
        );
        const data = await res.json();
        setNews(data.articles); 
  
      
    };

    fetchNews();
  }, []);



  return (
    <div className="relative">
      <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
        <Nav />

        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative flex flex-col">
          {/* Sticky Top Section */}
          <div className="sticky top-0 z-10 bg-[#E4E2D6]">
            {/* Heading */}
            <div className="flex justify-between items-center py-2 px-4">
              <div className="flex flex-col w-full gap-2">
                <h1 className="text-5xl font-libra text-[#000000]">
                  Latest News Updates
                </h1>
                <h1 className="text-xl font-libra text-[#52524D]">
                  Stay Informed on the Latest Headlines
                </h1>
                <div className="border-[#766C40] border-2 w-[45%]"></div>
              </div>
              <div className="flex items-center gap-4">
                <LanguageDropdown />
                <button>
                  <img className="w-32" src="User.svg" alt="User Profile" />
                </button>
              </div>
            </div>

            {/* Sticky HotNav */}
            <HotNav />
          </div>

          {/* Scrollable Content */}
          <div className=" flex-1 px-4 py-4 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent">
            <div className="flex flex-col gap-4 items-center w-full">
              {/* Cards */}
              <div className="flex flex-col gap-4 items-center w-full">
              {news.length > 0 ? (
                  news.map((article, index) => (
                    <HotCard
                      key={index}
                      title={article.title}
                      date={new Date(article.publishedAt).toLocaleDateString()}
                      content={article.content || "No description available."}
                      onLearnMore={() => window.open(article.url, "_blank")}
                    />
                  ))
                ) : (
                  <p className="text-lg text-gray-700">Loading news...</p>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;
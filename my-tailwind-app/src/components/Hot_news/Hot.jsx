import React, { useEffect, useState } from "react";
import Nav from "../main copy/Nav";
import LanguageDropdown from "../bot copy/Lang";
import HotCard from "./Hot_card.jsx";

const Hot = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          "https://newsapi.org/v2/everything?q=political&from=2025-2-14&sortBy=publishedAt&apiKey=52c8562a09804547856d91128eee3af1"
        );
        const data = await res.json();
        setNews(data.articles); 
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="relative">
      <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
        <Nav />

        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-hidden main">
          {/* Heading */}
          <div className="flex">
            <div className="flex flex-col w-full gap-2 py-2">
              <div>
                <img className="px-4 w-[180px]" src="Part no.svg" alt="" />
              </div>
              <h1 className="text-3xl font-libra px-4 text-[#52524D] ">
                “Name and territory of the Union”
              </h1>
              <div className="border-[#766C40] border-2 w-[25%]"></div>
            </div>
            <div className="flex items-center gap-4 px-3">
              <LanguageDropdown />
              <button>
                <img className="w-32" src="User.svg" alt="User Profile" />
              </button>
            </div>
          </div>

          {/* News Content */}
          <div className="flex justify-center w-full mt-4">
            <div className="flex flex-col gap-4 items-center w-full">
              <div className="flex flex-col gap-4 items-center w-[95%]">
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

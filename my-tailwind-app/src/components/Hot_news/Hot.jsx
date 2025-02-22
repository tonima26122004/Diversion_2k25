import React, { useEffect, useState } from "react";
import Nav from "../Knowledge/part_hub/Nav.jsx";
import LanguageDropdown from "../bot copy/Lang";
import HotCard from "./Hot_card.jsx";
import { ChevronDown } from "lucide-react";

const Hot = () => {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("About Constitution");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError("");

      console.log(`Fetching news for: ${selectedCategory}`);

      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${selectedCategory}&from=2025-2-22&sortBy=publishedAt&apiKey=52c8562a09804547856d91128eee3af1`
      );
      
      if (!res.ok) {
        throw new Error(`API Error: ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      console.log("API Response:", data);

      if (data.articles) {
        setNews(data.articles);
      } else {
        throw new Error("No articles found!");
      }
    } catch (err) {
      console.error("Failed to fetch news:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [selectedCategory]); // ✅ Re-fetches when category changes

  return (
    <div className="relative">
      <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
        <Nav />
        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative flex flex-col">
          {/* Sticky Top Section */}
          <div className="sticky top-0 z-10 bg-[#E4E2D6]">
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

            {/* Search Bar */}
            <div className="w-[25%] pl-6">
              <div className="mb-2">
                <span className="text-xl font-libra text-black">
                  Search <span className="text-red-900">News</span> by{" "}
                  <span className="text-red-900">Category</span>
                </span>
              </div>

              <div className="flex items-center justify-between border border-black rounded-full p-1 pl-2">
                <div className="flex items-center gap-2 ml-4">
                  <label className="text-black">Category:</label>
                  <div className="relative">
                    <select
                      className="bg-[#E4E2D6] border-gray-300 rounded py-1 ml-2 text-gray-500 pr-6 appearance-none outline-none"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="About Constitution">About Constitution</option>
                      <option value="Traffic">Traffic</option>
                      <option value="Crime">Crime</option>
                      <option value="Education">Education</option>
                      <option value="Technology">Technology</option>
                      <option value="Health & Safety">Health & Safety</option>
                      <option value="Economy">Economy</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 bg-[#E4E2D6] w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                {/* Search Button */}
                <button
                  className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800"
                  onClick={fetchNews}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 px-4 py-4 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent">
            <div className="flex flex-col gap-4 items-center w-full">
              {/* Error Message */}
              {error && <p className="text-lg text-red-600">{error}</p>}

              {/* Loading Skeleton */}
              {loading ? (
                <div className="flex flex-col gap-4 w-full">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="w-full p-4 bg-gray-300 animate-pulse rounded-md">
                      <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-4 items-center w-full">
                  {news.length > 0 ? (
                    news.map((article, index) => (
                      <HotCard
                        key={index}
                        title={article.title}
                        date={new Date(article.publishedAt).toLocaleDateString()}
                        content={article.description || "No description available."}
                        onLearnMore={() => window.open(article.url, "_blank")}
                      />
                    ))
                  ) : (
                    <p className="text-lg text-gray-700">No news found.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;

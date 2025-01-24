import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const About_nav = () => {
  const navigate = useNavigate(); // To manually navigate to different routes
  const [activeLink, setActiveLink] = useState("Read the article");

  // Function to handle navigation and set active link
  const handleNavigation = (linkName, path) => {
    setActiveLink(linkName);
    navigate(path); // Navigate to the respective route
  };

  return (
    <div>
      <div className="mt-6">
        <ul className="font-libra flex gap-14 justify-center text-xl">
          <li>
            <button
              onClick={() => handleNavigation("Read the article", "/Read the article")}
              className={`relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#65090A] after:transition-all after:duration-400 hover:after:w-full ${
                activeLink === "Read the article" ? "after:w-full text-black opacity-100" : "opacity-50"
              } transition-opacity duration-300`}
            >
              Read the article
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("Visualize your lesson", "/Visualize your lesson")}
              className={`relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#65090A] after:transition-all after:duration-400 hover:after:w-full ${
                activeLink === "Visualize your lesson" ? "after:w-full text-black opacity-100" : "opacity-50"
              } transition-opacity duration-300`}
            >
              Visualize your lesson
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("Play to find way", "/Play to find way")}
              className={`relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#65090A] after:transition-all after:duration-400 hover:after:w-full ${
                activeLink === "Play to find way" ? "after:w-full text-black opacity-100" : "opacity-50"
              } transition-opacity duration-300`}
            >
              Play to find way
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("Related cases", "/Related cases")}
              className={`relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#65090A] after:transition-all after:duration-400 hover:after:w-full ${
                activeLink === "Related cases" ? "after:w-full text-black opacity-100" : "opacity-50"
              } transition-opacity duration-300`}
            >
              Related cases
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About_nav;

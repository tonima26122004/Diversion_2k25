import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Cases_nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const pathToLinkMap = {
      "/Read the article": "Read the article",
      "/Visualize your lesson": "Visualize your lesson",
      "/Play to find way": "Play to find way",
      "/Related cases": "Related cases",
    };
    const active = pathToLinkMap[location.pathname] || "Related cases";
    setActiveLink(active);
  }, [location.pathname]);

  const handleNavigation = (linkName, path) => {
    setActiveLink(linkName);
    navigate(path);
  };

  return (
    <ul className="font-libra flex gap-14 justify-center text-xl mt-2">
      {["Read the article", "Visualize your lesson", "Play to find way", "Related cases"].map((name) => (
        <li key={name}>
          <button
            onClick={() => handleNavigation(name, `/${name}`)}
            className={`relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#65090A] hover:after:w-full ${
              activeLink === name ? "after:w-full text-black opacity-100" : "opacity-50"
            }`}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Cases_nav;

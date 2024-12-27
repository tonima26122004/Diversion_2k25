import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  const navItems = [
    { src: "logo.svg", alt: "Logo", route: "/" },
    { src: "hub.svg", alt: "Hub", route: "/hub" },
    { src: "bot.svg", alt: "Bot", route: "/Chat" },
    { src: "quiz.svg", alt: "Quiz", route: "/quiz" },
    { src: "hot news.svg", alt: "Hot News", route: "/news" },
  ];

  return (
    <div className="w-[11%] h-[95%] flex flex-col items-center gap-10">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`w-32 h-32 flex justify-center items-center rounded-xl transition-all duration-300 ${
            activeButton === index ? 'bg-[#E4E2D6A3] p-2' : 'hover:bg-[#E4E2D6A3] hover:p-2'
          }`}
          onClick={() => {
            setActiveButton(index);
            navigate(item.route);
          }}
        >
          <img className="w-28" src={item.src} alt={item.alt} />
        </button>
      ))}
    </div>
  );
};

export default Nav;


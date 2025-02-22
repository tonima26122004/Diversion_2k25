import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState(
    parseInt(localStorage.getItem('activeButton'), 10) || 0
  );

  const handleButtonClick = (index, route) => {
    setActiveButton(index);
    localStorage.setItem('activeButton', index);
    navigate(route);
  };

  useEffect(() => {
    const storedIndex = parseInt(localStorage.getItem('activeButton'), 10);
    if (!isNaN(storedIndex)) {
      setActiveButton(storedIndex);
    }
  }, []);

  return (
    <div className="w-[11%] h-full flex flex-col items-center gap-6 relative">
      {/* Focus box without animation */}
      <div
        className="absolute w-32 h-32 rounded-xl bg-[#E4E2D6A3]"
        style={{
          transform: `translateY(${activeButton * 10}rem)`,
        }}
      ></div>

      {/* Navigation Buttons */}
      {[
        { src: "logo_1.svg", label: "Home", route: "/" },
        { src: "hub.svg", label: "Knowledge Hub", route: "/Hub" },
        { src: "bot.svg", label: "Legal Aid Bot", route: "/Chat" },
        { src: "Mega_quiz.svg", label: "Mega Quiz", route: "/quiz" },
        { src: "Hot_news.svg", label: "Hot News", route: "/news" }
      ].map((item, index) => (
        <button
          key={index}
          className={`relative z-10 w-28 h-28 flex flex-col justify-center items-center rounded-xl ${
            activeButton === index ? 'bg-[#E4E2D6A3]' : ''
          }`}
          onClick={() => handleButtonClick(index, item.route)}
        >
          <img className="w-20" src={item.src} alt={item.label} />
          <h1 className={activeButton === index ? 'text-black' : 'text-white'}>
            {item.label}
          </h1>
        </button>
      ))}
    </div>
  );
};

export default Nav;

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
    <div className="w-[15%] h-full flex flex-col items-center  gap-6 relative">
      {/* Focus box without animation */}
      <div
        className="absolute w-full h-32 rounded-xl"
        style={{
          transform: `translateY(${activeButton * 10}rem)`,
        }}
      ></div>

      {/* Navigation Buttons */}
      {[
        { src: "logo_1.svg", route: "/" , imgSize: "w-32"},
        { src: "hub1.svg", label: "Knowledge Hub", route: "/Hub" },
        { src: "bot.svg", label: "Legal Aid Bot", route: "/Chat" },
        { src: "Mega_quiz1.svg", label: "Mega Quiz", route: "/quiz" },
        { src: "bot2.svg", label: "Legal Hotspots", route: "/tracker" },
        { src: "news.svg", label: "Hot News", route: "/news" } // Reduced size for Hot News
      ].map((item, index) => (
        <button
          key={index}
          className={`relative z-10  w-full flex flex-col  items-center  p-2 ${
            activeButton === index ? 'bg-[#d7d5c6a3]' : ''
          }`}
          onClick={() => handleButtonClick(index, item.route)}
        >
          <div className='flex w-full p-2'>
          <img className={item.imgSize || "w-8 mr-2"} src={item.src} alt={item.label} />
          <h1 className={activeButton === index ? 'text-red-900 font-libra' : 'text-white font-libra'}>
            {item.label}
          </h1>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Nav;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  // Retrieve the active button from localStorage or default to the first button
  const [activeButton, setActiveButton] = useState(
    parseInt(localStorage.getItem('activeButton'), 10) || 0
  );

  // Handle button click
  const handleButtonClick = (index, route) => {
    setActiveButton(index); // Update active button state
    localStorage.setItem('activeButton', index); // Persist the active button
    setTimeout(() => navigate(route), 300); // Allow animation before navigation
  };

  useEffect(() => {
    const storedIndex = parseInt(localStorage.getItem('activeButton'), 10);
    if (!isNaN(storedIndex)) {
      setActiveButton(storedIndex);
    }
  }, []);

  return (
    <div className="w-[11%] h-full flex flex-col items-center gap-6 relative">
      {/* Focus box with animation */}
      <div
        className="absolute w-32 sm:w-36 h-32 sm:h-36 rounded-xl bg-[#E4E2D6A3] transition-transform duration-300"
        style={{
          transform: `translateY(${activeButton * 10}rem)`,
        }}
      ></div>

      {/* Home Button */}
      <div className="home-button-container">
        <button
          className={`relative z-10 w-28 sm:w-32 h-28 sm:h-32 flex flex-col justify-center items-center rounded-xl transition-all duration-300 ${
            activeButton === 0 ? 'p-2' : 'hover:p-2'
          }`}
          onClick={() => handleButtonClick(0, '/')}
        >
          <img className="w-20 sm:w-24" src="logo_1.svg" alt="Home" />
        </button>
      </div>

      {/* Knowledge Hub Button */}
      <div className="hub-button-container">
        <button
          className={`relative z-10 w-28 sm:w-32 h-28 sm:h-32 flex flex-col justify-center items-center rounded-xl transition-all duration-300 ${
            activeButton === 1 ? 'p-2' : 'hover:p-2'
          }`}
          onClick={() => handleButtonClick(1, '/Hub')}
        >
          <img className="w-20 sm:w-24" src="hub.svg" alt="Knowledge Hub" />
          <h1
            className={`transition-colors duration-300 ${
              activeButton === 1 ? 'text-black' : 'text-white'
            }`}
          >
            Knowledge Hub
          </h1>
        </button>
      </div>

      {/* Legal Aid Bot Button */}
      <div className="bot-button-container">
        <button
          className={`relative z-10 w-28 sm:w-32 h-28 sm:h-32 flex flex-col justify-center items-center rounded-xl transition-all duration-300 ${
            activeButton === 2 ? 'p-2' : 'hover:p-2'
          }`}
          onClick={() => handleButtonClick(2, '/Chat')}
        >
          <img className="w-20 sm:w-24" src="bot.svg" alt="Legal Aid Bot" />
          <h1
            className={`transition-colors duration-300 ${
              activeButton === 2 ? 'text-black' : 'text-white'
            }`}
          >
            Legal Aid Bot
          </h1>
        </button>
      </div>

      {/* Mega Quiz Button */}
      <div className="quiz-button-container">
        <button
          className={`relative z-10 w-28 sm:w-32 h-28 sm:h-32 flex flex-col justify-center items-center rounded-xl transition-all duration-300 ${
            activeButton === 3 ? 'p-2' : 'hover:p-2'
          }`}
          onClick={() => handleButtonClick(3, '/quiz')}
        >
          <img className="w-20 sm:w-24" src="Mega_quiz.svg" alt="Mega Quiz" />
          <h1
            className={`transition-colors duration-300 ${
              activeButton === 3 ? 'text-black' : 'text-white'
            }`}
          >
            Mega Quiz
          </h1>
        </button>
      </div>

      {/* Hot News Button */}
      <div className="news-button-container">
        <button
          className={`relative z-10 w-28 sm:w-32 h-28 sm:h-32 flex flex-col justify-center items-center rounded-xl transition-all duration-300 ${
            activeButton === 4 ? 'p-2' : 'hover:p-2'
          }`}
          onClick={() => handleButtonClick(4, '/news')}
        >
          <img className="w-18 sm:w-20" src="Hot_news.svg" alt="Hot News" />
          <h1
            className={`transition-colors duration-300 ${
              activeButton === 4 ? 'text-black' : 'text-white'
            }`}
          >
            Hot News
          </h1>
        </button>
      </div>
    </div>
  );
};

export default Nav;

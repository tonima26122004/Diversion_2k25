import React from 'react';
import { useNavigate } from 'react-router-dom';

const Upgrade = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <button
      className="inline-block backdrop-blur-md bg-[#E4E2D6] rounded-3xl p-3 mt-16 border-2 border-white/20"
      onClick={() => navigate('/subscribe')} // Navigate on click
    >
      <div
        className="
          text-lg font-bold
          bg-gradient-to-r from-[#65090A] via-[#000000] to-[#766C40]
          bg-[length:200%_auto]
          text-transparent bg-clip-text
          animate-shine
          font-libra
        "
      >
        Upgrade account
      </div>
    </button>
  );
};

export default Upgrade;
import React, { useState } from "react";

const ExpandableCard = ({ title, description, extraContent, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-xl bg-[#E6E6E6] rounded-lg shadow-lg mb-4 transition-all">
      <div className="flex px-6 py-4">
        {/* Content Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>

        {/* Toggle Button */}
        <div className="ml-6 flex items-center">
          <button onClick={toggleExpansion}>
            <img
              src={imageUrl}
              alt="Arrow"
              width={20}
              height={20}
              className={`transition-transform transform ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isExpanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4">
          <p className="text-gray-700">{extraContent}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;
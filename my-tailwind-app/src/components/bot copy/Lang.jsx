import React, { useState } from 'react';

const LanguageDropdown = () => {
  const languages = [
    'Assamese', 'Bengali', 'Bodo', 'Dogri', 'Gujarati', 'Hindi', 'Kannada',
    'Kashmiri', 'Konkani', 'Maithili', 'Malayalam', 'Manipuri', 'Marathi',
    'Nepali', 'Odia', 'Punjabi', 'Sanskrit', 'Santali', 'Sindhi', 'Tamil',
    'Telugu', 'Urdu',
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('Lang: English');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (language) => {
    setSelectedLanguage(`Lang: ${language}`); // Update the language with the new selection
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100 w-60"
      >
        <span className="mr-2">{selectedLanguage}</span> {/* Adjusted margin */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.586a1 1 0 01-1.414 0l-4-4.586a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-60 bg-white shadow-lg max-h-60 overflow-auto border border-gray-200 rounded-md z-10">
          {languages.map((language, index) => (
            <div
              key={index}
              onClick={() => handleSelect(language)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;

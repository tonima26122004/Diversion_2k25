import Image from 'next/image';
import React, { useState } from 'react';
import ExpandableCard from './ExpandableCard';


const Faq = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <section className="" id="faq">
      <div className="relative mt-24 flex justify-center">
        <Image
          src="/Frequently Ask Question.svg"
          alt="hero"
          width={1100}
          height={500}
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-black text-6xl font-bold">Frequently Ask Question</p>
        </div>
      </div>
      <p className="flex justify-center font-bold text-lg text-[#3F3F3F]">
        <Link href="/" className="underline px-1 font-semibold">
          CLICK HERE
        </Link>{' '}
        to know more
      </p>

      <div className="card flex px-24 justify-between">
        <div className="w-3/5">
          <h1 className="text-4xl font-bold mb-4">Popular Questions</h1>
          <ExpandableCard
            title="What is the purpose of this platform?"
            description=""
            extraContent="This platform is designed to streamline the management of R&D and S&T projects in the coal sector. It enables CMPDI administrators and project investigators to efficiently track progress, submit updates, and manage project documentation in one centralized system."
            imageUrl="/Dropdown.svg"
          />
         <ExpandableCard
            title="What is the purpose of this platform?"
            description=""
            extraContent="This platform is designed to streamline the management of R&D and S&T projects in the coal sector. It enables CMPDI administrators and project investigators to efficiently track progress, submit updates, and manage project documentation in one centralized system."
            imageUrl="/Dropdown.svg"
          />
        </div>

        <div className="flex flex-col">
          <div>
            <img src="" alt="" />
          </div>

          <div>
            <h1 className="text-center text-4xl font-semibold mt-5">Any Question?</h1>
          </div>

          <div className="mt-5">
            <h1 className="text-semibold">Let me know.</h1>

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Write here"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
            <div className="flex justify-center mt-5">
              <button
                onClick={handleButtonClick}
                className="bg-black text-white rounded-full px-6 py-2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
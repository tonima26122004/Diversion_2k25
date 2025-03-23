import React, { useState } from 'react';
import ExpandableCard from './ExpandableCard';

const Faq = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <section id="faq" className="">
      <div className="relative mt-5 flex justify-center my-4">
        
        <img src="faq.svg" alt="" />
      </div>

      <div className="card flex px-4 justify-between items-center">
        <div className="w-3/5">
          <h1 className="text-xl font-bold font-libra mb-4">Popular Questions</h1>
          <ExpandableCard
            title="What is the purpose of this platform?"
            description=""
            extraContent="This platform is designed to streamline the management of R&D and S&T projects in the coal sector. It enables CMPDI administrators and project investigators to efficiently track progress, submit updates, and manage project documentation in one centralized system."
            imageUrl="Dropdown.svg"
          />
          <ExpandableCard
            title="How can I track my project updates?"
            description=""
            extraContent="Users can log in to the platform and view real-time updates, milestones, and reports related to their projects."
            imageUrl="Dropdown.svg"
          />
          <ExpandableCard
            title="How can I track my project updates?"
            description=""
            extraContent="Users can log in to the platform and view real-time updates, milestones, and reports related to their projects."
            imageUrl="Dropdown.svg"
          />
          <ExpandableCard
            title="How can I track my project updates?"
            description=""
            extraContent="Users can log in to the platform and view real-time updates, milestones, and reports related to their projects."
            imageUrl="Dropdown.svg"
          />
          <ExpandableCard
            title="How can I track my project updates?"
            description=""
            extraContent="Users can log in to the platform and view real-time updates, milestones, and reports related to their projects."
            imageUrl="Dropdown.svg"
          />
           <ExpandableCard
            title="How can I track my project updates?"
            description=""
            extraContent="Users can log in to the platform and view real-time updates, milestones, and reports related to their projects."
            imageUrl="Dropdown.svg"
          />
           <ExpandableCard
            title="How can I track my project updates?"
            description=""
            extraContent="Users can log in to the platform and view real-time updates, milestones, and reports related to their projects."
            imageUrl="Dropdown.svg"
          />
          
        </div>

        {/* <div className="flex flex-col w-2/5 items-center border-2 border-[#766C40]">
        
        <div><img src="ask.svg" alt="" /></div>
        
          <h1 className="text-center text-4xl font-semibold mt-5">Any Questions?</h1>

          <div className="mt-5 w-full px-5">
            <h2 className="text-lg font-semibold">Let me know.</h2>
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
                className="bg-black text-white rounded-full px-6 font-libra py-2"
              >
                Send
              </button>
            </div>
          </div>
        </div> */}

        <div className='w-[50%] mx-10  max-h-[40%]'>
        <div className='flex border-2 border-[#766C40] max-h-[100%] flex-col items-center'>
        <div><img src="ask.svg" alt="" /></div>
        <h1 className="text-center text-lg text-[#898880] font-semibold mt-5">You can ask anything you want to know about Feedback.</h1>
        <h1 className="text-center text-4xl font-semibold mt-5">Any Questions?</h1>

        <div className="mt-5 w-full px-5 mx-auto">
          <h2 className="text-lg font-semibold">Let me know.</h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Write here"
            className="w-[80%] p-3 border mx-auto border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          />
          <div className="flex justify-center my-5">
            <button
              onClick={handleButtonClick}
              className="bg-black text-white rounded-full px-6 font-libra py-2"
            >
              Send
            </button>
          </div>
          </div>

        </div>

        </div>


      </div>
    </section>
  );
};

export default Faq;

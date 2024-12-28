import React, { useState } from 'react';
import Nav from '../main copy/Nav';
import LanguageDropdown from './Lang';
import AnimatedInputBox from './Input';


const Chat = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [queries, setQueries] = useState([]);
    const [selectedQueryIndex, setSelectedQueryIndex] = useState(null);
    const [currentQuery, setCurrentQuery] = useState('');
    const [isQuerySubmitted, setIsQuerySubmitted] = useState(false);
    const [isInputMoved, setIsInputMoved] = useState(false); // Track input box position

    // Sidebar toggle handler
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Add new query and move input box
    const addQuery = (query) => {
        setQueries((prevQueries) => [...prevQueries, query]);
        setCurrentQuery(query);
        setIsQuerySubmitted(true);
        setIsInputMoved(true); // Move input box to bottom
    };

    // Handle query click (Previous Queries)
    const handleQueryClick = (index) => {
        setSelectedQueryIndex(index);
    };

    // Handle "Add New Query" button click
    const handleAddNewQueryClick = () => {
        setIsQuerySubmitted(false); // Reset the state for new query input
        setIsInputMoved(false); // Reset input box position
    };

    return (
        <div className="relative">
            <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
                <Nav />
                <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-hidden">
                    {/* Top Section - Main Heading */}
                    <div className="flex">
                        <div className="flex flex-col w-full gap-2 py-4">
                            <h1 className="text-4xl font-semibold px-4">
                                {currentQuery
                                    ? `Your query about ${currentQuery}`
                                    : 'Ask your query about'}
                            </h1>
                            <h1 className="text-xl px-4">Submit your query on issues, rules, or laws for guidance</h1>
                            <div className="border-[#766C40] border-2 w-1/2"></div>
                        </div>
                        <div className="flex items-center gap-4 px-3">
                            <LanguageDropdown />
                            <button><img className="w-32" src="User.svg" alt="" /></button>
                        </div>
                    </div>

                    {/* Sidebar Button - Command Line for Sidebar Toggle */}
                    <div>
                        <button
                            className={`flex items-center rounded-md p-2 ml-3 font-semibold gap-2 transition-all duration-300
                                ${isSidebarOpen
                                    ? 'text-[#65090A] border-2 rounded-md text-xl border-[#65090A]'
                                    : 'text-black border-2 rounded-md text-xl border-black'
                                }`}
                            onClick={toggleSidebar}
                        >
                            <img src={isSidebarOpen ? "x.svg" : "prev.svg"} alt="" className="w-5 h-5" />
                            <span>{isSidebarOpen ? "Close Previous" : "Check Previous"}</span>
                        </button>
                    </div>

                    {/* Sidebar Section - Previous Queries */}
                    <div
                        className={`absolute right-0 bottom-0 h-[88%] w-[20%] bg-[#766C40] rounded-l-xl shadow-lg transform transition-transform duration-300 z-20 ${
                            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <h2 className="text-xl text-white font-semibold p-4">Previous Queries</h2>
                        <ul className="p-4 space-y-2">
                            {queries.map((query, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleQueryClick(index)}
                                    className={`p-2 rounded-md cursor-pointer transition-all duration-300 
                                    ${selectedQueryIndex === index ? 'bg-[#E4E2D6] border-2 border-[#766C40] text-black' : 'text-white'} 
                                    hover:bg-[#E4E2D6A3]`}
                                >
                                    {query}
                                </li>
                            ))}
                        </ul>
                        {/* Add New Query Button */}
                        <div className="absolute bottom-4 left-0 w-full px-4 flex justify-center">
                            <button
                                className=" text-xl flex items-center justify-center gap-4 w-[80%] border-2 border-[#E4E2D6]  text-[#E4E2D6] py-2 rounded-md shadow-md font-semibold"
                                onClick={handleAddNewQueryClick}
                            >
                                <img className='w-4' src="plus.svg" alt="" />
                                Add New Query
                            </button>
                        </div>
                    </div>

                    {/* Main Section - Input Box */}
                    <div
                        className={`flex flex-col justify-center items-center absolute w-full gap-5 transition-all duration-700 ${isInputMoved ? 'bottom-4 w-[90%]' : 'top-[50%] w-[56%]'} left-1/2 transform -translate-x-1/2 z-10`}
                    >
                        {!isQuerySubmitted && (
                            <h1 className="text-5xl font-semibold text-[#52524D]">
                                Enter your query here.
                            </h1>
                        )}
                        <AnimatedInputBox addQuery={addQuery} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;

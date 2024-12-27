import React, { useState } from 'react';
import Nav from '../main copy/Nav';
import LanguageDropdown from './Lang';
import AnimatedInputBox from './Input';


const Chat = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [queries, setQueries] = useState([]);
    const [selectedQueryIndex, setSelectedQueryIndex] = useState(null); // Track selected query

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const addQuery = (query) => {
        setQueries((prevQueries) => [...prevQueries, query]);
    };

    const handleQueryClick = (index) => {
        setSelectedQueryIndex(index); // Set the selected query index
    };

    return (
        <div>
            <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between">
                <Nav />
                <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-hidden">
                    <div className="flex">
                        <div className="flex flex-col w-full gap-2 py-4">
                            <h1 className="text-4xl font-semibold px-4">Ask your query about </h1>
                            <h1 className="text-xl px-4">Submit your query on issues, rules, or laws for guidance </h1>
                            <div className="border-[#766C40] border-2 w-1/2"></div>
                        </div>
                        <div className="flex items-center gap-4 px-3">
                            <LanguageDropdown />
                            <button><img className="w-32" src="User.svg" alt="" /></button>
                        </div>
                    </div>
                    <div>
                        <button
                            className="flex items-center border-2 rounded-md p-2 ml-3 font-semibold border-[#766C40]"
                            onClick={toggleSidebar}
                        >
                            <img src={isSidebarOpen ? "close.svg" : "prev.svg"} alt="" />
                            <span>{isSidebarOpen ? "Close Previous" : "Check Previous"}</span>
                        </button>
                    </div>

                    {/* Sidebar */}
                    <div
                        className={`absolute right-0 bottom-0 h-[88%] w-[20%] bg-[#766C40] rounded-l-xl shadow-lg transform transition-transform duration-300 ${
                            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <h2 className="text-xl font-semibold p-4">Previous Queries</h2>
                        <ul className="p-4 space-y-2">
                            {queries.map((query, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleQueryClick(index)} // Add click handler
                                    className={`p-2 rounded-md cursor-pointer transition-all duration-300 
                                        ${selectedQueryIndex === index ? 'bg-[#E4E2D6] border-2 border-[#766C40]' : ''} 
                                        hover:bg-[#E4E2D6A3]`}
                                >
                                    {query}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-center absolute top-[50%] w-[100%] gap-5">
                        <h1 className="text-5xl font-semibold text-[#766C40]">Enter your query here.</h1>
                        <AnimatedInputBox addQuery={addQuery} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;

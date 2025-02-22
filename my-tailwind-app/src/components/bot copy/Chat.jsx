import React, { useState } from 'react';
import Nav from '../Knowledge/part_hub/Nav';
import LanguageDropdown from './Lang';
import AnimatedInputBox from './Input';
import DisplayBox from './DisplayBox';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const Chat = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [queries, setQueries] = useState([]);
    const [displayedQueries, setDisplayedQueries] = useState([]); // New state for DisplayBox
    const [currentQuery, setCurrentQuery] = useState('');
    const [isQuerySubmitted, setIsQuerySubmitted] = useState(false);
    const [isInputMoved, setIsInputMoved] = useState(false);
    const [que, setque] = useState('');
    const [ans, setans] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [show, setshow] = useState(false);
    const [displaybutton, setdisplaybutton] = useState(false);
    const word = ['Article 1', 'Article 2', 'Article 3', 'Article 4', 'Article 5', 'overspeeding'];
    const articlewords = [
        'Article 1', 'Article 2', 'Article 3', 'Article 4', 'Article 5', 
        'Article 6', 'Article 7', 'Article 8', 'Article 9', 'Article 10', 
        'Article 15', 'Article 19', 'Article 21', 'Article 32', 'Article 44', 
        'Fundamental Rights', 'Constitutional Law', 'Criminal Law', 'Civil Law', 
        'Cyber Law', 'Human Rights Law', 'Intellectual Property Law', 'Consumer Protection Act', 
        'Labor Laws', 'Contract Law', 'Corporate Law', 'Environmental Law', 'Property Law', 
        'Traffic Laws', 'Speed Limits', 'Drunk Driving', 'Road Safety Rules', 'Helmet Rules', 
        'Seat Belt Laws', 'No Parking Zones', 'Traffic', 'Traffic Signals', 'Hit and Run Law', 
        'Driving License Rules', 'Overloading Rules', 'Vehicle Insurance Law', 'Penalty for Rash Driving',
        'What is the Right to Equality?', 'What is the Right to Freedom?', 'What is Article 21?', 
    'What is Intellectual Property Law?', 'What is Cyber Law?', 'What is Road Safety Law?', 
    'What is the penalty for drunk driving?', 'What is the punishment for defamation?', 
    'What is the process of filing an FIR?', 'What is the legal drinking age in India?', 
    'What is the punishment for domestic violence?', 'What is the law on child labor in India?', 
    'What is the punishment for hit and run cases?', 'What is the difference between civil and criminal law?', 
    'What is considered workplace harassment?', 'What is the punishment for data theft?', 
    'What is a constitutional remedy?', 'What is the legal process for marriage registration?', 
    'What is the punishment for cybercrime?', 'What is the role of the Supreme Court in India?', 
    'What is an RTI application?', 'What is the law on social media privacy?'
    ];

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Add a new query
    const addQuery = (query) => {
        setQueries((prevQueries) => [...prevQueries, query]); // Update sidebar queries
        setDisplayedQueries((prevDisplayed) => [...prevDisplayed, query]); // Update DisplayBox
        setCurrentQuery(query); // Update the heading with the current query
        setIsQuerySubmitted(true); // Mark query as submitted
        setIsInputMoved(true); // Move the input box to the bottom
    };

    // Handle "Add New Query" button click
    const handleAddNewQueryClick = () => {
        setDisplayedQueries([]); // Clear DisplayBox
        setCurrentQuery(''); // Reset the heading to default
        setIsQuerySubmitted(false); // Reset input box state
        setIsInputMoved(false); // Reset input box position
    };

    // Fetch answer from the API
    async function getans() {
        setLoading(true);
        const response = await axios({
            url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB2PIbL4OzhuqOoS-Agc-OL_JlUnxrw9Kg',
            method: 'post',
            data: {
                "contents": [{
                    "parts": [{
                        "text": `${que}- here is the instruction for the messege- According to the constitution of India. Provide a clear,give the answer in circle bullet(medium size with filled) in point-wise  answer using proper line breaks, bullets and ensuring each point starts on a new line. Use full sentences and separate each point clearly.don't give any asterisks in answer.give answer within 60 words.if any other questions is there rather than articles,Laws,Constitution then just reply-"please provide only consitutuion , Laws and Article related Question" `
                    }]
                }]
            }
        });
        setans([
            ...ans,
            { user: que, bot: response['data']['candidates'][0]['content']['parts'][0]['text'] }
        ]);
        setLoading(false);
        setque('');
        setshow(true);
        const headword = word.filter(n => que.includes(n));
        setCurrentQuery(headword);
        forbutton();
    }

    // Check if the query contains specific keywords to show the "Read More" button
    function forbutton() {
        const check = articlewords.some(word => que.includes(word));
        if (check) {
            setdisplaybutton(true);
        } else {
            setdisplaybutton(false);
        }
    }

    return (
        <div className="relative">
            <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
                <Nav />
                <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-hidden">
                    {/* Top Section - Main Heading */}
                    <div className="flex">
                        <div className="flex flex-col w-full gap-2 py-4">
                            <h1 className="text-4xl font-libra font-md px-4">
                                {currentQuery
                                    ? `Your query about ${currentQuery}`
                                    : 'Ask your query about'}
                            </h1>
                            <h1 className="text-xl font-libra font-normal px-4 text-[#52524D] ">
                                Submit your query on issues, rules, or laws for guidance
                            </h1>
                            <div className="border-[#766C40] border-2 w-1/2"></div>
                        </div>
                        <div className="flex items-center gap-4 px-3">
                            <LanguageDropdown />
                            <button>
                                <img className="w-32" src="User.svg" alt="" />
                            </button>
                        </div>
                    </div>

                    {/* Sidebar Button */}
                    <div>
                        <button
                            className={`flex items-center rounded-md p-2 ml-3 font-semibold gap-2 transition-all duration-300
                                ${
                                    isSidebarOpen
                                        ? 'text-[#65090A] border-2 font-libra rounded-md text-xl border-[#65090A]'
                                        : 'text-black border-2 font-libra rounded-md text-xl border-black'
                                }`}
                            onClick={toggleSidebar}
                        >
                            <img src={isSidebarOpen ? 'x.svg' : 'prev.svg'} alt="" className="w-5 h-5" />
                            <span>{isSidebarOpen ? 'Close Previous' : 'Check Previous'}</span>
                        </button>
                    </div>

                    {/* Sidebar Section */}
                    <div
                        className={`absolute right-0 bottom-0 h-[88%] w-[20%] bg-[#766C40] rounded-l-xl shadow-lg transform transition-transform duration-300 z-20 ${
                            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <h2 className="text-xl text-white font-libra font-semibold p-4 ">Previous Queries</h2>
                        <ul className="p-4 space-y-2">
                            {queries.map((query, index) => (
                                <li
                                    key={index}
                                    className="p-2 rounded-md font-libra cursor-pointer transition-all duration-300 text-white hover:bg-[#E4E2D6A3]"
                                >
                                    {query}
                                </li>
                            ))}
                        </ul>
                        <div className="absolute bottom-4 left-0 w-full px-4 flex justify-center">
                            <button
                                className="text-xl font-libra flex items-center justify-center gap-4 w-[80%] border-2 border-[#E4E2D6] text-[#E4E2D6] py-2 rounded-md shadow-md font-semibold"
                                onClick={handleAddNewQueryClick}
                            >
                                <img className="w-4" src="plus.svg" alt="" />
                                Add New Query
                            </button>
                        </div>
                    </div>

                    {/* Main Section */}
                    <div
                        className={`flex flex-col justify-center items-center absolute gap-5 transition-[width] duration-700 ${
                            isInputMoved ? 'bottom-4 w-[90%]' : 'top-[50%] w-[56%]'
                        } left-1/2 transform -translate-x-1/2 z-10`}
                    >
                        {!isQuerySubmitted && (
                            <h1 className="text-5xl font-libra font-medium text-[#52524D]">
                                Enter your query here.
                            </h1>
                        )}
                        <AnimatedInputBox
                            addQuery={addQuery}
                            getans={getans}
                            setque={setque}
                            que={que}
                            setIsQuerySubmitted={setIsQuerySubmitted}
                            setIsInputMoved={setIsInputMoved}
                        />
                    </div>

                    {/* Display Box Section */}
                    <pre className='whitespace-pre-wrap break-words overflow-x-hidden'>
                        <DisplayBox queries={displayedQueries} ans={ans} Loading={Loading} show={show} displaybutton={displaybutton} />
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Chat;
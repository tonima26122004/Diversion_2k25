import React, { useState } from 'react';
import Nav from '../main copy/Nav';
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
    const [que,setque]= useState('');
    const [ans,setans]=useState([]);

    const [Loading,setLoading]=useState(false);

    const [show,setshow]=useState(false);

    const [displaybutton,setdisplaybutton]=useState(false)
    
    const word=['Article 1','Article 2','Article 3','Article 4','Article 5','overspeeding'];

    const articlewords=['Article 1','Article 2','Article 3','Article 4','Article 5'];

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










    async function getans() {
        setLoading(true);
        const response = await axios({
          url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB2PIbL4OzhuqOoS-Agc-OL_JlUnxrw9Kg',
          method: 'post',
          data: {
            "contents": [{
              "parts": [{
                "text": `${que} Provide a clear, numbered point-wise in circle bullet point answer using proper line breaks and ensuring each point starts on a new line. Use full sentences and separate each point clearly.don't give any star in answer`
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
        // console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
        setCurrentQuery(headword);
        forbutton();
        
      }

      

      function forbutton(){
        const check = articlewords.some(word => que.includes(word));
        if(check)
        {
            setdisplaybutton(true);
        }
        else{
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
                        <AnimatedInputBox addQuery={addQuery} getans={getans} setque={setque} que={que} setIsQuerySubmitted={setIsQuerySubmitted} setIsInputMoved={setIsInputMoved}/>
                    </div>


                    {/* Display Box Section */}
                  <pre className='whitespace-pre-wrap break-words overflow-x-hidden'>  <DisplayBox queries={displayedQueries} ans={ans} Loading={Loading} show={show}  displaybutton={displaybutton} />
                  </pre> </div>
            </div>
        </div>
    );
};

export default Chat;

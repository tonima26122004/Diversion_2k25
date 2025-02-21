import React, { useState, useEffect } from "react";
import Nav from "../main copy/Nav";
import LanguageDropdown from '../bot copy/Lang';
import TopNav from "./topnav";
import Card from "./part";
import Card2 from "./part2";
import Card3 from "./part3";

const Hub = () => {
  const [userName, setUserName] = useState("User"); // Default to "User"

  // Simulate fetching user data from the backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace this with an actual API call to your backend
        const response = await fetch("/api/user"); // Example API endpoint
        const data = await response.json();
        setUserName(data.name); // Assuming the backend returns a 'name' field
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Example onClick handler
  const handleCardClick = (title) => {
    alert(`Explore button clicked for: ${title}`);
  };

  return (
    <div className="relative">
      <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
        <Nav />
        <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-y-auto">

          {/* Heading */}
          <div className="flex">
            <div className="flex flex-col w-full gap-2 py-4">
              <h1 className="text-6xl font-libra px-4 text-black ">
                Hi, {userName}
              </h1>
              <h1 className="text-3xl font-libra px-4 text-[#52524D] ">
                Discover, Learn, and Live the Indian Constitution
              </h1>
              
              <div className="border-[#766C40] border-2 w-4/6"></div>
            </div>
            <div className="flex items-center gap-4 px-3">
              <LanguageDropdown />
              <button>
                <img className="w-32" src="User.svg" alt="User Profile" />
              </button>
            </div>
          </div>
          <TopNav />
          
          <div className="border-2 border-black w-auto p-2 rounded-3xl m-6">
            <h1 className="text-3xl font-libra px-4">
              The <span className="text-red-900">Preamble </span>of the Indian Constitution:
            </h1>
            <div className="border-[#766C40] border-2 rounded-full w-[45%] ml-4"></div>
            <div className="flex">
              <div>
                <img src="Preamble.svg" alt="Preamble" className="w-auto h-auto p-2 px-4"/>
              </div>
              
              <div>
                <ul className="list-disc pl-5 text-2xl font-libra items-center p-8 ml-4 ">
                  <li>Introduces core principles of the Constitution.</li>
                  <li>Declares India as a Sovereign, Socialist, Secular, Democratic Republic.</li>
                  <li>Ensures Justice, Liberty, Equality, and Fraternity for all citizens.</li>
                  <li>Reflects the goal of building an inclusive, just society.</li>
                  <li>Guides the interpretation of constitutional provisions.</li>
                </ul>
              </div>
            </div>
            
          </div>
          <h1 className="text-3xl font-libra px-4">
              The <span className="text-red-900">Parts </span>of the Indian Constitution:
            </h1>
            <div className="border-[#766C40] border-2 rounded-full w-[35%] ml-4"></div>
            <div className="flex justify-between gap-6 pr-16">
          {/* Content */}
          <Card title="Union and its Territory" number="I" onExplore={() => handleCardClick("Union and its Territory")} />
          <Card title="Citizenship" number="II" onExplore={() => handleCardClick("Citizenship")} />
          <Card title="Fundamental Rights" number="III" onExplore={() => handleCardClick("Fundamental Rights")} />
          </div>
          <div className="flex justify-between gap-6 pr-16">
          <Card title="Directive Principles of State policy" number="IV" onExplore={() => handleCardClick("Directive Principles of State policy")} />
          <Card2 title="Fundamental Duties" number="IV" onExplore={() => handleCardClick("Citizenship")} />
          <Card title="The Union" number="V" onExplore={() => handleCardClick("Fundamental Rights")} />
          </div>
          <div className="flex justify-between gap-6 pr-16">
          {/* Content */}
          <Card title="The States”" number="VI" onExplore={() => handleCardClick("Union and its Territory")} />
          <Card title="Repealed by the Constitution Act, 1956" number="VII" onExplore={() => handleCardClick("Citizenship")} />
          <Card title="The Union Territories" number="VIII" onExplore={() => handleCardClick("Fundamental Rights")} />
          </div>
          <div className="flex justify-between gap-6 pr-16">
          <Card title="The Panchayats" number="IX" onExplore={() => handleCardClick("Directive Principles of State policy")} />
          <Card2 title="The Municipalities" number="IX" onExplore={() => handleCardClick("Citizenship")} />
          <Card3 title="The Co-operative Societies" number="IX" onExplore={() => handleCardClick("Fundamental Rights")} />
          </div>
          <div className="flex justify-between gap-6 pr-16">
          {/* Content */}
          <Card title="The Scheduled and Tribal Areas" number="X" onExplore={() => handleCardClick("Union and its Territory")} />
          <Card title="Relations between the Union and States" number="XI" onExplore={() => handleCardClick("Citizenship")} />
          <Card title="Finance, Property, Contracts, and Suits" number="XII" onExplore={() => handleCardClick("Fundamental Rights")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hub;

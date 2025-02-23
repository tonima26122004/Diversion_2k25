import React, { useState } from 'react';

const stateCities = {
  westbengal: ['Kolkata', 'Howrah', 'Durgapur'],
  maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
  delhi: ['New Delhi'],
  tamilnadu: ['Chennai', 'Coimbatore', 'Madurai'],
  karnataka: ['Bengaluru', 'Mysuru', 'Hubli'],
  uttarpradesh: ['Lucknow', 'Kanpur', 'Varanasi'],
  gujarat: ['Ahmedabad', 'Surat', 'Vadodara'],
  rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur'],
  kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode'],
  punjab: ['Chandigarh', 'Amritsar', 'Ludhiana'],
  bihar: ['Patna', 'Gaya', 'Muzaffarpur'],
  andhrapradesh: ['Hyderabad', 'Visakhapatnam', 'Vijayawada'],
  telangana: ['Hyderabad', 'Warangal', 'Nizamabad'],
  madhyapradesh: ['Bhopal', 'Indore', 'Jabalpur'],
  odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela'],
  haryana: ['Gurgaon', 'Faridabad', 'Panipat'],
  jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad'],
  assam: ['Guwahati', 'Silchar', 'Dibrugarh'],
  chhattisgarh: ['Raipur', 'Bhilai', 'Bilaspur'],
  uttarakhand: ['Dehradun', 'Haridwar', 'Nainital'],
};

const Tracker_nav = ({ onCityChange, onStateChange }) => {
  const [city, setCity] = useState('kolkata');
  const [state, setState] = useState('westbengal');
  const [cities, setCities] = useState(stateCities[state]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
    onCityChange(e.target.value);
  };

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setState(newState);
    setCities(stateCities[newState]); // Update cities based on the selected state
    onStateChange(newState);
  };

  return (
    <div>
      <div className="flex mx-3 my-3 items-center justify-between border border-black rounded-full p-1 pl-2">
        {/* City Dropdown */}
        <div className="flex items-center">
          <label htmlFor="city" className="text-black">
            City :
          </label>
          <select
            id="city"
            value={city}
            onChange={handleCityChange}
            className="bg-transparent text-gray-500 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            {cities.map((cityName, index) => (
              <option key={index} value={cityName.toLowerCase()}>
                {cityName}
              </option>
            ))}
          </select>
        </div>

        {/* State Dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="state" className="text-black">
            State :
          </label>
          <select
            id="state"
            value={state}
            onChange={handleStateChange}
            className="bg-transparent rounded py-1 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            {Object.keys(stateCities).map((stateName) => (
              <option key={stateName} value={stateName}>
                {stateName.charAt(0).toUpperCase() + stateName.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Tracker_nav;
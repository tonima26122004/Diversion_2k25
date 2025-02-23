import React from "react";
import Nav from "../Knowledge/part_hub/Nav";
import LanguageDropdown from "../bot copy/Lang";
import Tracker3_card from "./Tracker3_card.jsx";

// Complete violation data with longer descriptions
const violation_data = [
  {
    State: "West Bengal",
    City: "Kolkata",
    "Violation Name": "Traffic Violations",
    Percentage: "45%",
    Description:
      "Over-speeding, signal jumping, and illegal parking are common in Kolkata. The city's traffic management system struggles to keep up with the increasing number of vehicles, leading to frequent violations. Authorities are working on implementing stricter penalties and better surveillance to curb these issues.",
  },
  {
    State: "West Bengal",
    City: "Kolkata",
    "Violation Name": "Theft",
    Percentage: "30%",
    Description:
      "Petty theft, pickpocketing, and burglary are frequently reported in Kolkata. Crowded areas like markets and public transport hubs are hotspots for such crimes. The police have increased patrolling and installed CCTV cameras to reduce these incidents.",
  },
  {
    State: "West Bengal",
    City: "Kolkata",
    "Violation Name": "Property Disputes",
    Percentage: "25%",
    Description:
      "Disputes over land, housing, and inheritance are prevalent in Kolkata. Many cases involve lengthy legal battles due to unclear property titles and documentation. The government is encouraging mediation and faster resolution through special courts.",
  },
  {
    State: "Maharashtra",
    City: "Mumbai",
    "Violation Name": "Cybercrime",
    Percentage: "40%",
    Description:
      "Online fraud, phishing, and hacking are on the rise in Mumbai. With the city being a financial hub, cybercriminals target individuals and businesses alike. Authorities are conducting awareness campaigns and strengthening cybersecurity measures.",
  },
  {
    State: "Maharashtra",
    City: "Mumbai",
    "Violation Name": "Fraud",
    Percentage: "35%",
    Description:
      "Financial scams, Ponzi schemes, and identity theft are common in Mumbai. Many victims are lured by promises of high returns on investments. The police have set up a dedicated fraud investigation unit to tackle these crimes.",
  },
  {
    State: "Maharashtra",
    City: "Mumbai",
    "Violation Name": "Traffic Violations",
    Percentage: "25%",
    Description:
      "Overcrowded roads lead to frequent traffic violations in Mumbai. Signal jumping, illegal parking, and reckless driving are major issues. The traffic police are using drones and AI-based systems to monitor and penalize offenders.",
  },
  {
    State: "Delhi",
    City: "New Delhi",
    "Violation Name": "Assault",
    Percentage: "40%",
    Description:
      "Physical altercations and public brawls are frequently reported in New Delhi. Many incidents occur due to road rage or disputes in crowded areas. The police are increasing patrolling and setting up help desks for victims.",
  },
  {
    State: "Delhi",
    City: "New Delhi",
    "Violation Name": "Theft",
    Percentage: "35%",
    Description:
      "Snatching, burglary, and vehicle theft are common in New Delhi. High population density and inadequate surveillance contribute to these crimes. The police are using GPS tracking and community policing to address the issue.",
  },
  {
    State: "Delhi",
    City: "New Delhi",
    "Violation Name": "Traffic Violations",
    Percentage: "25%",
    Description:
      "Signal violations and reckless driving are major issues in New Delhi. The city's traffic police have introduced e-challans and automated systems to penalize offenders. Public awareness campaigns are also being conducted.",
  },
  {
    State: "Tamil Nadu",
    City: "Chennai",
    "Violation Name": "Property Disputes",
    Percentage: "50%",
    Description:
      "Disputes over land, housing, and inheritance are prevalent in Chennai. Many cases involve lengthy legal battles due to unclear property titles and documentation. The government is encouraging mediation and faster resolution through special courts.",
  },
  {
    State: "Tamil Nadu",
    City: "Chennai",
    "Violation Name": "Traffic Violations",
    Percentage: "30%",
    Description:
      "Over-speeding and illegal parking are common in Chennai. The city's traffic management system struggles to keep up with the increasing number of vehicles. Authorities are working on implementing stricter penalties and better surveillance.",
  },
  {
    State: "Tamil Nadu",
    City: "Chennai",
    "Violation Name": "Domestic Violence",
    Percentage: "20%",
    Description:
      "Cases of domestic abuse and harassment are reported frequently in Chennai. Many victims hesitate to report due to social stigma. NGOs and the police are working together to provide support and counseling to victims.",
  },
  {
    State: "Karnataka",
    City: "Bengaluru",
    "Violation Name": "Cybercrime",
    Percentage: "50%",
    Description:
      "Online fraud, data breaches, and hacking are common in Bengaluru. With the city being a tech hub, cybercriminals target individuals and businesses alike. Authorities are conducting awareness campaigns and strengthening cybersecurity measures.",
  },
  {
    State: "Karnataka",
    City: "Bengaluru",
    "Violation Name": "Traffic Violations",
    Percentage: "30%",
    Description:
      "Signal jumping and over-speeding are major issues in Bengaluru. The traffic police are using drones and AI-based systems to monitor and penalize offenders. Public awareness campaigns are also being conducted.",
  },
  {
    State: "Karnataka",
    City: "Bengaluru",
    "Violation Name": "Theft",
    Percentage: "20%",
    Description:
      "Petty theft and burglary are frequently reported in Bengaluru. High population density and inadequate surveillance contribute to these crimes. The police are using GPS tracking and community policing to address the issue.",
  },
  {
    State: "Uttar Pradesh",
    City: "Lucknow",
    "Violation Name": "Assault",
    Percentage: "40%",
    Description:
      "Physical altercations and public brawls are common in Lucknow. Many incidents occur due to road rage or disputes in crowded areas. The police are increasing patrolling and setting up help desks for victims.",
  },
  {
    State: "Uttar Pradesh",
    City: "Lucknow",
    "Violation Name": "Property Disputes",
    Percentage: "35%",
    Description:
      "Disputes over land and housing are prevalent in Lucknow. Many cases involve lengthy legal battles due to unclear property titles and documentation. The government is encouraging mediation and faster resolution through special courts.",
  },
  {
    State: "Uttar Pradesh",
    City: "Lucknow",
    "Violation Name": "Traffic Violations",
    Percentage: "25%",
    Description:
      "Reckless driving and signal violations are major issues in Lucknow. The traffic police have introduced e-challans and automated systems to penalize offenders. Public awareness campaigns are also being conducted.",
  },
  {
    State: "Gujarat",
    City: "Ahmedabad",
    "Violation Name": "Traffic Violations",
    Percentage: "50%",
    Description:
      "Over-speeding and illegal parking are common in Ahmedabad. The city's traffic management system struggles to keep up with the increasing number of vehicles. Authorities are working on implementing stricter penalties and better surveillance.",
  },
  {
    State: "Gujarat",
    City: "Ahmedabad",
    "Violation Name": "Theft",
    Percentage: "30%",
    Description:
      "Petty theft and burglary are frequently reported in Ahmedabad. High population density and inadequate surveillance contribute to these crimes. The police are using GPS tracking and community policing to address the issue.",
  },
];

const Tracker_3 = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-[#766C40] h-screen w-screen flex items-center justify-between relative">
          <Nav />

          <div className="bg-[#E4E2D6] w-[88%] h-[95%] rounded-xl mr-4 relative overflow-hidden">
            {/* Heading */}
            <div className="flex">
              <div className="flex flex-col w-full gap-2 py-2">
                <div>
                  <h1 className="text-5xl my-2 font-libra px-4">Law Violation Tracker</h1>
                </div>

                <h1 className="text-2xl font-libra px-4 text-[#52524D]">
                  Stay updated on high-risk areas and legal breaches near you.
                </h1>
                <div className="border-[#766C40] border-2 w-[88%]"></div>
              </div>
              <div className="flex items-center gap-4 px-3">
                <LanguageDropdown />
                <button>
                  <img className="w-32" src="User.svg" alt="User Profile" />
                </button>
              </div>
            </div>

            {/* Dynamic Cards Section */}
            <div className="relative border-2 border-black w-[98%] h-[74%] mx-auto mt-3 p-4 rounded-xl">
              <div>
                <h1 className="text-3xl my-3 px-4 font-libra font-semibold text-[#766C40]">
                  <a className="text-3xl font-libra text-[#65090A]">Law Violation</a> in Newtown:
                </h1>
              </div>

              <div className="max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent flex flex-col gap-2">
                {violation_data.map((violation, index) => (
                  <Tracker3_card
                    key={index}
                    title={violation["Violation Name"]}
                    date={`${violation.State}, ${violation.City}`}
                    content={violation.Description}
                    onLearnMore={() => console.log("Learn More clicked")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker_3;
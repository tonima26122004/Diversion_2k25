import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from "react-router-dom";

// State coordinates mapping
const stateCoordinates = {
  westbengal: [22.5726, 88.3639], // Kolkata
  maharashtra: [19.0760, 72.8777], // Mumbai
  delhi: [28.6139, 77.2090], // New Delhi
  tamilnadu: [13.0827, 80.2707], // Chennai
  karnataka: [12.9716, 77.5946], // Bengaluru
  uttarpradesh: [26.8467, 80.9462], // Lucknow
  gujarat: [23.0225, 72.5714], // Ahmedabad
  rajasthan: [26.9124, 75.7873], // Jaipur
  kerala: [8.5241, 76.9366], // Thiruvananthapuram
  punjab: [30.7333, 76.7794], // Chandigarh
  bihar: [25.5941, 85.1376], // Patna
  andhrapradesh: [17.3850, 78.4867], // Hyderabad
  telangana: [17.3850, 78.4867], // Hyderabad
  madhyapradesh: [23.2599, 77.4126], // Bhopal
  odisha: [20.2961, 85.8245], // Bhubaneswar
  haryana: [28.4595, 77.0266], // Gurgaon
  jharkhand: [23.3441, 85.3096], // Ranchi
  assam: [26.1445, 91.7362], // Guwahati
  chhattisgarh: [21.2514, 81.6296], // Raipur
  uttarakhand: [30.3165, 78.0322], // Dehradun
};

// City coordinates mapping
const cityCoordinates = {
  kolkata: [22.5726, 88.3639],
  howrah: [22.5958, 88.2636],
  durgapur: [23.5204, 87.3119],
  mumbai: [19.0760, 72.8777],
  pune: [18.5204, 73.8567],
  nagpur: [21.1458, 79.0882],
  newdelhi: [28.6139, 77.2090],
  chennai: [13.0827, 80.2707],
  coimbatore: [11.0168, 76.9558],
  madurai: [9.9252, 78.1198],
  bengaluru: [12.9716, 77.5946],
  mysuru: [12.2958, 76.6394],
  hubli: [15.3647, 75.1240],
  lucknow: [26.8467, 80.9462],
  kanpur: [26.4499, 80.3319],
  varanasi: [25.3176, 82.9739],
  ahmedabad: [23.0225, 72.5714],
  surat: [21.1702, 72.8311],
  vadodara: [22.3072, 73.1812],
  jaipur: [26.9124, 75.7873],
  udaipur: [24.5854, 73.7125],
  jodhpur: [26.2389, 73.0243],
  thiruvananthapuram: [8.5241, 76.9366],
  kochi: [9.9312, 76.2673],
  kozhikode: [11.2588, 75.7804],
  chandigarh: [30.7333, 76.7794],
  amritsar: [31.6340, 74.8723],
  ludhiana: [30.9010, 75.8573],
  patna: [25.5941, 85.1376],
  gaya: [24.7964, 85.0075],
  muzaffarpur: [26.1209, 85.3647],
  hyderabad: [17.3850, 78.4867],
  visakhapatnam: [17.6868, 83.2185],
  vijayawada: [16.5062, 80.6480],
  warangal: [17.9689, 79.5941],
  nizamabad: [18.6725, 78.0941],
  bhopal: [23.2599, 77.4126],
  indore: [22.7196, 75.8577],
  jabalpur: [23.1815, 79.9864],
  bhubaneswar: [20.2961, 85.8245],
  cuttack: [20.4625, 85.8830],
  rourkela: [22.2496, 84.8649],
  gurgaon: [28.4595, 77.0266],
  faridabad: [28.4089, 77.3178],
  panipat: [29.3909, 76.9635],
  ranchi: [23.3441, 85.3096],
  jamshedpur: [22.8046, 86.2029],
  dhanbad: [23.7957, 86.4304],
  guwahati: [26.1445, 91.7362],
  silchar: [24.8333, 92.7789],
  dibrugarh: [27.4728, 94.9120],
  raipur: [21.2514, 81.6296],
  bhilai: [21.1938, 81.3509],
  bilaspur: [22.0735, 82.1394],
  dehradun: [30.3165, 78.0322],
  haridwar: [29.9457, 78.1642],
  nainital: [29.3919, 79.4542],
};

const CustomMarkerWithLabel = ({ position, city, state }) => {
  const map = useMap();
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    const marker = L.marker(position, { icon }).addTo(map);

    const label = L.divIcon({
      className: 'custom-label',
      html: `
        <div style="
          background-color: white;
          padding: 8px 12px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          white-space: nowrap;
          width: fit-content;
          max-width: 200px;
          margin: 0 auto;
          cursor: pointer;
        ">
          View The Law Violation Data
        </div>
      `,
      iconSize: [100, 20],
      iconAnchor: [0, 0],
    });

    const labelMarker = L.marker(position, { icon: label, zIndexOffset: 1000 }).addTo(map);

    labelMarker.on('click', () => {
      navigate("/tracker2"); // Navigate to /tracker2 on click
    });

    return () => {
      map.removeLayer(marker);
      map.removeLayer(labelMarker);
    };
  }, [map, position, city, state, navigate]); // Add navigate to dependencies

  return null;
};

const Map = ({ city, state }) => {
  // Get coordinates based on selected state or city
  const position = cityCoordinates[city] || stateCoordinates[state] || [20.5937, 78.9629]; // Default to India's coordinates

  return (
    <MapContainer
      key={`${city}-${state}`} // Force re-render when city or state changes
      center={position}
      zoom={13}
      style={{ height: '60%', width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CustomMarkerWithLabel position={position} city={city} state={state} />
    </MapContainer>
  );
};

export default Map;
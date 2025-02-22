import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom Marker with Label
const CustomMarkerWithLabel = ({ position, city, state }) => {
  const map = useMap();

  useEffect(() => {
    // Create a custom icon for the marker (optional)
    const icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Default Leaflet marker icon
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    // Create a marker with a custom label
    const marker = L.marker(position, { icon }).addTo(map);

    // Create a custom label with inline styles
    const label = L.divIcon({
      className: 'custom-label', // CSS class for styling (optional, can be removed)
      html: `
        <div style="
          background-color: white;
          padding: 4px 8px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          white-space: nowrap;
        ">
          View The Law Violation Data
        </div>
      `,
      iconSize: [100, 20], // Adjust size of the label
      iconAnchor: [0, 0], // Position the label relative to the marker
    });

    // Add the label to the map at the same position as the marker
    L.marker(position, { icon: label, zIndexOffset: 1000 }).addTo(map);

    // Cleanup on unmount
    return () => {
      map.removeLayer(marker);
      map.removeLayer(label);
    };
  }, [map, position]);

  return null;
};

const Map = ({ city, state }) => {
  const position = [22.5726, 88.3639]; 

  return (
    <MapContainer center={position} zoom={13} style={{ height: '60%', width: '60%',display:'flex', justifyContent:'center'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CustomMarkerWithLabel position={position} city={city} state={state} />
    </MapContainer>
  );
};

export default Map;
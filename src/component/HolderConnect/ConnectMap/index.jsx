import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [51.505, -0.09];
  return (
    <div className="w-[80%] h-[450px] border-2 mx-auto">
       <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width:" 100%",
    height:" 60vh"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <br />ما اینجا هستیم
        </Popup>
      </Marker>
    </MapContainer>
    </div>
   
  );
};

export default Map;
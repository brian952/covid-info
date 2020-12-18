import React from "react";
import "./Map.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function Map({ center, zoom }) {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} maxZoom={16}>
        {console.log("show >>>>>>>", center)}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default Map;

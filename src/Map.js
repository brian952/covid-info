import React from "react";
import "./Map.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { showDataOnMap } from "./util";
function Map({ countries, center, zoom, casesType }) {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} maxZoom={16}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;

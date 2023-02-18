import React from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";


const customMarker = new L.icon({
    iconUrl: require("./assets/download.png"),
    iconSize: [30, 25],
    // iconAnchor: [10, 41],
    // popupAnchor: [2, -40]
});

const myData = JSON.parse(
  '[{"id":3,"stopId":"$300","coordinates":[[40.7432855,-73.9932197]]},{"id":4,"stopId":"$280","coordinates":[[40.741969,-73.991967]]}]'
);

export default function OpenStreetMap() {

    return (
      <MapContainer center={[40.7432855, -73.9932197]} zoom={16}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {myData.map((stop) => (
          <Marker
            key={stop.id}
            position={stop.coordinates[0]}
            icon={customMarker}
          >
            <Tooltip direction="top" offset={[0, -5]} opacity={1} permanent>
              {stop.stopId}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    );
}
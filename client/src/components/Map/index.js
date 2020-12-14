import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapClickHandler from "./MapClickHandler";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = (props) => {
  return (
    <div className={props.className}>
      <MapContainer
        center={props.center}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />

        <MapClickHandler data={props.data} openForm={props.openForm} />
      </MapContainer>
    </div>
  );
};

export default Map;

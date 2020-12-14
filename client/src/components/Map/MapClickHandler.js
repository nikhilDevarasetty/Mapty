import { Marker, Popup, useMapEvents } from "react-leaflet";

const MapClickHandler = (props) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      props.openForm(lat, lng);
    },
  });

  return props.data.map((point) => {
    return (
      <Marker key={point.title} position={point.coords}>
        <Popup>
          {/* A pretty CSS3 popup. <br /> Easily customizable. */ point.title}
        </Popup>
      </Marker>
    );
  });
};

export default MapClickHandler;

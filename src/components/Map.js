import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import EventLocationInfo from "./EventLocationInfo";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="h-screen w-screen relative ">
      <GoogleMapReact
        bootstrapURLkeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {eventData.map((event) => {
          return (
            <LocationMarker
              key={Math.random()}
              lat={event.geometries[0].coordinates[1]}
              lng={event.geometries[0].coordinates[0]}
              onClick={() => {
                setLocationInfo({ id: event.id, title: event.title });
                setShowInfo(true);
              }}
            />
          );
        })}
      </GoogleMapReact>
      {showInfo && (
        <EventLocationInfo info={locationInfo} setShowInfo={setShowInfo} />
      )}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;

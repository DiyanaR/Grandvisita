import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const MapPage = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };

  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(defaultCenter);
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const location = place.geometry.location;
      setPosition({ lat: location.lat(), lng: location.lng() });
      map.panTo({ lat: location.lat(), lng: location.lng() });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
      libraries={["places"]}
    >
      <div style={{ marginBottom: "10px" }}>
        <Autocomplete
          onLoad={(autocomplete) => setAutocomplete(autocomplete)}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Search for places..."
            style={{
              boxSizing: "border-box",
              border: "1px solid transparent",
              width: "240px",
              height: "32px",
              padding: "0 12px",
              borderRadius: "3px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              fontSize: "14px",
              outline: "none",
              textOverflow: "ellipses",
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
            }}
          />
        </Autocomplete>
      </div>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={position}
        onLoad={onLoad}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapPage;

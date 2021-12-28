import React from "react";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";

const center = { lat: 42.331429, lng: -83.045753 };

const containerStyle = {
  width: "500px",
  height: "500px",
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading map";
  if (!isLoaded) return "Loading map...";

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={{ disableDefaultUI: true }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);

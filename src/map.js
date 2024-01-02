import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ center, zoom, listings }) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {listings.map((listing) => (
          <AnyReactComponent
            key={listing.id}
            lat={listing.latitude}
            lng={listing.longitude}
            text={`$${listing.price}`}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

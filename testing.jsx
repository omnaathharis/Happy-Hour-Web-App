import React, { useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { RestaurantsContext } from "../context/RestaurantsContext";
import "../css/marker.css"

const Map = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  const [viewport, setViewport] = useState({
    latitude: 49.2827,
    longitude: -123.1207,
    zoom: 11,
    width: "85.5vw",
    height: "80vh",
  });

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div className="center container">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoidGFoZXJmYSIsImEiOiJja2U3cWE4N2MxcDRoMnRwODM3dHBjcDZ0In0.GsC7vnm_WY9UNFGne0fxWA"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {restaurants.map(restaurant => (
          <Marker
            key={restaurant.id}
            latitude={restaurant.latitude}
            longitude={restaurant.longitude}
          >
            <button
              className="marker marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedRestaurant(restaurant);
              }}>
              <img className="marker-img" src="../map_marker.png" alt="Marker" />
            </button>
          </Marker>
        ))}
        {selectedRestaurant ? (
          <Popup
            latitude={selectedRestaurant.latitude}
            longitude={selectedRestaurant.longitude}
            onClose={() => {
              setSelectedRestaurant(null);
            }}
          >
            <div>
              <h5>{selectedRestaurant.name}</h5>
              <p>{selectedRestaurant.address}</p>
              <p>{selectedRestaurant.start_at} - {selectedRestaurant.end_at}</p>
              <p>Price Rating: {"$".repeat(selectedRestaurant.price_rating)}</p>
              <button className="btn btn-info">Get Directions</button> <a
                target="_blank"
                rel="noopener noreferrer"
                href={selectedRestaurant.website_url}
              >
                <button className="btn btn-info">Website</button>
              </a>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default Map;

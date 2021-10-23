import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import * as jesusData from "./data/jesus-life.json";

export default function App() {

  let [viewport, setViewport] = useState({
    latitude: 31.7030,
    longitude: 35.1955,
    zoom: 1,
    width: window.innerWidth,
    height: window.innerHeight
  })

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={"pk.eyJ1Ijoic2NydXo2OTM4IiwiYSI6ImNrdjN5d3AwcDNhMTkyd3A2dWtodnR5dnYifQ.W_HLl84L1OXwBiqbxnFvhg"}
      mapStyle="mapbox://styles/scruz6938/ckv417krm0ih114pk04vfamus"
      onViewportChange={(newView) => {
        setViewport(newView);
      }}
    >

        //dummy markers

      {jesusData.features.map((jesusEvent) => (
        <Marker key={jesusEvent.name} latitude={jesusEvent.geometry.coordinates[0]} longitude={jesusEvent.geometry.coordinates[1]}>
          <div>{jesusEvent.name}</div>
          <button>
            <img src="/public/place.png" alt = "Location Icon"></img>
          </button>
          
        </Marker>
      ))}

    </ReactMapGL>
  );
}

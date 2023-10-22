"use client";

import React from "react";
import { useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import { ThreeCircles } from "react-loader-spinner";

interface MapProps {}

const Map: React.FC<MapProps> = ({}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const center = useMemo(() => ({ lat: 8.980466, lng: 7.183379 }), []);

  if (!isLoaded)
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  if (loadError) return <div>Error loading maps</div>;

  return (
    <div className="mt-6 h-[70vh] overflow-hidden rounded-sm border bg-zinc-100">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={15}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;

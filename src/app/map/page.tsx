import Map from "@/components/Map";
import React from "react";

const Page = ({}) => {
  return (
    <section className="mapPage mb-28 p-2 pt-10 md:p-6 md:pt-4">
      <h1 className="text-2xl font-bold md:text-3xl">Map</h1>

      <div>
        <Map />
      </div>
    </section>
  );
};

export default Page;

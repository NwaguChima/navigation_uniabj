import Map from "@/components/Map";
import React from "react";

const Page = ({}) => {
  return (
    <section className="p-2 pt-12 md:p-6 md:pt-12">
      <h1 className="text-2xl font-bold md:text-3xl">Map</h1>

      <div>
        <Map />
      </div>
    </section>
  );
};

export default Page;

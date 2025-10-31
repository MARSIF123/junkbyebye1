import React from "react";
import Hero from "../Hero/Hero";
import Highlights from "../Highlights/Highlights";

const Home = () => {
  return (
    <div className="overflow-hidden padding-top-12vh">
      <Hero />
      <Highlights />
    </div>
  );
};

export default Home;

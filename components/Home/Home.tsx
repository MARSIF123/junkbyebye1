import React from "react";
import Hero from "../Hero/Hero";
import Highlights from "../Highlights/Highlights";
import Process from "../Process/Process";

const Home = () => {
  return (
    <div className="overflow-hidden padding-top-12vh">
      <Hero />
      <Highlights />
      <Process />
    </div>
  );
};

export default Home;

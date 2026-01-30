import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

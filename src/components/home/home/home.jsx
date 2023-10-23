import Brands from "@/common/brands";
import React, { useEffect } from "react";
import About from "./about";
import Appointment from "./appointment";
import Blog from "./blog";
import Counter from "../../../common/counter";
import Cta_Area from "./cta-area";
import Feedback from "./feedback";
import Gallery from "./gallery";
import MessageDilog from "./message";
import HeroBanner from "./hero-banner";
import ServiceArea from "./service-area";
import Specialists from "../../../common/specialists";
import Team from "../../../common/team";

const HomeOne = () => {
  return (
    <>
      <MessageDilog />
      <HeroBanner />
      <Gallery />
      <About />
      <Counter />
      <ServiceArea />
      <Specialists />
      <Team />
      {/* <Appointment /> */}
      {/* <Feedback /> */}
      {/* <Brands /> */}
      {/* <Cta_Area /> */}
      {/* <Blog /> */}
    </>
  );
};

export default HomeOne;

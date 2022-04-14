import React from "react";
import About from "../home/about/About";
import Blog from "../home/blog/Blog";
import Branding from "../home/Branding";
import Home from "../home/homes/Home";
import Services from "../home/servicess/Services";
import Skill from "../home/Skill";
import Work from "../home/work/Work";
import Wrapper from "../home/Wrapper";
import WrapperOne from "../home/WrapperOne";

const HomePages = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Services />
      <Wrapper />
      <Skill />
      <WrapperOne />
      <Work />
      <Blog />
    </>
  );
};

export default HomePages;

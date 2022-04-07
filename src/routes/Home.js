import React from "react";
import { Helmet } from "react-helmet";
import {
  Hero,
  About,
  Order,
  Random,
  Geography,
  Download,
  Blog,
  Providers,
  Services,
} from "../components";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>EasyPanda</title>
      </Helmet>

      <Hero />
      <Services />
      <About />
      <Order />
      <Random />
      <Geography />
      <Download />
      <Blog />
      <Providers />
    </>
  );
};

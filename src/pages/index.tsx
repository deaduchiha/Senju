import useTitle from "@/hooks/pageTitle";

import Landing from "@/templates/home/landing";

import React from "react";
// components

const Home = () => {
  useTitle("Senju | Free fake anime API");
  return <Landing />;
};

export default Home;

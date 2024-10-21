import React from "react";
import HeroSection from "./HeroSection";
import MyService from "./MyService";
import BoxItem from "./BoxItem";
import Category from "./Category";
import Slider from "./Slider";
import Introduction from "./Introduction";
import Article from "../common/Article/Article";
import Suggest from "./Suggest";

const index = () => {
  return (
    <div>
      <HeroSection />
      <MyService />
      <BoxItem />
      <Category />
      <Slider />
      <Introduction />
      <Article />
      <Suggest />
    </div>
  );
};

export default index;

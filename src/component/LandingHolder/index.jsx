import React from "react";
import HeroSection from "./HeroSection";
import MiniSlider from "./MiniSlider";
import MyService from "./MyService";
import LastCourses from "./LastCourses";
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
      <MiniSlider />
      <MyService />

      <LastCourses />
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

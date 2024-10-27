import React from "react";

import CardCours from "../../component/Cours/CardCours";
import Filter from "../../component/Cours/FilterCours";

import BarCourses from "../../component/Cours/BarCourse";
import SliderCourses from "../../component/Cours/SliderCours";

const index = () => {
  return (
    <div>
      <BarCourses />
      <SliderCourses />

      <div></div>
    </div>
  );
};

export default index;

import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div className="flex  justify-center flex-col  h-[680px] mt-6 ml-6">
      <div className="w-[80%] h-[520px] mr-[190px]">
        <img src="./Error.png" />
      </div>
      <NavLink to={"/"}>
        <button class="btn btn-info text-white m-20 mr-[860px] mt-48">
          بازگشت به خانه
        </button>
      </NavLink>
    </div>
  );
};

export default index;

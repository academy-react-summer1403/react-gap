import React from "react";
import { Fragment } from "react";
import { LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <Fragment>
      <div
        className="flex justify-between
     h-20 bg-gradient-to-r from-[#A4F6DE] to-[#FFFFFF]  "
      >
        <div className=" flex  gap-2  w-60 h-10 m-6">
          <div className="w-[50px] h-[50px]">
            <img src="./h11.png" alt="" />
          </div>

          <h1 className="text-[#22445D;] font-inter text-2xl m-3 font-medium">
            آکادمی اچ وان
          </h1>
        </div>

        <div className="flex gap-6 justify-center h-[70px] m-6 mb-3">
          <button className="w-[120px] h-[47px] bg-[#6D676757;] text-lg rounded-lg text-[#158B68;] font-inter relative -left-7">
            {" "}
            صفحه اصلی{" "}
          </button>

          <div className="flex gap-6 justify-center relative top-2 w-[300px] ">
            <div className="text-[#22445D;] text-xl"> دوره ها </div>
            <div className="text-[#22445D;] text-xl"> مقالات </div>
            <div className="text-[#22445D;] text-xl"> درباره ما </div>
          </div>
        </div>

        <div>
          <img src="./" alt="" />
        </div>

        <div className="flex m-6">
          <div className="w-[30px] h-[30px] ml-[40px] mt-4">
            <LuSearch className="w-[100%] h-[100%]" />
          </div>
          <button className="w-[145px] h-[57px] bg-[#00DF9D;] text-xl rounded-lg text-[#22445D;] font-inter relative left-6">
            ورود/ ثبت نام
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

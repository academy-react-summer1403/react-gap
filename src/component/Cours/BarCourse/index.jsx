import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { GoSearch } from "react-icons/go";

const index = () => {
  return (
    <div className="flex  justify-center flex-wrap ">
      <h1 className="relative mt-[100px] md:text-5xl text-black sm:text-2xl">
        لیست اخبار و مقالات
      </h1>

      <div className=" sm:w-11/12 h-36  bg-[#FBF6F6] rounded-3xl relative  mt-[60px] shadow-xl ">
      <div className="border-2 w-60 m-10">
         <select className="select select-info w-[200px] max-w-xs">
          <option disabled selected>
            دسته بندی
          </option>
          <option>فرانت اند</option>
          <option>بک اند</option>
          <option>وردپرس</option>
        </select>
      </div>
       
      </div>
    </div>
  );
};

export default index;

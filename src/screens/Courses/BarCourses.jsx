
import React from 'react'
import { SlArrowDown } from "react-icons/sl";

const BarCourses = () => {
  return (
    <div className="flex  justify-center flex-wrap ">
    <h1 className=" relative mt-[130px] text-4xl "> لیست دوره ها  </h1>

    <div className="h-[130px] w-[90%] bg-[#FBF6F6] rounded-3xl relative -mr-[0px] mt-[60px] shadow-xl">

      <div className="relative mr-[270px] mt-[30px]">
      <button className="border border-[#158B68]  h-[70px] w-[220px] rounded-full bg-[#ffff] ">
        <div className="mr-[170px] mt-[10px]">
        <SlArrowDown className=" "/>
        </div>

      <p className=" text-[#158B68] -mt-[40px]"> مرتب سازی</p>
      </button>
      </div>
      
      <div className="relative mr-[30px] -mt-[65px]">
      <button className="border border-[#158B68] h-[70px] w-[220px] rounded-full bg-[#FFFFFF]">
        {" "}
        <SlArrowDown className=" mr-[170px] mt-[10px]"/>
        <p className=" text-[#158B68] -mt-[38px]">   دسته بندی</p>
      
      </button>
      </div>


        <div className="relative mr-[860px] -mt-[65px] ">
        <input type='text' 
          placeholder='جستجو...' 
          className="border-2 h-[70px] w-[440px] border-color:[#158B68] bg-[#ffff] 
          rounded-full 

              placeholder:text-lg 

            placeholder:relative
            placeholder:right-10
            placeholder:text-black" />
        </div>
      </div>
    </div>
    )
  }

export default BarCourses


import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { BsSearchHeart } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

const index = () => {
  return (
    <div className="flex  justify-center flex-wrap ">
      <h1 className=" relative mt-[100px] md:text-5xl text-black sm:text-2xl animate-bounce "> لیست اخبار و مقالات </h1>

      <div className=" sm:w-11/12 h-36  bg-[#FBF6F6] rounded-3xl relative -mr-[0px] mt-[60px] shadow-xl ">

        <div className="relative mr-[280px] mt-[30px]">
        <div className="dropdown dropdown-bottom ">
        <div tabIndex={0} role="button" className="btn m-1 border-[#158B68] h-20 w-56 rounded-full bg-[#ffff] hover:bg-[#5BE1B9] "> مرتب سازی </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
          <li className="hover:bg-[#5BE1B9] hover:animate-bounce"><a> مرتب سازی </a></li>
          <li className="hover:bg-[#5BE1B9] hover:animate-bounce"><a> قیمت </a></li>
          <li className="hover:bg-[#5BE1B9] hover:animate-bounce"><a> محبوب ترین ها </a></li>
          <li className="hover:bg-[#5BE1B9] hover:animate-bounce"><a> بروز ترین ها </a></li>
        </ul>
        </div>
        {/* <button className="border border-[#158B68]  h-20 w-56 rounded-full bg-[#ffff] sm:w-1/6 ">
          <div className="mr-[170px] mt-[10px] ">
          <SlArrowDown className=" "/>
          </div>
       
        <p className=" text-[#158B68] -mt-[40px]"> مرتب سازی</p>
        </button> */}
        </div>


        
        <div className=" mr-10 -mt-20 ">
        <div className="dropdown dropdown-bottom ">
        <div tabIndex={0} role="button" className="btn m-1 border-[#158B68]  h-20 w-56 rounded-full bg-[#ffff] hover:bg-[#5BE1B9] ">  دسته بندی </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow ">
          <li className="hover:bg-[#5BE1B9] hover:animate-bounce"><a> مرتب سازی </a></li>
          <li className="hover:bg-[#5BE1B9] hover:animate-bounce" ><a> فرانت اند</a></li>
          <li className="hover:bg-[#5BE1B9] hover:animate-bounce"><a>   بک اند </a></li>
          <li className="hover:bg-[#5BE1B9] hover:animate-bounce"><a>   next-js </a></li>
        </ul>
        </div>
        {/* <button className="border border-[#158B68] h-20 w-56 rounded-full bg-[#FFFFFF] sm:w-1/6">
          {" "}
          <SlArrowDown className=" mr-[170px] mt-[10px] sm:w-1/6"/>
          <p className=" text-[#158B68] -mt-[38px]">دسته بندی</p>
        
        </button> */}
        </div>

        <div className="relative mr-[980px] -mt-[90px] hidden md:block ">
        <input type='text' 
          placeholder='جستجو...' 
           className=" border-2 border-[#158B68]  h-20 w-[500px] border-color:[#158B68] bg-[#ffff] 
           rounded-full 
             placeholder:text-2xl 
             placeholder:relative 
             placeholder:center
             placeholder:text-[#807A7A]
             placeholder:uppercase"
             />
             <div className=" border-2 w-24  bg-[#A4F6DE] h-20 relative -mt-[80px] mr-[403px]  rounded-l-full">
             {/* <BsSearchHeart /> */}
             <GoSearch className=" w-10 h-10 relative mt-4 mr-5" />
             </div>
        </div>


      </div>
    </div>
  );
};

export default index;

import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../common/NavBarHero/NavBar";
import { HiArrowLeft } from "react-icons/hi2";

const index = () => {
  return (
    <div className="flex justify-start h-[700px] bg-gradient-to-r from-[#A4F6DE] to-[#FFFFFF] dark:bg-slate-800 ">
      <div className="  w-[800px] h-[400px] relative top-32 left-1 text-center lg:text-right ">
        <h1 className="font-inter xl:text-6xl text-[#21394B] mx-16 md:text-4xl text-4xl sm:text-4xl dark:text-white">
          آموزشگاه اچ وان{" "}
        </h1>
        <h3 className="m-14 text-[#22445D;] text-xl font-normal dark:text-white">
          لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
          نشان میدهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه
          دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند
          فوتوشاپ استفاده می کنند.
        </h3>

        <div>
          <NavLink to={"/courses"}>
            
              
        <button className="btn btn-outline btn-success text-xl font-inter w-44 text-black mx-16  mt-16 dark:from-[#ffff]">
        بزن بریم 
        <HiArrowLeft className="mr-36 "/>
        </button>
               
              
         
          </NavLink>
          
        </div>
      </div>

      <div className=" hidden w-[37650px] h-[500px] m-16 lg:block ">
        <img src="./newherosection.png" alt="Img" />
      </div>

      <NavBar />
    </div>
  );
};

export default index;

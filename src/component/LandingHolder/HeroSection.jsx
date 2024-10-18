import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../common/NavBarHero/NavBar";

const HeroSection = () => {
  return (
    <div className="flex justify-start h-[700px] bg-gradient-to-r from-[#A4F6DE] to-[#FFFFFF] dark:from-[#22445D] dark:to-[#FFFFFF] ">
      <div className="  w-[800px] h-[400px] relative top-32 left-1 text-center lg:text-right ">
        <h1 className="font-inter xl:text-6xl text-[#21394B] mx-16 md:text-4xl text-4xl sm:text-4xl">
          آموزشگاه اچ وان{" "}
        </h1>
        <h3 className="m-14 text-[#22445D;] text-xl font-normal">
          لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
          نشان میدهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه
          دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند
          فوتوشاپ استفاده می کنند.
        </h3>

        <div>
          <NavLink to={"/courses"}>
             <button className="w-[210px] h-[75px] rounded-[50px] text-[#22445D;] text-2xl font-inter bg-[#12926C;] text-[#ffffff] mx-16 animate-pulse ">
          {" "}
          شروع یادگیری{" "}
        </button>
          </NavLink>
         
        </div>
        
      </div>

      <div className=" hidden w-[650px] h-[500px] m-16 lg:block">
        <img src="./ImgHero.png" alt="Img" />
      </div>

      <NavBar/>
    </div>
  );
};

export default HeroSection;

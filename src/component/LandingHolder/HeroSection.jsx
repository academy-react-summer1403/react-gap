import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-start  w-screen h-[700px] bg-gradient-to-r from-[#A4F6DE] to-[#FFFFFF]">
      <div className="  w-[800px] h-[400px] relative top-32 left-1 ">
        <h1 className=" font-inter text-6xl text-[#21394B] mx-16 ;">
          آموزشگاه اچ وان{" "}
        </h1>
        <h3 className="m-14 text-[#22445D;] text-xl font-normal">
          لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
          نشان میدهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه
          دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند
          فوتوشاپ استفاده می کنند.
        </h3>
        <button className="w-[210px] h-[75px] rounded-[50px] text-[#22445D;] text-2xl font-inter bg-[#12926C;] text-[#ffffff] mx-16 ">
          {" "}
          شروع یادگیری{" "}
        </button>
      </div>

      <div className=" w-[650px] h-[500px] m-16">
        <img src="./ImgHero.png" alt="Img" />
      </div>
    </div>
  );
};

export default HeroSection;

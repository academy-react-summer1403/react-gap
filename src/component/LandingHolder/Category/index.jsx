import React from "react";

const index = () => {
  return (
    <div className=" h-[230px] mt-[85px]">
      <div className="border-2 w-[70%] h-[170px] bg-[#5751E1] relative top-6 rounded-2xl mx-auto max-sm:w-[95%]">
        <div className=" w-[200px] h-[410px] mr-[1000px] mt-  lg:block">
          <img src="./line.png" className="max-sm:mr-44 max-sm:hidden"/>
        </div>

        <div className=" w-[250px] h-[410px] mr-20 -mt-[325px] max-sm:relative max-sm:left-24">
          <img src="./shape.png" />
        </div>

        <div className=" w-[200px] h-[410px] mr-[80px] -mt-[520px] max-sm:w-[150px]  max-sm:relative  max-sm:top-12  max-sm:left-24">
          <img src="./usershape.png" />
        </div>

        <div className="relative bottom-80 mr-80 ">
          <h1 className="text-xl text-white max-sm:relative  max-sm:left-28 max-sm:bottom-4 max-sm:w-32 max-sm:text-sm">
            ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!
          </h1>
        </div>
        <button className="btn btn-primary text-black bg-[#FFC224]
         hover:bg-[#FFC224] relative bottom-[305px] right-[70%] max-sm:-mr-56 max-sm:mt-9 max-sm:w-40
        ">
          مشاهده پست های اینستاگرام{" "}
        </button>
      
      </div>
    </div>
  );
};

export default index;

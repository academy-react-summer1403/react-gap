import React from "react";

const index = () => {
  return (
    <div className=" h-[230px] mt-[85px]">
      <div className="border-2 w-[70%] h-[170px] bg-[#5751E1] relative top-6 rounded-2xl mx-auto ">
        <div className=" w-[200px] h-[410px] mr-[1000px] mt-  lg:block">
          <img src="./line.png" className=""/>
        </div>

        <div className=" w-[250px] h-[410px] mr-20 -mt-[325px] ">
          <img src="./shape.png" />
        </div>

        <div className=" w-[200px] h-[410px] mr-[80px] -mt-[520px]">
          <img src="./usershape.png" />
        </div>

        <div className="relative bottom-80 mr-80 ">
          <h1 className="text-xl text-white">
            ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!
          </h1>
        </div>
        <button className="btn btn-primary text-black bg-[#FFC224]
         hover:bg-[#FFC224] relative bottom-[305px] right-[70%]
        ">
          مشاهده پست های اینستاگرام{" "}
        </button>
      
      </div>
    </div>
  );
};

export default index;

import React from "react";

const BoxItem = () => {
  return (
   <div className="bg-[#A4F6DE;] rounded-xl w-[90%] h-[350px] mx-auto">

    <div className="flex justify-center gap-[150px] w-[90%] h-[250px] mx-auto relative top-12">
        <div className="flex justify-center flex-wrap gap-3 w-[150px] h-[220px]">
            <div className="w-[100px] h-[110px]">
                <img className="w-[100%] h-[100%]" src="./pic2.png" alt="" />
            </div>

            <div className="w-[150px] h-[100px]">
            <h1 className="text-[#158B68;] text-2xl text-center "> اساتید حرفه ای </h1>
            <h2 className="  text-[#158B68;] text-4xl text-center leading-[50px]"> 52 </h2>
            </div>

        </div>

        <div className="flex justify-center flex-wrap gap-3 w-[150px] h-[220px]">
            <div className="w-[100px] h-[110px]">
                <img className="w-[100%] h-[100%]" src="./pic3.png" alt="" />
            </div>

            <div className="w-[150px] h-[100px]">
            <h1 className="text-[#158B68;] text-2xl text-center ">   دانشجو </h1>
            <h2 className="  text-[#158B68;] text-4xl text-center leading-[50px]"> 81 </h2>
            </div>

        </div>

        <div className="flex justify-center flex-wrap gap-3 w-[150px] h-[220px]">
            <div className="w-[100px] h-[110px]">
                <img className="w-[100%] h-[100%]" src="./pic4.png" alt="" />
            </div>

            <div className="w-[150px] h-[100px]">
            <h1 className="text-[#158B68;] text-2xl text-center ">  دوره آموزشی </h1>
            <h2 className=" text-[#158B68;] text-4xl text-center leading-[50px]"> 182 </h2>
            </div>

        </div>

        <div className="flex justify-center flex-wrap gap-3 w-[150px] h-[220px]">
            <div className="w-[100px] h-[110px]">
                <img className="w-[100%] h-[100%]" src="./pic5.png" alt="" />
            </div>

            <div className="w-[150px] h-[100px]">
            <h1 className="text-[#158B68;] text-2xl text-center ">  مقاله آموزشی </h1>
            <h2 className=" text-[#158B68;] text-4xl text-center leading-[50px]"> 28 </h2>
            </div>

        </div>


    </div>


   </div>
  );
};

export default BoxItem;

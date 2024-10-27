import React from "react";

const index = () => {
  return (
    <div className="bg-[#bcd2ec] rounded-xl w-[90%] mx-auto mt-20 ">
      <div className="flex flex-wrap justify-center gap-10 w-[90%] py-10 mx-auto ">

        
        <div  className="flex flex-col items-center w-full sm:w-[40%] xl:w-[20%] h-[220px]  hover:scale-75 duration-75">
          <div className="w-[100px] h-[110px]">
            <img className="w-[100%] h-[100%]" src="./picture1.png" alt="" />
          </div>

          <div className="w-[150px] h-[100px]">
            <h1 className="text-[#254689] text-2xl text-center ">
              {" "}
              اساتید حرفه ای{" "}
            </h1>
            <h2 className="  text-[#254689] text-4xl text-center leading-[50px]">
              {" "}
              52{" "}
            </h2>
          </div>
        </div>

        <div className=" flex flex-col items-center w-full sm:w-[40%] xl:w-[20%] h-[220px]  hover:scale-75 duration-75">
          <div className="w-[100px] h-[110px]">
            <img className="w-[100%] h-[100%]" src="./picture5.png" alt="" />
          </div>

          <div className="w-[150px] h-[100px]">
            <h1 className="text-[#254689;] text-2xl text-center ">
              {" "}
               دانشجو {" "}
            </h1>
            <h2 className="  text-[#254689;] text-4xl text-center leading-[50px]">
              {" "}
              81{" "}
            </h2>
          </div>
        </div>

        <div className=" flex flex-col items-center w-full sm:w-[40%] xl:w-[20%] h-[220px]  hover:scale-75 duration-75 ">
          <div className="w-[100px] h-[110px]">
            <img className="w-[100%] h-[100%]" src="./picture2.png" alt="" />
          </div>

          <div className="w-[150px] h-[100px]">
            <h1 className="text-[#254689] text-2xl text-center">
              {" "}
                دوره آموزشی{" "}
            </h1>
            <h2 className="  text-[#254689] text-4xl text-center leading-[50px]">
              {" "}
              182{" "}
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center w-full sm:w-[40%] xl:w-[20%] h-[220px] hover:scale-75 duration-75 ">
          <div className="w-[100px] h-[110px]">
            <img className="w-[100%] h-[100%]" src="./picture3.png" alt="" />
          </div>

          <div className="w-[150px] h-[100px]">
            <h1 className="text-[#254689] text-2xl text-center ">
              {" "}
                مقاله آموزشی{" "}
            </h1>
            <h2 className="  text-[#254689] text-4xl text-center leading-[50px]">
              {" "}
              28{" "}
            </h2>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default index;

import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div className=" flex justify-start h-[600px] dark:bg-[#22445D;] 
      max-sm:w-full max-sm:max-h-screen  max-sm:bottom-0  max-sm:p-4">
      <div className="w-44 h-44 relative right-[40%] top-[60%] max-lg:hidden">
        <img src="./flash3.png" />
      </div>
      <div className="  w-[800px] h-[400px] relative top-32 left-1 text-center lg:text-right ">
        <br />
        <h1 className="text-5xl text-gray-700 font-medium dark:text-white max-sm:text-2xl ">داستان برنامه‌نویس </h1>
        <h1 className="text-5xl text-gray-700 font-medium dark:text-white max-sm:text-2xl">شدنت از اینجا شروع میشه!</h1>
        <h1 className="text-black text-4xl mt-10  font-thin dark:text-white max-sm:text-lg">
          {" "}
          هر کسی باید یاد بگیره{" "}
        </h1>
        <h1 className="text-blue-800 text-4xl font-thin dark:text-white mt-2 max-sm:text-lg">
          {" "}
          که چطور کد بزنه{" "}
        </h1>
        <p className="text-orange-600 text-4xl leading-10  font-thin mt-5 max-sm:text-lg">
          {" "}
          دوره مورد علاقه خودت شروع کن
        </p>

        <div>
          <NavLink to={"/courses"}>
            <button className="btn btn-outline btn-info text-xl font-inter w-48 h-8 text-black mx-16 mr-44 font-thin mt-16 dark:text-white
            
           max-sm:w-28  max-sm:justify-center max-sm:ml-44 max-lg:ml-56 max-sm:text-sm ">
              بزن بریم
            </button>
          </NavLink>
        </div>
      </div>

      <div className=" w-[700px] h-[700px] hidden mt-10 lg:block ml-28">
        <img src="./bg2.png" alt="Img" />
      </div>
    </div>
  );
};

export default index;

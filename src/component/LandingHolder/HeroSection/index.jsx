import React from "react";
import { NavLink } from "react-router-dom";
import { GrStatusCriticalSmall } from "react-icons/gr";
const index = () => {
  return (
    <div className="flex justify-start h-[600px] w-[100%] dark:bg-[#22445D]">
      <div className="w-44 h-44 relative right-[40%] top-[60%] ">
        <img src="./flash3.png" />
      </div>
      <div className=" w-[90%] h-[400px] relative top-32 left-1 text-right">
        <br />
        <h1 className="text-5xl text-gray-700 font-medium dark:text-white  font-family:[Dana ExtraBlack]">
          داستان برنامه‌نویس{" "}
        </h1>
        <h1 className="text-5xl text-gray-700 font-medium dark:text-white ">
          شدنت از اینجا شروع میشه!
        </h1>
        <h1 className="text-black text-4xl mt-10  font-thin dark:text-white">
          {" "}
          هر کسی باید یاد بگیره{" "}
        </h1>
        <h1 className="text-blue-800 text-4xl font-thin dark:text-white mt-2">
          {" "}
          که چطور کد بزنه{" "}
        </h1>
        <p className="text-orange-600 text-2xl leading-10  font-thin mt-5 ">
          {" "}
          دوره مورد علاقه خودت شروع کن
        </p>

        <div>
          <NavLink to={"/courses"}>
            <button
              className="btn btn-info  text-xl font-inter w-48 h-8
             text-black mx-16 mr-44 font-thin mt-16 dark:text-white 
             "
            >
              بزن بریم
            </button>
          </NavLink>
        </div>
      </div>

      <div className="w-[70%] h-[80%] mt-10 ml-28">
        <GrStatusCriticalSmall size={30} fill="orange" />
        <img src="./bg2.png" className="" alt="Img" />
        <GrStatusCriticalSmall size={30} fill="orange" />
        <GrStatusCriticalSmall size={30} fill="orange" className="mr-[60%]" />
      </div>
    </div>
  );
};

export default index;

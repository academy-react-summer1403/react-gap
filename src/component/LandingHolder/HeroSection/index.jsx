import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div className="flex justify-start h-[600px] w-[100%] dark:bg-[#22445D]">
      <div className="w-44 h-44 relative right-[40%] top-[60%] max-sm:hidden">
        <img src="./flash3.png" />
      </div>
      <div className=" w-[90%] h-[400px] relative top-32 left-1 text-right max-sm:mt-28 sm:mt-28 md:mt-28 lg:mt-28">
        <br />
        <h1 className="text-5xl text-gray-700 font-medium dark:text-white max-sm:text-center max-sm:text-3xl max-sm:mr-10
        sm:text-center sm:text-3xl sm:mr-10 md:text-center md:text-3xl md:mr-10">
          داستان برنامه‌نویس{" "}
        </h1>
        <h1 className="text-5xl text-gray-700 font-medium dark:text-white max-sm:text-center max-sm:text-3xl max-sm:mr-10
        sm:text-center sm:text-3xl sm:mr-10">
          شدنت از اینجا شروع میشه!
        </h1>
        <h1 className="text-black text-4xl mt-10  font-thin dark:text-white max-sm:text-center max-sm:text-2xl max-sm:mr-10
        sm:text-center sm:text-3xl sm:mr-10">
          {" "}
          هر کسی باید یاد بگیره{" "}
        </h1>
        <h1 className="text-blue-800 text-4xl font-thin dark:text-white mt-2 max-sm:text-center max-sm:text-2xl max-sm:mr-10
        sm:text-center sm:text-3xl sm:mr-10">
          {" "}
          که چطور کد بزنه{" "}
        </h1>
        <p className="text-orange-600 text-2xl leading-10  font-thin mt-5 max-sm:text-center max-sm:mr-10
        sm:text-center sm:text-3xl sm:mr-10">
          {" "}
          دوره مورد علاقه خودت شروع کن
        </p>

        <div>
          <NavLink to={"/courses"}>
            <button className="btn btn-info  text-xl font-inter w-48 h-8 relative right-11
             text-black mx-16 mr-44 font-thin mt-16 dark:text-white max-sm:w-[50%] 
              max-sm:relative max-sm:-right-[65px] max-sm:-top-10 ">
              بزن بریم
            </button>
          </NavLink>
        </div>
      </div>

      <div>
        <div className="w-[800px] h-[600px] max-sm:w-[500px] max-sm:h-[300px] max-sm:relative max-sm:left-60 max-sm:-ml-32 mt-10  ml-4  max-sm:-mt-1   -m-10">
        <img src="./bg2.png" className="  size-[700px]  max-sm:size-[250px] max-sm:relative max-sm:-mt-1 " alt="Img"/>
        </div>

      </div>
    </div>
  );
};

export default index;

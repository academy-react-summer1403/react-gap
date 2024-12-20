import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../common/NavBarHero/NavBar";

const index = () => {
  return (
    <div className="flex justify-start h-[600px] bg-gradient-to-r from-[#eef3f9]  to-[ rgb(238,242,248)]  dark:from-[#000000]  ">
      <div className="w-44 h-44 relative right-[700px] top-[400px]">
        <img src="./flash2.png"/>
      </div>
      <div className="  w-[800px] h-[400px] relative top-32 left-1 text-center lg:text-right">
        <p className="mr-48 text-orange-600 text-4xl leading-10  font-thin ">
          {" "}
        دوره مورد علاقه خودت شروع کن
        </p>
        <br />
        <h1 className="mr-48 text-black text-2xl  font-thin dark:text-white"> هر کسی باید یاد بگیره </h1>
        <h1 className="mr-48 text-blue-800 text-xl  font-thin dark:text-white"> که چطور کد بزنه </h1>

        <div>
          <NavLink to={"/courses"}>
            <button className="btn btn-outline btn-info text-xl font-inter w-44 text-black mx-16 mr-44 font-thin mt-16 dark:text-white">
              بزن بریم
            </button>
          </NavLink>
        </div>
      </div>

      <div className=" hidden h-[500px] mt-10 lg:block ">
        <img src="./bghero2.png" alt="Img" />
      </div>

      <NavBar />
    </div>
  );
};

export default index;

import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../common/NavBarHero/NavBar";
import { HiArrowLeft } from "react-icons/hi2";

const index = () => {
  return (
    <div className="flex justify-start h-[700px] bg-gradient-to-r from-[#f2f8f2]  to-[rgb(242,248,242)]  dark:from-[#000000]  ">
      <div className="  w-[800px] h-[400px] relative top-32 left-1 text-center lg:text-right">
       <p className="mr-20 text-green-800 "> دوره مورد علاقه خود را شروع کنید</p>
       <h1 className="mr-20 text-black text-3xl"> هر کسی باید یاد بگیره </h1>
       <h1 className="mr-20 text-green-800 text-3xl"> که چطور کد بزنه  </h1>

        <div>
          <NavLink to={"/courses"}>
            
              
        <button className="btn btn-outline btn-success text-xl font-inter w-44 text-black mx-16  mt-16 dark:from-[#ffff]">
        بزن بریم 
        <HiArrowLeft className="mr-36 "/>
        </button>
               
              
         
          </NavLink>
          
        </div>
      </div>

      <div className=" hidden w-[37650px] h-[500px] m-16 lg:block ">
        <img src="./newherosection.png" alt="Img" />
      </div>

      <NavBar />
    </div>
  );
};

export default index;

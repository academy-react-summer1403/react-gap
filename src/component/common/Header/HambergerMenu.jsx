import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoIosLink } from "react-icons/io";
import { list } from "@material-tailwind/react";
import DarkTheme from "../DarkTheme";
import SearchLanding from "../SearchLanding";
import { NavLink } from "react-router-dom";




const HambergerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50 max-sm:-mr-[400px] max-sm:mt-12 md:hidden max-md:-mr-[550px] max-md:mt-12">
      <button>
        <IoMenu
          size={35}
          className="text-5xl cursor-pointer"
          onClick={toggleMenu}
        />
        {isOpen && (
          <div className="-mt-28 absolute right-0 w-[80%] h-[100vh] bg-white shadow-lg rounded-md  dark:bg-slate-900">
            <IoMdClose
              size={35}
              className={({ isActive }) =>
                `${
                  isActive &&
                  "text-5xl cursor-pointer mr-[260px] mt-10"
                } whitespace-normal hover:text-red-600 `
              }
              onClick={toggleMenu}
            />
            <ul className="">
            <div className="border-b-2 h-16 w-[90%] mx-auto">
                <SearchLanding />
              </div>
              <li className=" mr-10 -mt-8">
                <DarkTheme/>
              </li>

              <div className="border-b-2 w-[90%] mt-12 mx-auto"></div>
              <NavLink to={"/"}>
                <li className="px-12 py-4 hover:bg-gray-100 hover:text-slate-900">
                <IoHome size={25} className="relative top-5" />
                صفحه اصلی
              </li>
              </NavLink>
              <NavLink   to={"/courses"}>
              <li className="px-12 py-3 hover:bg-gray-100 hover:text-slate-900">
                دوره های آموزشی
                <IoVideocam size={25} className="relative -top-6" />
              </li>
              </NavLink>

              <NavLink  to={"/News"}>
          <li className="px-12 hover:bg-gray-100 hover:text-slate-900">
                مقالات{" "}
                <HiOutlineNewspaper size={25} className="relative -top-4" />
              </li>
              </NavLink>
        
              <li className="px-12 hover:bg-gray-100 hover:text-slate-900">
                {" "}
                <IoIosLink size={25} className="relative top-4" />
                لینک های مفید
              </li>
            
            
            </ul>
          </div>
        )}
      </button>
    </div>
  );
};

export default HambergerMenu;

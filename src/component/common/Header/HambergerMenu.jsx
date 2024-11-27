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

const HambergerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50  max-sm:-mr-[500px] max-sm:mt-12 md:hidden max-md:-mr-[550px] max-md:mt-12 ">
      <button>
        <IoMenu
          size={35}
          className="text-5xl cursor-pointer"
          onClick={toggleMenu}
        />
        {isOpen && (
          <div className="-mt-32 absolute right-0  w-auto h-[100vh] bg-white shadow-lg rounded-md  dark:bg-slate-900">
            <IoMdClose
              size={35}
              className=" text-5xl cursor-pointer mr-48 mt-5"
              onClick={toggleMenu}
            />
            <ul className="py-2">
              <li className="px-4 py-4 hover:bg-gray-100 hover:text-slate-900">
                <IoHome size={25} className="relative top-5" />
                صفحه اصلی
              </li>
              <li className="px-4 py-4 hover:bg-gray-100 hover:text-slate-900">
                دوره های آموزشی
                <IoVideocam size={25} className="relative -top-6" />
              </li>
              <li className="px-4 py- hover:bg-gray-100 hover:text-slate-900">
                مقالات{" "}
                <HiOutlineNewspaper size={25} className="relative -top-4" />
              </li>
              <li className="px-4 py- hover:bg-gray-100 hover:text-slate-900">
                {" "}
                <IoIosLink size={25} className="relative top-4" />
                لینک های مفید
              </li>
              <div className="">
                <SearchLanding />
              </div>
              <li className="px-4">
                <DarkTheme />
              </li>
            </ul>
          </div>
        )}
      </button>
    </div>
  );
};

export default HambergerMenu;

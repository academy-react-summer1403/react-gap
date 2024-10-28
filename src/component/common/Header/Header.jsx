import React, { useState } from "react";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const handelDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Fragment>
      <div className="flex justify-between h-24 bg-gradient-to-r from-[#eef3f9]  to-[ rgb(238,242,248)] dark:from-[#000000]">
        <Link to="/" className="flex  gap-2  w-60 h-20 m-6">
          <div className=" w-[150px] h-[100px] relative bottom-5 right-9">
            <img src="./logoabi.png" className="" />
          </div>

          <h1 className="text-[#22445D;] font-inter text-[14px] m-3"></h1>
        </Link>

        <div className="flex gap-6 justify-center h-[70px] m-6 mb-3">
          <div className="flex gap-6 justify-center relative top-2 w-[400px]">




            <NavLink
              to={"/"}
              className=" text-xl font-bold text-blue-900 dark:text-white "
            >
              {" "}
              صفحه اصلی{" "}
            </NavLink>

            <NavLink
              to={"/courses"}
              className=" text-xl font-bold text-blue-900 dark:text-white"
            >
              {" "}
              دوره ها{" "}
            </NavLink>
            <NavLink
              to={"/News"}
              className="text-xl  font-bold text-blue-900 dark:text-white"
            >
              {" "}
              مقالات{" "}
            </NavLink>
            <NavLink
              to={"/Connect"}
              className="text-xl font-bold text-blue-900 dark:text-white"
            >
              {" "}
              درباره ما{" "}
            </NavLink>
          </div>
        </div>

        <div className="h-9 m-10 relative right-40 ">
          <label className="input input-bordered flex items-center gap-2 relative left-20 bottom-4 sm:flex sm:left-[250px]">
            <input
              type="text"
              className="grow"
              placeholder="هرچی می‌خوای اینجا جستجو کن"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className="w-40 h-10 relative top-8 right-10 cursor-pointer">
          <label htmlFor="DarkId" className="flex cursor-pointer gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>

        <div className="m-6 ">
          <NavLink to={"/Login"}>
            <button class="btn  ml-10 hover:text-[#5c7158]">
              {" "}
              ورود / ثبت نام
            </button>
          </NavLink>
        </div>
      </div>

      <div>


          


        </div>




    </Fragment>



  );
};
export default Header;

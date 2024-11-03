import { SlHandbag } from "react-icons/sl";
import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
const HeaderPanel = () => {
  const handelDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div>
      <div>
        <div className=" bg-white rounded-2xl w-[100%] mx-auto flex h-32 dark:bg-blue-950">
          <Link to="/" className="flex  gap-2  w-60 h-20 m-6">
            <div className=" w-[150px] h-[100px] relative bottom-5 right-9">
              <img src="./logoabi.png" className="" />
            </div>

            <h1 className="text-[#22445D;] font-inter text-[14px] m-3"></h1>
          </Link>

          <div className="w-[70%] h-[100%] flex justify-end mr-48">
            <div className="w-40 h-10 relative top-12 cursor-pointer">
              <label
                htmlFor="DarkId"
                onClick={handelDark}
                className="flex cursor-pointer gap-2"
              >
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
            <div className="w-16 h-10 mt-10">
              <SlHandbag fill="blue" size={30} />
            </div>{" "}
            <div className="m-6">
              <NavLink to={"/"}>
                <div className="avatar">
                  <div className="ring-slate-500 ring-offset-base-100 w-16 rounded-full ring ml-7 bg-slate-300 ">
                    <FaUserLarge
                      size={30}
                      fill="white"
                      className="mt-4 mr-4 bg-slate-300"
                    />
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPanel;

import React from "react";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button/Button";

const Header = () => {
  const handelDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Fragment>
      <div className=" border-2 border-red-500  flex justify-between h-24 bg-gradient-to-r from-[#eef3f9]  to-[ rgb(238,242,248)] dark:from-[#000000]">
        <Link to="/" className=" flex  gap-2  w-60 h-20 m-6">
          <div className=" w-[150px] h-[100px] relative bottom-5 right-9">
            <img src="./logoabi.png" className="" />
          </div>

          <h1 className="text-[#22445D;] font-inter text-[14px] m-3"></h1>
        </Link>

        <div className="flex gap-6 justify-center h-[70px] m-6 mb-3">
          <div className="flex gap-6 justify-center relative top-2 w-[400px]">




            <div>

                        <div className="drawer drawer-end shadow-md w-full fixed top-0 left-0">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
              </div>
              <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 ">
                <span>
                  
                </span>
              </div>
              <div className="drawer-side md:hidden cursor-pointer top-6 right-8 text-3xl">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu text-base-content min-h-full w-80 p-4 md:flex md:items-center md:pb-0 pd-12 absolute md:static bg-white md:z-auto z-[-1]">
                  {/* Sidebar content here */}
                  <li><a>صفحه اصلی</a></li>
                  <li><a>دوره ها</a></li>
                  <li><a> مقالات</a></li>
                  <li><a> درباره ما</a></li>
                  <Button>
                    Get start
                  </Button>
                </ul>
              </div>
            </div>

            </div>







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
            <NavLink to={"/News"} className="text-xl  font-bold text-blue-900 dark:text-white">
              {" "}
              مقالات{" "}
            </NavLink>
            <NavLink to={"/Connect"} className="text-xl font-bold text-blue-900 dark:text-white">
              {" "}
              درباره ما{" "}
            </NavLink>
          </div>
        </div>

        <div className="h-9 m-10 relative right-40">
          {/* <img src="./search.png" alt="" /> */}
          {/* 
    <label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">  </svg>
    </span>
    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full
    border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none
      focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
  placeholder="هرچی میخوای جستجو کن..." type="text" name="search"/>
  </label> */}

          <label className="input input-bordered flex items-center gap-2 relative left-20 bottom-4">
            <input
              type="text"
              className="grow"
              placeholder="هرچی می‌خوای اینجا جستجو کن"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
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
          <label htmlFor="DarkId" className="flex cursor-pointer gap-2">
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

        <div className="m-6">
          <NavLink to={"/Login"}>
            <button className="hover:text-[#5c7158] w-[120px] h-[47px] bg-[#dfe3de] rounded-lg text-[#22445D;] font-inter relative left-6  hover:scale-75 duration-75">
              {" "}
              ورود / ثبت نام
            </button>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;

import React from "react";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {



  const handelDark = () => {
    document.documentElement.classList.toggle('dark')
  };

  return (
    <Fragment>
      <div className="flex justify-between   h-24 bg-gradient-to-r from-[#A4F6DE] to-[#FFFFFF] dark:from-[#22445D] dark:to-[#FFFFFF] ">
        <Link to="/" className="flex  gap-2  w-60 h-20 m-6">
          <div className=" w-[50px] h-[50px]">
            <img src="./h11.png" className="" />
          </div>

          <h1 className="text-[#22445D;] font-inter text-2xl m-3">
            آکادمی اچ وان
          </h1>
        </Link>

        <div className="flex gap-6 justify-center h-[70px] m-6 mb-3">
          <div className="flex gap-6 justify-center relative top-2 w-[400px]">
            <NavLink to={"/"} className=" text-xl hover:text-[#158B68;]   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              {" "}
              صفحه اصلی{" "}
            </NavLink>
            <NavLink to={"/courses"} className=" text-xl hover:text-[#158B68;]">
              {" "}
              دوره ها{" "}
            </NavLink>
            <NavLink to={"/News"} className="text-xl hover:text-[#158B68;]">
              {" "}
              مقالات{" "}
            </NavLink>
            <NavLink className="text-xl hover:text-[#158B68;]">
              {" "}
              درباره ما{" "}
            </NavLink>
          </div>
        </div>



        <div className="h-9 m-10 relative right-48">
          <img src="./search.png" alt="" />

    <label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">  </svg>
    </span>
    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full
    border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none
      focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
  placeholder="Search for anything..." type="text" name="search"/>
  </label>

          </div>



        <div className="w-10 h-10 relative top-8 right-10 cursor-pointer" >

            <label htmlFor="DarkId" className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" id="DarkId"/>

            {/* sun icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={handelDark}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={handelDark}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          
            
          </div>

          <div className="m-6"><NavLink to={"/Login"}>
            <button className="hover:text-[#158B68;] w-[150px] h-[57px] bg-[#00DF9D;] rounded-lg text-[#22445D;] font-inter relative left-6  hover:scale-75 duration-75">
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
import React from "react";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <div className="flex justify-between   h-20 bg-gradient-to-r from-[#A4F6DE] to-[#FFFFFF]  ">
        <Link to="/" className="flex  gap-2  w-60 h-20 m-6">
          <div className=" w-[50px] h-[50px]">
            <img src="./h11.png" className="" />
          </div>

          <h1 className="text-[#22445D;] font-inter text-2xl m-3">
            آکادمی اچ وان
          </h1>
        </Link>

        <div className="flex gap-6 justify-center h-[70px] m-6 mb-3">
          <div className="flex gap-6 justify-center relative top-2 w-[400px] ">
            <NavLink to={"/"} className=" text-xl hover:text-[#158B68;]">
              {" "}
              صفحه اصلی{" "}
            </NavLink>
            <NavLink to={"/courses"} className=" text-xl hover:text-[#158B68;]">
              {" "}
              دوره ها{" "}
            </NavLink>
            <NavLink to={"/News"} className="text-xl">
              {" "}
              مقالات{" "}
            </NavLink>
            <NavLink className="text-xl hover:text-[#158B68;]"> درباره ما </NavLink>
          </div>
        </div>

        <div>
          <img src="./" alt="" />
        </div>

        <div className="m-6">
          <button className="hover:text-[#158B68;] w-[150px] h-[57px] bg-[#00DF9D;] rounded-lg text-[#22445D;]  font-inter relative left-6">
            {" "}
            ثبت نام / ورود
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

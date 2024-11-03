import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div className="w-[90%] h-[800px] bg-white mt-10 mx-auto rounded-xl">
      <div className="breadcrumbs text-sm w-[40%] mr-10 mt-6">
        <ul>
          <NavLink to={"/"}>
            <li className="ml-6">
              <a>خانه</a>
            </li>
          </NavLink>

          <NavLink to={"/News"}>
            <li className="ml-6">
              <a>مقالات</a>
            </li>
          </NavLink>
          <NavLink>
               <li className="ml-6">جزییات مقالات </li>
          </NavLink>

       
        </ul>
      </div>
    </div>
  );
};

export default index;

import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div className="flex justify-center flex-wrap">
      <div>
        <div className="breadcrumbs text-sm mt-10">
          <ul>
            <li>
              <a>مقالات</a>
            </li>

            <li>
              <a>دوره ها</a>
            </li>
            <li>خانه</li>
          </ul>
        </div>
      </div>
      <h1 className=" relative mt-[100px] md:text-5xl text-black sm:text-2xl">
        {" "}
      </h1>

      <div className="navbar bg-base-100 w-[90%]">
        <div className="flex-1"></div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>دوره ها</a>
            </li>
            <li>
              <details>
                <summary>دسته بندی</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;

import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div className="  flex justify-center flex-wrap">
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

      <div className="navbar bg-base-100 w-[90%] dark:bg-orange-500">
        <label className="input input-bordered flex items-center gap-2 mr-10">
          <input type="text" className="grow" placeholder="Search" />
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

        <div className="flex-1"></div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>دوره ها</a>
            </li>
            <li>
              <details>
                <summary>دسته بندی</summary>
                <ul className="bg-base-100 rounded-t-none p-7  dark:bg-orange-500">
                  <li>
                    <a>جدید</a>
                  </li>
                  <li>
                    <a>قدیمی</a>
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

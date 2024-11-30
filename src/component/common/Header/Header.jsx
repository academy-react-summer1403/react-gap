import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderTop from "../Header/HeaderTop";
import axios from "axios";
import { getData } from "../../../core/Storage/LocalStorage.storage";
import { FaUserLarge } from "react-icons/fa6";
import { SlHandbag } from "react-icons/sl";
const Header = () => {
  const handelDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  const [CourseList, setCourseList] = useState(null);
  const [SearchQuery, setSearchQuery] = useState("");
  const getList = async () => {
    const res = await axios.get(
      `https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0${SearchQuery}`
    );
    console.log(res.data.courseFilterDtos);
    setCourseList(res.data);
  };

  useEffect(() => {
    getList();
  }, [SearchQuery]);

  const handleSearch = (e) => {
    if (e.target.value) {
      setSearchQuery(`&Query=${e.target.value}`);
    } else {
      setSearchQuery("");
    }
  };

  return (
    <Fragment>
      <div className="border-2 border-transparent dark:bg-[#22445D]">
        <div className=" bg-white rounded-2xl w-[85%] mt-9 mx-auto flex justify-between h-32 dark:bg-blue-950 shadow-lg">
          <Link to="/" className="flex  gap-2  w-60 h-20 m-6 ">
            <div className=" w-[150px] h-[100px] relative bottom-5 right-9 ">
              <img src="./logoabi.png " />
            </div>

            <h1 className="text-[#22445D;] font-inter text-[14px] m-3"></h1>
          </Link>

          <div className=" m-10 w-[50%] -mr-14">
            <label className=" input input-bordered flex items-center w-[100%] gap-2  bottom-1 bg-slate-100 border-none font-sans">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="grow outline-none"
                placeholder="دنبال چی میگردی؟"
                onChange={handleSearch}
              />
            </label>
          </div>

          <div className="w- h-10 relative top-12 cursor-pointer -mr-16">
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

          <div className="m-6">
            {getData("login") && (
              <NavLink to="/panel">
                <div className="avatar online ">
                  <div className="w-20 ring-1 rounded-full">
                    <img src="./panel3.png" />
                  </div>
                </div>
              </NavLink>
            )}

            {!getData("login") && (
              <NavLink to={"/Login"}>
                <Button
                  className="btn font-sans ml-10 hover:text-[#5c7158] relative top-3 bg-[#5c7158] w-36"
                  variant="contained"
                >
                  ورود / ثبت نام
                </Button>
              </NavLink>
            )}

            {getData("login") && (
              <NavLink to="/Basket">
                <div className="w-16 h-10 -mt-16 -mr-14">
                  <SlHandbag fill="orange" size={30} />
                </div>{" "}
              </NavLink>
            )}
          </div>
        </div>
      </div>

      <div className="w-[75%] mx-auto h-16 bg-base-300 rounded-b-2xl flex justify-center gap-6 dark:bg-slate-900">
        <div className="w-[75%] mx-auto flex justify-center gap-6 mt-3">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive &&
                "text-gray-950 border-2 bg-slate-300 h-14 relative bottom-2 leading-9 rounded-md dark:text-slate-800"
              } whitespace-normal hover:text-blue-600 text-xl font-sans text-black dark:text-white`
            }
          >
            صفحه اصلی{" "}
          </NavLink>
          <NavLink
            to={"/courses"}
            className={({ isActive }) =>
              `${
                isActive &&
                "text-gray-600 border-2 bg-slate-300 h-14 relative bottom-2 leading-9 rounded-md dark:text-slate-800"
              } whitespace-normal hover:text-blue-600 text-xl font-sans text-black dark:text-white`
            }
          >
            دوره های آموزشی{" "}
          </NavLink>
          <NavLink
            to={"/News"}
            className={({ isActive }) =>
              `${
                isActive &&
                "text-gray-600 border-2 bg-slate-300 h-14 relative bottom-2 leading-9 rounded-md dark:text-slate-800"
              } whitespace-normal hover:text-blue-600 text-xl font-sans text-black dark:text-white`
            }
          >
            مقالات{" "}
          </NavLink>

          <div>
            <HeaderTop />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;

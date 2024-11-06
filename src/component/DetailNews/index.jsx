import React from "react";
import { NavLink } from "react-router-dom";
import { BsStopwatch } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
const index = () => {
  return (
    <div className="w-[90%] mt-10 mx-auto ">
      <div className="breadcrumbs bg-white text-sm w-[100%] mt-6">
        <ul>
          <NavLink to={"/"}>
            <li className="ml-6 hover:text-blue-800">
              <a>خانه</a>
            </li>
          </NavLink>

          <NavLink to={"/News"}>
            <li className="ml-6 hover:text-blue-800">
              <a>مقالات</a>
            </li>
          </NavLink>
          <NavLink>
            <li className="ml-6 hover:text-blue-800">جزییات مقالات </li>
          </NavLink>
        </ul>
      </div>
      <div className="w-[100%] h-[1000px] mt-10 mx-auto rounded-xl flex gap-6">
        <div className="w-[70%] bg-white">
          <div className="border-2 w-[90%] h-[500px] mx-auto mt-4 rounded-2xl">
            <img src="" alt="" />
          </div>
          <div className="w-[200px] h-[50px] flex mt-8 mr-10">
            <BsStopwatch fill="gray" size={20} className="mt-1" />
            <p className="text-gray-500 mr-2">زمان مطالعه 5 دقیقه</p>
          </div>
          <h1 className="mt-9 mr-10 text-5xl">
            آموزش کار با توابع در جاوا اسکریپت | راهی برای حرفه ای شدن
          </h1>
            <div className="w-[90%] mx-auto">
                <h2 className="mt-9">
            توابع (Functions) در زبان برنامه‌نویسی جاوا اسکریپت یکی از اصلی‌ترین
            ساختارها برای سازماندهی و مدیریت کد هستند. با استفاده از توابع،
            می‌توانیم کدهای تکراری را کاهش دهیم و منطق برنامه را به بخش‌های
            کوچکتر تقسیم کنیم. در این مقاله در وب سایت آموزش برنامه نویسی راکت،
            به بررسی جامع توابع در جاوا اسکریپت، نحوه استفاده از آن‌ها، نکات و
            تکنیک‌های مفید خواهیم پرداخت.
          </h2>
          <div className=" w-[130px] h-[60px] mr-[85%] mt-16 flex gap-6">
            <div className="w-[30px] h-10"><SlLike size={25} /></div>
            <div className=" w-[30px] h-10"><SlDislike size={25} /></div>
            <div className="w-[30px] h-10"><MdFavoriteBorder size={25} /></div>
          </div>
            </div>
        
        </div>
        <div className="border-2 w-[30%] h-[500px]  bg-white"></div>
      </div>
    </div>
  );
};

export default index;

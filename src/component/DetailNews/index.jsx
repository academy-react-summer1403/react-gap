import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BsStopwatch } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import http from "../../core/Servises/interceptor";
import { CiSaveUp2 } from "react-icons/ci";
import { BsSuitHeart } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import { PiTwitterLogoThin } from "react-icons/pi";

const index = () => {
  const { id } = useParams();
  const [Detail, setDetail] = useState(null);
  const getNewsDetail = async () => {
    const res = await http.get(`/News/${id}`);
    console.log(res);
    setDetail(res);
  };

  useEffect(() => {
    getNewsDetail();
  }, []);

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
      <div className="border-2 w-[69%] mt-9">
        <img src="pcmp3.png" alt="" />
      </div>

      <div className="w-[100%] h-[] mt-10 mx-auto rounded-xl flex gap-6">
        <div className="w-[70%] bg-white">
          <div key={index} className="border-2 ">
            <div className="border-2 w-[90%] h-[500px] mx-auto mt-4 rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="w-[200px] h-[50px] flex mt-8 mr-10">
              <BsStopwatch fill="gray" size={20} className="mt-1" />
              <p className="text-gray-500 mr-2">زمان مطالعه 5 دقیقه</p>
            </div>
            <h1 className="mt-9 mr-10 text-5xl">{Detail?.title}</h1>
            <div className="w-[90%] mx-auto">
              <h2 className="mt-9">
                {Detail?.describe}
                {/* توابع (Functions) در زبان برنامه‌نویسی جاوا اسکریپت یکی از
                اصلی‌ترین ساختارها برای سازماندهی و مدیریت کد هستند. با استفاده
                از توابع، می‌توانیم کدهای تکراری را کاهش دهیم و منطق برنامه را
                به بخش‌های کوچکتر تقسیم کنیم. در این مقاله در وب سایت آموزش
                برنامه نویسی راکت، به بررسی جامع توابع در جاوا اسکریپت، نحوه
                استفاده از آن‌ها، نکات و تکنیک‌های مفید خواهیم پرداخت. */}
              </h2>
              <div className=" w-[130px] h-[60px] mr-[85%] mt-16 flex gap-6">
                <div className="w-[30px] h-10">
                  <SlLike size={25} />
                </div>
                <div className=" w-[30px] h-10">
                  <SlDislike size={25} />
                </div>
                <div className="w-[30px] h-10">
                  <MdFavoriteBorder size={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[] w-[100%] h-[120px]">
            <h1 className="mr-9 mt-4 text-slate-500">
              {" "}
              چه امتیازی به این مقاله میدی؟
            </h1>
            <div className="mr-[750px] -mt-[20px]">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-300"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-300"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-300"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-300"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-300"
                />
              </div>
            </div>

            <div className="w-[100%] mt-8 flex flex-wrap gap-10 mr-5">
              <VscComment className="w-6 h-6" />
              <BsSuitHeart className="w-6 h-6" />
              <CiSaveUp2 className="w-6 h-6" />

              <div className="">
                <PiTwitterLogoThin className="w-6 h-6 mr-[460px]" />
                <div className="border-2 w-56 h-8 rounded-2xl -m-5 mr-[500px]">
                  <a className="text-center mr-5 text-gray-500 ">
                    {" "}
                    https://roocket.ir/articles/
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[460px] flex flex-wrap gap-6 bg-white">
          <div className="div">
            <img src="pcmp.png" alt="" />
          </div>
          <div className="div">
            <img src="pcmp2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineDislike } from "react-icons/ai";

const index = () => {
  const [CoursList, setCoursList] = useState(null);

  const getLastCourse = async () => {
    const res = await axios.get(
      "https://classapi.sepehracademy.ir/api/Home/GetCoursesTop?Count=8"
    );

    setCoursList(res.data);
  };

  useEffect(() => {
    getLastCourse();
  }, []);

  return (
    <div>
      <div className="">
        <img
          className="w-[40px] h-[40px] relative bottom-8 right-20 max-sm:size-10 max-sm:hidden"
          src="./hobab2.png"
        />
      </div>
      <div className="relative  bottom-14 right-24 max-sm:mt-11 max-sm:right-10">
        <h1 className="text-4xl font-sans font-medium mr-12 mt-20 max-sm:text-lg ">
          آخرین دوره ها
        </h1>
      </div>
      <div className="relative  bottom-14">

      <NavLink to={"/courses"}>
        <h1 className="text-2xl font-sans font-medium mr-[84%] -mt-6 relative bottom-1 left-28 hover:text-blue-800 max-sm:text-sm">
          مشاهده همه دوره ها
        </h1>
      </NavLink>
      </div>


      <div className="w-[80%] h-[100%] flex  flex-wrap gap-9 mx-auto">
        {CoursList?.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-2xl w-[22%] h-[530px] mx-auto bg-white rounded-2xl border-2 border-red-500 max-sm:w-[400px] md:w-[500px]"
            >
              <div>
                <img
                  src="./Lastimg.jpg"
                  className="w-[90%] h-[100%] mx-3 relative bottom-5 rounded-2xl "
                  alt=""
                />
              </div>

              <div className="w-[90%] mx-auto">
                {" "}
                <h1 className="text-red-500 -mt-2">{item.statusName}</h1>
                <h1>{item.title}</h1>
                <h1 className="text-blue-700 text-sm">
                  نام مدرس:
                  {item.teacherName}
                </h1>
                <h2 className="text-gray-600">
                  نوع دوره:
                  {item.levelName}
                </h2>
                <h3 className="text-sm text-gray-600 mt-2">توضیحات دوره:</h3>
                <p className="text-sm text-gray-500 mt-2">
                  {item.describe}
                  آموزش کامل CSS به صورت کامل و البته رایگان هدفی‌ست که ما در
                  این دوره آموزشی دنبال می‌کنیم. شما با مشاهده کامل این دوره یاد
                  خواهید گرفت که در صفحات وبس...
                </p>
                <h1>قیمت دوره:</h1>
                <h3 className="text-red-500 -mt-5 mr-32">{item.cost}</h3>
                <div className="w-[100%] h-10 flex justify-between mt-3">
                  <div className="w-10 mr-24">
                    <IoIosHeartEmpty size={25} fill="red" />
                  </div>
                  <div className="w-10 ">
                    <AiOutlineLike size={25} fill="blue" />
                  </div>
                  <div className="w-10">
                    <AiOutlineDislike size={25} fill="blue" />
                  </div>
                </div>
                <button className="btn btn-outline btn-primary h-3 mt-3 mr-9 ">
                  مشاهده اطلاعات دوره
                </button>
              </div>

              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;

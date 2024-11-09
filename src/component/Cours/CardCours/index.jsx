import React, { useEffect, useState } from "react";
import Examples from "../../../component/Cours/CardCours/Examples";
import http from "../../../core/Servises/interceptor";

const index = ({ List }) => {
  return (
    <div className="mr-[370px] -mt-[72%] shadow-xl dark:bg-[#22445D] max-sm:mr-0 ">
      <div className=" w-[100%] h-[90%] flex flex-wrap-reverse justify-center gap-[50px] mb-[10px] rounded-lg ">
        {List?.map((item, index) => {
          return (
            <div
              key={index}
              className=" shadow-2xl w-[30%] h-[480px] mx-auto bg-white rounded-2xl "
            >
              <div className="">
                <img
                  src="./Lastimg.jpg"
                  className="w-[90%] h-[100%] mx-3 bottom-5 rounded-2xl"
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
                <button className="btn btn-outline btn-primary h-3 mt-3 mr-9 ">
                  مشاهده اطلاعات دوره
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Examples />
    </div>
  );
};

export default index;

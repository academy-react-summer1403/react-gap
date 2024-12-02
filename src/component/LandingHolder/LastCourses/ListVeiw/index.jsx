import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineDislike } from "react-icons/ai";
const index = ({
  title,
  teacherName,
  levelName,
  statusName,
  describe,
  cost,
}) => {
  return (
    <div className="shadow-2xl w-[22%] h-[530px] mx-auto bg-white rounded-2xl">
      <div className="">
        <img
          src="./Lastimg.jpg"
          className="w-[90%] h-[100%] mx-3 relative bottom-5 rounded-2xl"
          alt=""
        />
      </div>

      <div className="w-[90%] mx-auto">
        {" "}
        <h1 className="text-red-500 -mt-2">{statusName}</h1>
        <h1>{title}</h1>
        <h1 className="text-blue-700 text-sm">
          نام مدرس:
          {teacherName}
        </h1>
        <h2 className="text-gray-600">
          نوع دوره:
          {levelName}
        </h2>
        <h3 className="text-sm text-gray-600 mt-2">توضیحات دوره:</h3>
        <p className="text-sm text-gray-500 mt-2">
          {describe}
          آموزش کامل CSS به صورت کامل و البته رایگان هدفی‌ست که ما در این دوره
          آموزشی دنبال می‌کنیم. شما با مشاهده کامل این دوره یاد خواهید گرفت که
          در صفحات وبس...
        </p>
        <h1>قیمت دوره:</h1>
        <h3 className="text-red-500 -mt-5 mr-32">{cost}</h3>
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
};

export default index;

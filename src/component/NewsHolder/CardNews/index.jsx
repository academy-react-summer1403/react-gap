import axios from "axios";
import { use } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import { TbNumber5 } from "react-icons/tb";
import http from "../../../core/Servises/interceptor";

const index = () => {

  const [newsList, setnewsList] = useState([]);

  const getnewsList = async () => {
    const res = await http.get("/News?PageNumber=1&RowsOfPage=6&SortingCol=InsertDate&SortType=DESC");
    console.log("neeeeeeews", res.news);
    setnewsList(res.news);
    console.log("IdIdI" , newsList);
  };

  useEffect(() => {
    getnewsList();
  }, []); 

  return (
    <div>
      <div className=" border-2 border-red-800 w-11/12 mt-20 mr-16  flex flex-wrap justify-center gap-9 shadow-2xl">
       
          {newsList?.map((item, index) => {
            return (
              <div
              key={index}
              className=" shadow-2xl w-[30%] h-[480px] mx-auto bg-white rounded-2xl"
            >
              <div className="">
                <img
                  src="./Lastimg.jpg"
                  className="w-[90%] h-[100%] mx-3 relative bottom-5 rounded-2xl"
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
      

        {/* <div className=" mr-[620px]">
          <div className="join">
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="1"
              defaultChecked
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="2"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="3"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="4"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default index;

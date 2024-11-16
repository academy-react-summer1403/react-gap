import axios from "axios";
import { use } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import http from "../../../core/Servises/interceptor";
import { Pagination } from "antd";

const index = ({NewsList}) => {
 
 
  return (
    <div>
      <div className="w-11/12 mt-28 mr-16  flex flex-wrap justify-center gap-9 shadow-2xl">
        {NewsList?.map((item, index) => {
          return (
            <div
              key={index}
              className=" shadow-2xl w-[30%] h-[480px] mx-auto bg-white rounded-2xl"
            >
              <div className="">
                {/* {item.currentImageAddressTumb} */}
                <img
                  src="./Lastimg.jpg"
                  className="w-[90%] h-[100%] mx-3 relative bottom-5 rounded-2xl"
                  alt=""
                />
              </div>

              <div className="w-[90%] mx-auto">
                {" "}
                {/* <h1 className="text-red-500 -mt-2">{item.statusName}</h1> */}
                <h1>{item.title}</h1>
                <h1 className="text-blue-700 text-sm">
                  {item.addUserFullName}
                </h1>
                {/* <h2 className="text-gray-600">
                 
                  {item.levelName}
                </h2> */}
                <h3 className="text-sm text-gray-600 mt-2">توضیحات مقاله:</h3>
                <p className="text-sm text-gray-500 mt-2">
                  {item.miniDescribe}
                </p>
                <MdOutlineFavoriteBorder className="mt-3 mr-80 w-5 h-5" />
                <AiOutlineLike className="-mt-5 mr-72 w-5 h-5 " />
                <AiOutlineDislike className="-mt-5 mr-64 w-5 h-5 " />
                {/* <h3 className="text-red-500 -mt-5 mr-32">{item.cost}</h3> */}
                <button className="btn btn-outline btn-primary h-3 mt-3 mr-9 ">
                  مشاهده دوره
                </button>
              </div>
            </div>
          );
        })}

      <Pagination/>
      </div>
    </div>
  );
};

export default index;

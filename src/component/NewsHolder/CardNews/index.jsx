import axios from "axios";
import { use } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import http from "../../../core/Servises/interceptor";
import { Pagination } from "antd";
import {
  deletliked,
  disLiked,
  liked,
} from "../../../core/Servises/api/Like/Like.api";

const index = ({ NewsList, setRand }) => {
  const likee = async (id, currentUserIsLike) => {
    try {
      if (!currentUserIsLike) {
        const res = await http.post(`/News/NewsLike/:NewsId${id}`);
        console.log(res);
        setRand(Math.random());
      } else {
        const data = new FormData();
        data.append("CourseLikeId", id);
        const result = await http.delete(`/News/DeleteLikeNews`, {
          data: data,
        });
        console.log(result);
        setRand(Math.random());
      }
    } catch (error) {
      throw new Error("ERROR:", error);
    }
  };

  const disLikee = async (id, currentUserDissLike) => {
    try {
      if (!currentUserDissLike) {
        const res = await http.post(`/News/NewsDissLike/:NewsId=${id}`);
        console.log(res);
        setRand(Math.random());
      }
    } catch (error) {
      throw new Error("ERROR:", error);
    }
  };

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

                
                {item.currentUserIsLike === false ? (
                  <div className="badge badge-outline p-5   hover:border-none   dark:text-white">
                    {item.currentLikeCount}
                    <AiOutlineLike
                      onClick={() => {
                        likee(item.likeId, item.currentUserIsLike);
                      }}
                      className="-mt-5 mr-72 w-5 h-5  "
                    />
                  </div>
                ) : (
                  <div className="badge badge-outline p-5  bg-[#41d3a7]   hover:border-none   dark:text-white">
                    {item.currentLikeCount}
                    <AiOutlineLike
                      onClick={() => {
                        likee(item.likeId, item.currentUserIsLike);
                      }}
                      className="w-[20px] h-[20px] cursor-pointer "
                    />
                  </div>
                )}
                {item.currentUserIsDissLike === false ? (
                  <div className="badge badge-outline p-5   hover:border-none  dark:text-white">
                    {item.currentDissLikeCount}
                    <AiOutlineDislike
                      onClick={() => {
                        disLikee(item.likeId, item.currentUserIsDissLike);
                        className = "mt-1 w-[20px] h-[20px]";
                      }}
                    />
                  </div>
                ) : (
                  <div className="badge badge-outline p-5 bg-red-400  hover:border-none  dark:text-white">
                    {item.currentDissLikeCount}
                    <AiOutlineDislike />
                  </div>
                )}
                <AiOutlineDislike className="-mt-5 mr-64 w-5 h-5 " />
                {/* <h3 className="text-red-500 -mt-5 mr-32">{item.cost}</h3> */}
                <button className="btn btn-outline btn-primary h-3 mt-3 mr-9 ">
                  مشاهده دوره
                </button>
              </div>
            </div>
          );
        })}

        <Pagination />
      </div>
    </div>
  );
};

export default index;

import React, { useEffect, useState } from "react";
import Examples from "../../../component/Cours/CardCours/Examples";
import http from "../../../core/Servises/interceptor";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import {
  deletliked,
  disLiked,
  liked,
} from "../../../core/Servises/api/Like/Like.api";
import { Link } from "react-router-dom";

const index = ({ List, PageNumber, setPageNumber, setRand }) => {
  const likee = async (id, userIsLiked) => {
    try {
      if (!userIsLiked) {
        const res = await http.post(`/Course/AddCourseLike?CourseId=${id}`);
        console.log(res);
        setRand(Math.random());
      } else {
        const data = new FormData();
        data.append("CourseLikeId", id);
        const result = await http.delete(`/Course/DeleteCourseLike`, {
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
        const res = await http.post(`/Course/AddCourseDissLike?CourseId=${id}`);
        console.log(res);
        setRand(Math.random());
      }
    } catch (error) {
      throw new Error("ERROR:", error);
    }
  };

  const handleFavorite = async (id, userFavorite) => {
    try {
      if (!userFavorite) {
        const res = await http.post(`/Course/AddCourseFavorite`, {
          courseId: id,
        });
        console.log(res);
        setRand(Math.random());
      } else {
        const data = new FormData();
        data.append("CourseFavoriteId", id);
        const result = await http.delete("/Course/DeleteCourseFavorite", {
          data: data,
        });
        setRand(Math.random());
      }
    } catch {
      throw new Error("ERROR:", error);
    }
  };

  return (
    <div className="mr-[370px] -mt-[72%] shadow-xl dark:bg-[#22445D] max-sm:mr-0 ">
      <div className=" w-[100%] h-[90%] flex flex-wrap-reverse justify-center gap-[50px] mb-[10px] rounded-lg ">
        {List?.courseFilterDtos.map((item, index) => {
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
                <h1 className="text-red-500 mt-3">{item.statusName}</h1>
                <h1>{item.title}</h1>
                <h1 className="text-blue-700 text-sm">
                  نام مدرس:
                  {item.teacherName}
                </h1>
                <h2 className="text-gray-600">
                  نوع دوره:
                  {item.levelName}
                </h2>
                <h3 className="text-sm text-gray-600 mt-2">تکنولوژی دوره:</h3>
                <p className="text-sm text-gray-500 mt-2">
                  {item.technologyList}

                  <div className="card-actions justify-end ">
                    {!item.userFavorite ? (
                      <div
                        className="badge badge-outline p-5 cursor-pointer "
                        onClick={() =>
                          handleFavorite(item.courseId, item.userFavorite)
                        }
                      >
                        <MdOutlineFavoriteBorder className="" />
                      </div>
                    ) : (
                      <div
                        className="badge badge-outline p-5 bg-blue-300 cursor-pointer "
                        onClick={() =>
                          handleFavorite(item.userFavoriteId, item.userFavorite)
                        }
                      >
                        <MdOutlineFavoriteBorder className="" />
                      </div>
                    )}

                    {2 > 3 ? console.log(1) : console.log(2)}

                    {item.userIsLiked === false ? (
                      <div className="badge badge-outline p-5   hover:border-none   dark:text-white">
                        {item.likeCount}
                        <AiOutlineLike
                          onClick={() => {
                            likee(item.courseId, item.userIsLiked);
                          }}
                          className="w-[20px] h-[20px] cursor-pointer "
                        />
                      </div>
                    ) : (
                      <div className="badge badge-outline p-5  bg-[#41d3a7]   hover:border-none   dark:text-white">
                        {item.likeCount}
                        <AiOutlineLike
                          onClick={() => {
                            likee(item.userLikedId, item.userIsLiked);
                          }}
                          className="w-[20px] h-[20px] cursor-pointer "
                        />
                      </div>
                    )}

                    {item.currentUserDissLike === false ? (
                      <div className="badge badge-outline p-5   hover:border-none  dark:text-white">
                        {item.dissLikeCount}
                        <AiOutlineDislike
                          onClick={() => {
                            disLikee(item.courseId, item.currentUserDissLike);
                            className = "mt-1 w-[20px] h-[20px]";
                          }}
                        />
                      </div>
                    ) : (
                      <div className="badge badge-outline p-5 bg-red-400  hover:border-none  dark:text-white">
                        {item.dissLikeCount}
                        <AiOutlineDislike />
                      </div>
                    )}
                  </div>
                </p>
                <h1 className="mt-2">قیمت دوره:</h1>
                <h3 className="text-red-500 -mt-5 mr-32">{item.cost}</h3>
                <Link to={`/DetailCourse/${item.courseId}`}>
                  <button className="btn btn-outline btn-primary h-3 mt-3 mr-9 ">
                    مشاهده اطلاعات دوره
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <Examples
        totalCount={List?.totalCount}
        PageNumber={PageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default index;

import React, { useEffect, useState } from "react";
import Examples from "../../../component/Cours/CardCours/Examples";
import http from "../../../core/Servises/interceptor";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";


const index = ({ List, PageNumber, setPageNumber }) => {
  const [rand, setRand] = useState(1);
  const likee = async (id) =>{
    const data = new formData();
    try{
      if (userIsLiked === false){
        const like = await liked(id.id);
        setRand(Math.random());
      }
      else if (userIsLiked === true) {
        data.append("courseLikeId , id.userLikedId");
        setRand(Math.random());
  
        const deletlike = await deletliked(data);
  
      }
    }

  catch (error) {
    throw new Error ("ERROR:" , error);
  }
};
const disLikee = async (id) =>{
  try {
    const dislike = await disLiked(id);
    setRand(Math.random());
  }
  catch (error){
    throw new Error ("ERROR" , error);
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
                  <div className="badge badge-outline p-5 hover:bg-[#4c71b6] ">
                    <MdOutlineFavoriteBorder className="" />
                    </div>
                    <div className="badge badge-outline p-5 hover:bg-[#b13535]  hover:border-none   dark:text-white">
                      {item.likeCount}
                      <AiOutlineLike />
                    </div>

                    <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none  dark:text-white">
                      {item.dissLikeCount}
                      <AiOutlineDislike />
                    </div>
                  </div>
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

      <Examples
        totalCount={List?.totalCount}
        PageNumber={PageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default index;

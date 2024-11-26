import React, { useEffect, useState } from "react";
import { Form, NavLink, useFetcher, useParams } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineReplyAll } from "react-icons/md";
import { Field, Formik } from "formik";
import http from "../../../core/Servises/interceptor";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import AddCourseComment from "./AddCourseComment";
import CommentReply from "./CommentReply";

const index = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const [Count, setCount] = useState(null);
  const [rand, setRand] = useState(0);
  const [dIsLike, setDIsLike] = useState();

  const getCommment = async () => {
    const res = await http.get(`/Course/GetCourseCommnets/${id}`);
    console.log(`comments , res`);
    setComment(res);
  };

  useEffect(() => {
    getCommment();
  }, [rand , dIsLike]);

  const handleLikeComment = async (commentId) =>{
    const res = await http.post(`/Course/AddCourseCommentLike?CourseCommandId=${commentId}`)
    setRand(Math.random())
    console.log(res)
  }


  const handleDisLike = async (commentId) =>{
    const res = await http.post(`/Course/AddCourseCommentDissLike?CourseCommandId=${commentId}`)
    setDIsLike(Math.random())
    console.log(res)
  }



  // const onSubmit = () => {};
  return (
    <div className=" border-2  w-[81%] mr-14 bg-white mt-14 rounded-xl">
      <div className="border-2 w-[95%] h-[90%] mt-5 mr-5">
        <h1 className="text-xl text-[#8c8888] font-sans mr-4 mt-3">
          {" "}
          نظرات شما{" "}
        </h1>
        {comment?.map((item) => {
          return (
            <div className="border-2w-[97%] h-[90%] mr-2 mt-3 rounded-lg overflow-y-scroll">
              <img
                src={item.pictureAddress}
                className="border-2 w-20 h-20 rounded-full mr-3 mt-3"
              />
              <div className="text-xs mt-3">{item.insertDate}</div>
              <h1 className="text-sm mr-[105px] -mt-16"> {item.author}</h1>
              <div className="mr-[800px] -mt-6 flex flex-wrap gap-3">
                <FcLike  onClick={()=>handleLikeComment(item.id)}  className=" cursor-pointer w-[20px] h-[20px] " />
                {item.likeCount}
                <FcDislike onClick={()=>handleDisLike(item.id)} className=" cursor-pointer w-[20px] h-[20px] " />
                {item.disslikeCount}
              </div>
              <div className=" border-2 mt-[85px] w-[100%] h-[80px] ">
                {item.title}
                {item.describe}
                <div className=" mr-[700px] mt-10 flex flex-wrap gap-4">
                  <button onClick={()=>setCount(item.id)} className="text-xs"> مشاهده پاسخ </button>
                  {/* <button className="text-xs"> پاسخ دادن </button> */}
                </div>
                {Count === item.id && <CommentReply commentId={item.id}/>}
              </div>
            </div>
          );
        })}
        <AddCourseComment />
      </div>

    </div>
  );
};

export default index;

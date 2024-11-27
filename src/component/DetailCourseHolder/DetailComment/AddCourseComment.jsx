import React, { useState } from "react";
import http from "../../../core/Servises/interceptor";
import { useParams } from "react-router-dom";

const AddCourseComment = () => {
  const { id } = useParams();
  const [MyTitle, setMyTitle] = useState("");
  const [MyDescribe, setMyDescribe] = useState("");

  const addComment = async () => {
    const data = new FormData();
    data.append("CourseId", id);
    data.append("Title", MyTitle);
    data.append("Describe", MyDescribe);

    const res = await http.post("/Course/AddCommentCourse", data);
    console.log(res);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="  کامنت شما "
        onChange={(e) => setMyTitle(e.target.value)}
      />
      <textarea
        onChange={(e) => setMyDescribe(e.target.value)}
        placeholder="نظرتو اینجا برامون بنویس"
        className="border-2 w-[100%] h-[100px] mt-10"
      ></textarea>

      <button
        onClick={addComment}
        className=" btn btn-outline mt-5 border-gray-400 mr-4 "
      >
        ارسالش کن
      </button>
    </div>
  );
};

export default AddCourseComment;

import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineDislike } from "react-icons/ai";

const Like = () => {
    const [Like, setLike] = useState(null);

    const getLike = async () => {
      const res = await axios.get(
        "https://classapi.sepehracademy.ir/api/Course/AddCourseLike?CourseId=<uuid>"
      );
  
      setLike(res.data);
    };
  
    useEffect(() => {
      getLike();
    }, []);
    
  return (
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
  )
}

export default Like

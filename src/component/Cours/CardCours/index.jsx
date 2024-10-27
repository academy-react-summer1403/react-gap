import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoStarOutline } from "react-icons/io5";
import { TbNumber5 } from "react-icons/tb";
import Examples from "../../../component/Cours/CardCours/Examples"
const index = () => {
  const [List, setList] = useState(null);

  const getCourseList =async () => {
    const res =await axios.get("https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=9&SortingCol=Active&SortType=DESC&TechCount=0");
    console.log('res' , res.data.courseFilterDtos);
    setList(res.data.courseFilterDtos)
  };

  useEffect(() => {
    getCourseList();
  }, []);

  return (
    <div className="mr-[370px] -mt-[42%] rounded-3xl shadow-xl ">
      <div className=" w-[100%] flex flex-wrap-reverse justify-center gap-[50px] mb-[10px]">
        {List?.map((item, index) => {
          return (
            <div
              key={index}
              className=" h-[510px] w-[30%] bg-[#ffff] mb-20 "
            >
              <div className="w-[100px] h-[100px]  mr-[120px] animate-pulse">
                <img src={item.tumbImageAddress} alt="" className="icons8.png" />
              </div>

              <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 ">
                {item.statusName}
              </button>


              <div className="flex flex-wrap">
                <AiOutlineLike className=" w-9 h-9  relative mr-[290px] -mt-[40px]" />
                <BiDislike className="w-9 h-9  relative mr-[255px] -mt-[40px]" />
                <IoStarOutline className=" w-9 h-9 -mt-[40px] mr-[210px] " />
              </div>

              <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                {item.title}
              </div>
              <div>{item.technologyList}</div>
              <div className=" w-[380px] h-[40px] relative mt-[20px] mr-[10px] ">
                <img src={item.teacherName} alt="" className="./star1.png" />
              </div>

              <div>
                {/* <TbNumber5 className="w-8 h-8 mr-[260px] -mt-[30px]" /> */}
                <div>{item.likeCount}</div>

                <IoStarOutline className="w-8 h-8  mr-[300px] -mt-[36px]" />
              </div>

              <div className="text-xs text-[#41A789] relative mr-[10px] mt-[20px]">
                {item.speech}
              </div>

              <div className="text-[16px] text-[#6D6767] relative mt-[20px] mr-[10px]">
                {item.describe}
              </div>
              <div className="border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]"></div>

              <div className="text-[14px] text-[#12926C] relative mt-[10px] mr-[10px]">
                {item.text}
              </div>
              <div className="text-[14px] text-[#E11818] relative -mt-[17px] mr-[225px]">
                {item.price}
              </div>

              <button className="border-2 border-[#5BE1B9] h-[40px] w-[100px] bg-[#ffff] rounded-[8px] relative mr-[60px] mt-[20px]">
                {item.detail}
              </button>
              <button className="border-2 border-[#5BE1B9] h-[40px] w-[100px] bg-[#5BE1B9] rounded-[8px] relative mr-[10px] mt-[20px]">
                {item.reservation}
              </button>
            </div>
          );
        })}
      </div>

      <Examples/>

     
    </div>
  );
};

export default index;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

import Examples from "../../../component/Cours/CardCours/Examples"
import { FaRegStar } from "react-icons/fa";

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
    <div className=" border-2 border-red-600 mr-[370px] -mt-[36%] shadow-xl  dark:bg-[#22445D;]">
      <div className=" w-[100%] h-[70%] flex flex-wrap-reverse justify-center gap-[50px] mb-[10px]   rounded-lg ">
        {List?.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-[30%] bg-[#fff] mb-20 dark:bg-[#080f54;]"
            >
              <div className="w-[250px] mt-[20px]  mr-[25px]">
                <img src="./cat12.jpg" alt="" className="" />
              </div>

              {/* <button className="h-11 w-32 bg-[#da7528] rounded-[8px] relative mr-4 mt-14 ">
                {item.statusName}
              </button> */}

              <div className="w-[60%] h-6  dark:text-white  text-[rgb(59,130,246)] rounded-[8px] relative mr-7 mt-2 ">{item.statusName}</div>


              {/* <div className="flex flex-wrap">
                <AiOutlineLike className=" w-9 h-9  relative mr-[290px] -mt-[40px]" />
                <BiDislike className="w-9 h-9  relative mr-[255px] -mt-[40px]" />
                <IoStarOutline className=" w-9 h-9 -mt-[40px] mr-[210px] " />
              </div> */}

              <div className=" dark:text-white h-10 w-[80%] text-start text-2xl text-[rgb(59,130,246)] font-sans font-normal mt-[10px] mr-7 animate-pulse">
                {item.title}
              </div>

              {/* <div className="relative mt-[10px] mr-7">{item.technologyList}</div> */}

              {/* <div className=" border-2 w-[380px] h-[40px] relative mt-[20px] mr-[10px] ">
                <img src={item.teacherName} alt="" className="./star1.png" />
              </div> */}

              <div className=" w-[60%] dark:text-white text-[16px] text-[#6D6767] relative mt-[18px] mr-7">
                {item.describe}
              </div>
                
                <div className="relative mt-[5px] mr-7">
                <div className="badge badge-outline p-5 hover:bg-[#dd813e] dark:bg-white hover:border-none">
                 <AiOutlineLike />
                </div>

                <div className="badge badge-outline p-5 hover:bg-[#dd813e] dark:bg-white hover:border-none">
                  <AiOutlineDislike />
                </div>
                <div className="badge badge-outline p-5 hover:bg-[#dd813e] dark:bg-white  hover:border-none">
                  <FaRegStar />
                </div>
                </div>

                


              {/* <div>{item.likeCount}</div> */}
                
              

              {/* <div className="text-xs text-[#41A789] relative mr-[10px] mt-[20px]">
                {item.speech}
              </div> */}

              {/* <div className="border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]"></div>

              <div className="text-[14px] text-[#12926C] relative mt-[10px] mr-[10px]">
                {item.text}
              </div> */}


              <div className=" w-[30%] h-6 text-[14px] text-[#E11818] dark:text-white relative -mt-[17px] mr-52">
                {item.cost}
              </div>

              <button className=" border-[#dd813e] h-[40px] w-[100px] bg-orange-700 text-white rounded-[8px] relative mr-[60px] mt-[15px]">
                {item.statusName }
              </button>
              {/* <button className="border-2 border-[#df9a40] h-[40px] w-[100px] bg-[#dd813e] rounded-[8px] relative mr-[10px] mt-[20px]">
                {item.reservation}
              </button> */}
            </div>
          );
        })}
      </div>

      <Examples/>

     
    </div>
  );
};

export default index;

import axios from "axios";
import { use } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import { TbNumber5 } from "react-icons/tb";

const index = () => {
  const [List, setList] = useState([
    {
      id: 1,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
    {
      id: 2,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
    {
      id: 3,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
    {
      id: 4,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
    {
      id: 5,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
    {
      id: 6,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
    {
      id: 7,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
    {
      id: 8,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
    {
      id: 9,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
  ]);

  const [newsList, setnewsList] = useState(null);

  const getnewsList = async () => {
    const res = await axios.get(
      "https://classapi.sepehracademy.ir/api/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC"
    );
    console.log(res.data.news);
    setnewsList(res.data.news);
  };

  useEffect(() => {
    getnewsList();
  }, []);

  return (
    <div>
      <div className="w-11/12 mt-8 mr-16  shadow-2xl">
        <div className="w-12/12 flex flex-wrap justify-center gap-9 mt-11 mx-auto">
          {newsList?.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[41%] w-[20%] bg-[#FBF6F6] rounded-3xl  mb-24"
              >
             <div className="w-[250px] mt-[20px]  mr-[25px]">
                <img src="./cat12.jpg" alt="" className="" />
              </div>

              {/* <button className="h-11 w-32 bg-[#da7528] rounded-[8px] relative mr-4 mt-14 ">
                {item.statusName}
              </button> */}

              <div className="w-[60%] h-6 text-[rgb(59,130,246)] rounded-[8px] relative mr-7 mt-2 ">{item.statusName}</div>


              {/* <div className="flex flex-wrap">
                <AiOutlineLike className=" w-9 h-9  relative mr-[290px] -mt-[40px]" />
                <BiDislike className="w-9 h-9  relative mr-[255px] -mt-[40px]" />
                <IoStarOutline className=" w-9 h-9 -mt-[40px] mr-[210px] " />
              </div> */}

              <div className="  h-10 w-[80%] text-start text-2xl text-[rgb(59,130,246)] font-sans font-normal mt-[10px] mr-7 animate-pulse">
                {item.title}
              </div>

              {/* <div className="relative mt-[10px] mr-7">{item.technologyList}</div> */}

              {/* <div className=" border-2 w-[380px] h-[40px] relative mt-[20px] mr-[10px] ">
                <img src={item.teacherName} alt="" className="./star1.png" />
              </div> */}

              <div className=" w-[60%] h- text-[16px] text-[#6D6767] relative mt-[18px] mr-7">
                {item.describe}
              </div>
                
                <div className="relative mt-[5px] mr-7">
                <div className="badge badge-outline p-5 hover:bg-[#dd813e]  hover:border-none">
                 <AiOutlineLike />
                </div>

                <div className="badge badge-outline p-5 hover:bg-[#dd813e]  hover:border-none">
                  <AiOutlineDislike />
                </div>
                <div className="badge badge-outline p-5 hover:bg-[#dd813e]  hover:border-none">
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


              <div className=" w-[30%] h-6 text-[14px] text-[#E11818] relative -mt-[17px] mr-52">
                {item.cost}
              </div>

              <button className=" border-[#dd813e] h-[40px] w-[100px] bg-[#dd813e] rounded-[8px] relative mr-[60px] mt-[20px]">
                {item.statusName }
              </button>
              {/* <button className="border-2 border-[#df9a40] h-[40px] w-[100px] bg-[#dd813e] rounded-[8px] relative mr-[10px] mt-[20px]">
                {item.reservation}
              </button> */}
            </div>
            );
          })}
        </div>

        <div className=" mr-[620px]">
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
        </div>
      </div>
    </div>
  );
};

export default index;

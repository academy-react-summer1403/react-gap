import axios from "axios";
import { use } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
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
      id: 1,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
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
      id: 1,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
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
      id: 1,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
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
      id: 1,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
    {
      id: 1,
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
                <div className="w-[100%] h-64   ">
                  <img src={item.addUserProfileImage} alt="" />
                </div>

                <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px]  mr-4 mt-14 ">
                  {item.button}
                </button>

                <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-5 mr-3">
                  {item.title}
                </div>

                <div className="flex flex-wrap">
                  <AiOutlineLike className=" w-9 h-9   mr-96 -mt-28" />
                  <BiDislike className="w-9 h-9  mr-[350px] -mt-28" />
                  <IoStarOutline className=" w-9 h-9 -mt-[106px] mr-[300px] " />
                </div>

                <div>
                  <div className=" w-96 h-16  mt-[20px] mr-[10px] ">
                    <img src={item.star} alt="" className="star1.png" />
                  </div>

                  <TbNumber5 className="w-8 h-8 mr-[350px] -mt-12" />

                  <IoStarOutline className="w-8 h-8  mr-[390px] -mt-9" />
                </div>

                <div className="text-2xl text-[#6D6767]  mt-8 mr-3">
                  {item.miniDescribe}
                </div>
                <div className="border w-[90%] mr-5 mt-5 border-[#5BE1B9]"></div>

                <button className=" text-2xl text-[#807A7A] mr-[140px] mt-[5px]">
                  {item.detail}
                </button>
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

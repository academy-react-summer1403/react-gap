import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
const index = () => {
  return (
    <div className="h-[600px]">
      <div>
        <h1 className="font-sans text-4xl text-gray-600 font-bold text-center mt-10">
          ارتباط با ما
        </h1>
        <h2 className="font-sans text-xl text-gray-500 text-center mt-5">
          در این صفحه می توانید راه های ارتباطی با ما را مشاهده کنید
        </h2>
      </div>
      <div className="flex w-[80%] h-40 mx-auto ">
        <div className="flex w-[50%] mr-80 mt-7 gap-10">
          <h3 className="text-gray-500 font-sans">راه های ارتباطی</h3>
          <div className="w-48 flex gap-7 h-16 mt-16 ml-24 ">
            <button className="btn btn-info">
              <BsSend size={20} fill="white" />
            </button>
            <button className="btn btn-info">
              <BiMessageRounded size={20} fill="white" />
            </button>
          </div>
        </div>
        <div className="w-[50%] h-40 mx-auto mt-7 border-r-2">
          <h3 className=" text-gray-500 font-sans mr-2">شبکه های اجتماعی</h3>{" "}
          <div className="w-48 flex gap-7 h-16 mt-10 mr-36 ">
            <button className="btn btn-info">
              <CiYoutube size={20} fill="white" />
            </button>
            <button className="btn btn-info">
              <CiFacebook size={20} fill="white"/>
            </button>
            <button className="btn btn-info">
              <CiTwitter size={20} fill="white"/>
            </button>
            <button className="btn btn-info">
              <FaInstagram size={20} fill="white"/>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[80%] bg-white shadow-2xl h-[40%] mt-20 mr-24 rounded-2xl">
        <h1 className="font-sans text-xl text-gray-500 mr-7 mt-16">
          شماره تماس:
        </h1>
        <h2 className="font-sans text-xl text-gray-500 mr-7 mt-5">
          09046423872
        </h2>
        <h1 className="font-sans text-xl text-gray-500 mr-7 mt-5">
          آدرس :
        </h1>
        <h2 className="font-sans text-xl text-gray-500 mr-7 mt-5">
          ساری میدان خزر آکادمی سپهر
        </h2>
      </div>
    </div>
  );
};

export default index;

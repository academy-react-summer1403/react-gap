import React from "react";
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { SlCamrecorder } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlBubble } from "react-icons/sl";
import { SlKey } from "react-icons/sl";
import { SlPower } from "react-icons/sl";
const index = () => {
  return (
    <div className="w-[17%] h-[800px] bg-white dark:bg-slate-900 flex flex-col relative">
      <div className="relative top-10">
          <div className="w-[100%] h-12 rounded-3xl flex justify-center">
        <div className="w-7 h-7 mt-1 ml-3">
          <IoHome fill="" size={30} />
        </div>
        <h1 className="text-center leading-9 text-base font-sans font-medium">
          صفحه اصلی پنل
        </h1>
      </div>
      <div className=" w-[100%] h-12 rounded-3xl flex justify-center mt-2">
        <div className="w-7 h-7 mt-1 ml-3">
        <FaRegUser    fill="" size={30} />
        </div>
        <h1 className="text-center leading-9 text-base font-sans font-medium">
          {" "}
          ویرایش پروفایل{" "}
        </h1>
      </div>
      <div className="w-[100%] h-12 rounded-3xl flex justify-center mt-2">
        <div className="w-7 h-7 mt-1 ml-3">
         <SlCamrecorder    fill="" size={30}/>
        </div>
        <h1 className="text-center leading-9 text-base font-sans font-medium">
          {" "}
          دوره های من{" "}
        </h1>
      </div>
      <div className="w-[100%] h-12 rounded-3xl flex justify-center mt-2">
        <div className="w-7 h-7 mt-1 ml-3">
         <SlHandbag   fill="" size={30}/>
        </div>
        <h1 className="text-center leading-9 text-base font-sans font-medium">
          دوره های رزرو
        </h1>
      </div>
      <div className=" w-[100%] h-12 rounded-3xl flex justify-center mt-2">
        <div className="w-7 h-7 mt-1 ml-3">
        <SlHeart fill="" size={30} /> 
        </div>
        <h1 className="text-center leading-9 text-base font-sans font-medium">
          مورد علاقه ها
        </h1>
      </div>
      <div className="w-[100%] h-12 rounded-3xl flex justify-center mt-2">
        <div className="w-7 h-7 mt-1 ml-3">
          <SlBubble  fill="" size={30}/>
        </div>
        <h1 className="text-center leading-9 text-base font-sans font-medium">
          نظرات من
        </h1>
      </div>
      <div className="w-[100%] h-12 rounded-3xl flex justify-center mt-2">
        <div className="w-7 h-7 mt-1 ml-3">
        <SlKey fill="" size={30} />
        </div>
        <h1 className="text-center leading-9 text-base font-sans font-medium">
           تغییر رمز حساب{" "}
        </h1>
      </div>
      <div className="w-[100%] h-12 rounded-3xl flex justify-center mt-24">
        <div className="w-7 h-7 mt-1 ml-3">
          <IoHome fill="" size={30} />
        </div>
        <h1 className="text-center leading-9 text-base font-sans font-medium">
          بازگشت به خانه
        </h1>
      </div>{" "}
      <div className="w-[100%] h-12 rounded-3xl flex justify-center mt-2">
        <div className="w-7 h-7 mt-1 ml-3">
        <SlPower  size={30}/>
          
        </div>
        <h1 className="text-center leading-9 text-base font-sans font-medium">خروج از حساب</h1>
      </div>
    </div>


    
      </div>
      
    
  );
};

export default index;

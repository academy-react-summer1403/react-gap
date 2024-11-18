import { Field, Form, Formik } from "formik";
import React from "react";
import { IoMdCall } from "react-icons/io";

const index = () => {
  return (
    <div className="w-[90%] h-[800px] mx-auto max-sm:h-[60pc] max-sm:mb-8">
      <div className="w-96 flex">
        <div className=" w- h-[100%] sm:relative max-sm:left-5">
          <IoMdCall size={40} fill="gray " />
        </div>
        <div>
          <h1 className="text-3xl text-gray-600 mr w-72 ">فرم تماس با ما</h1>
        </div>
      </div>

      <div className="w-[50%] dark:bg-[#22445D;] mx-auto   ">
        <div className="h-[80px] w-[85%] border-b-2 mx-auto mt-4 font-sans text-xl text-gray-500 dark:bg-[#22445D;] 
         max-sm:border-none ">
          <h1 className=" dark:text-white max-sm:text-lg ">
            {" "}
            در کنار روش‌های که در برای ارتباط در نظر گرفته‌ایم،شما
            همچنین می‌توانید از طریق فرم زیر پیام خود را برای ما ارسال کنید.{" "}
          </h1>
        </div>
        <div className=" flex flex-wrap gap-9 h-[500px] w-[70%] mx-auto mt-9 max-sm:mt-56 max-sm:relative max-sm:left-10 ">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text dark:text-white"> نام</span>
            </div>
            <input
              type="text"
              placeholder=" اینجا بنویس"
              className="input input-bordered w-full max-w-xs  max-sm:w-56"
            />
            <div className="label"></div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text  dark:text-white">
                {" "}
                نام خانوادگی{" "}
              </span>
            </div>
            <input
              type="text"
              placeholder=" اینجا بنویس"
              className="input input-bordered w-full max-w-xs  max-sm:w-56"
            />
            <div className="label"></div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text  dark:text-white "> شماره </span>
            </div>
            <input
              type="text"
              placeholder=" اینجا بنویس"
              className="input input-bordered w-full max-w-xs max-sm:w-56"
            />
            <div className="label"></div>
          </label>

          <textarea className="textarea textarea-bordered  w-[320px] max-sm:h-32 " placeholder="پیام"></textarea>
        </div>

        <button className="btn btn-info text-white  relative top-10 right-80 max-sm:relative max-sm:right-36 max-sm:mt-2">
          ثبت اطلاعات
        </button>
      </div>
    </div>
  );
};

export default index;

import { Field, Form, Formik } from "formik";
import React from "react";
import { RiUserFill } from "react-icons/ri";
const index = () => {
  return (
    <div className="bg-white w-[100%] h-[800px] rounded-xl mt-10 dark:bg-slate-900">
      <div className="border-b-2 w-[95%] h-20 mx-auto">
        <h1 className="relative top-8 text-lg font-sans font-bold">
          ویرایش اطلاعات
        </h1>
      </div>
      <div className="w-[100%] h-[90%]">
        <div className="w-[95%] h-20 mt-10 mx-auto flex">
          <div className="w-20">
            <div className="avatar">
              <div className="ring-gray-300 ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
                <RiUserFill size={50} fill="gray" className="mx-auto mt-1" />
              </div>
            </div>
          </div>
          <div className="w-[90%] rounded-3xl h-[80%] bg-slate-200">
            <input type="file" className="mt-5 mr-5 dark:bg-slate-900" />
          </div>
        </div>
        <div className="w-[90%] rounded-3xl h-[10%] mx-auto">
          <h1>فایل های مجاز: JPG، PNG و GIF. حداکثر اندازه مجاز: 5MB</h1>
        </div>
        <div className="w-[90%] rounded-3xl h-[500px] mx-auto mt-2 flex ">
          <div className="w-[100%]  h-96 mt-16 mx-auto">
            <Formik>
              <Form>
                <Field
                  className="border-2 w-[40%] h-[50px] rounded-xl  border-slate-300 dark:bg-slate-600"
                  placeholder="نام"
                />
                <Field
                  className="border-2 w-[40%] h-[50px] rounded-xl mr-5  border-slate-300 dark:bg-slate-600"
                  placeholder="نام خانوادگی"
                />
                <Field
                  className="border-2 w-[40%] h-[50px] rounded-xl mt-10  border-slate-300 dark:bg-slate-600"
                  placeholder="شماره تلفن"
                />
                <Field
                
                  className="border-2 w-[40%] h-[50px] rounded-xl mt-10 mr-5   border-slate-300 dark:bg-slate-600"
                  placeholder="ایمیل"
                />
              </Form>
            </Formik> <button className="btn btn-active  btn-accent text-white mt-14 mr-[80%] w-28">تایید</button>
          </div>
         

        </div>
        
      </div>

      
    </div>
  );
};

export default index;

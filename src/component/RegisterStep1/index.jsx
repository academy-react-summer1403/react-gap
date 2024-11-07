import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const index = () => {
  return (
    <div className=" flex justify-center w-[90%] h-[600px] mx-auto mt-10">
      <div className="w-[40%] h-[100%] bg-[#FBF6F6;] rounded-2xl shadow-2xl sm:w-[100%] xl:w-[50%]">
        <h1 className=" relative right-14 top-12 text-2xl">ثبت نام</h1>
        <div className="flex flex-wrap justify-center mr-16 w-[90%] h-[75%] mt-20 sm:w-[80%]">
          <Formik
            initialValues={{ Mobile: "", PassWord: "" }}
            onSubmit={(values) => onsubmit(values)}
          >
            <Form>
              <Field
                name="Mobile"
                placeholder="شماره همراه"
                className="w-[100%] h-[60px] mt-4 px-36 border-2 rounded-xl border-blue-600"
              />

              <Field
                name="Mobile"
                placeholder=" ایمیل کاربر"
                className="w-[100%] h-[60px] mt-4 px-36 border-2 rounded-xl border-blue-600"
              />

              <Field
                name="Mobile"
                placeholder="رمز عبور"
                className="w-[100%] h-[60px] mt-4 px-36 border-2 rounded-xl border-blue-600"
              />

              <Field
                name="Mobile"
                placeholder="تکرار رمز عبور"
                className="w-[100%] h-[60px] mt-4 px-36 border-2 rounded-xl border-blue-600"
              />

              <label className="font-inter text-[#22445D] text-sm relative top-5 placeholder:">
                <input type="checkbox" />
                مرا به خاطر بسپار
              </label>

              <button className="btn btn-active btn-primary  w-[100%] h-[50px] bg-blue- text-white rounded-lg relative top-14">
                ادامه{" "}
              </button>
              <br />

              <br />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;

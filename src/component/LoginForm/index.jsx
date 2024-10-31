import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const index = () => {
  return (
    <section>
      <div >
         <div className="justify-center w-[90%] h-[600px] mx-auto">
        <div className="  flex w-[90%] h-[100%]">
          <NavLink to={"/"}>
            <div className=" relative top-5 lg:right-[550px] sm:right-[450px] xl:right-[450px]">
              <IoHome className="size-7 fill-[#158B68]   " />
            </div>
          </NavLink>

          <div className=" w-[50%] h-[100%] bg-[#FBF6F6;] rounded-r-2xl shadow-2xl  sm:w-[100%] xl:w-[50%] ">
            <h1 className=" relative right-14 top-12 text-2xl">
              ورود به سیستم
            </h1>
            <div className=" flex flex-wrap justify-center m-16 w-[70%] h-[75%] mt-20   sm:w-[80%]">
              <Formik
                initialValues={{ Mobile: "", PassWord: "" }}
                onSubmit={(values) => onsubmit(values)}
              >
                <Form>
                  <Field
                    name="Mobile"
                    placeholder="شماره همراه"
                    className=" w-[100%] h-[50px] mt-4 px-5 border-2 rounded-xl border-[#158B68] "
                  />
                  <Field
                    name="PassWord"
                    placeholder="رمز عبور"
                    className=" w-[100%] h-[50px] mt-4 relative px-5 border-2 rounded-xl border-[#158B68]"
                  />

                  <label className="font-inter text-[#22445D] text-sm relative top-5 text-white">
                    <input type="checkbox" />
                    مرا به خاطر بسپار
                  </label>

                  <button className="   w-[100%] h-[50px] bg-[#158B68;] text-white rounded-lg relative top-10">
                    تایید{" "}
                  </button>
                  <br />

                  <NavLink to={"/"}>
                    <button className="w-[100%] h-[50px] border-2 border-[#158B68] text-[#22445D] rounded-lg relative top-14 hover:text-blue-500 dark:text-white">
                      {" "}
                      بازگشت به صفحه اصلی
                    </button>
                  </NavLink>

                  <br />

                  <NavLink to={"/Step1"}>
                    <a
                      className="font-inter text-[#22445D] text- underline relative top-20  hover:text-[#4982d1] dark:text-white"
                      href="#"
                    >
                      یک حساب کاربری ایجاد کنید{" "}
                    </a>
                  </NavLink>

                  <NavLink to={"/NewPass"}>
                    <a
                      className="  lg:right-52 font-inter text-[#22445D] text-lg underline relative top-20 hover:text-[#4982d1]  dark:text-white sm:right-28 "
                      href="#"
                    >
                      {" "}
                      فراموشی رمز
                    </a>
                  </NavLink>
                </Form>
              </Formik>
            </div>
          </div>

          <div className="hidden lg:block w-[50%] h-[100%] bg-[#A4F6DE;] rounded-l-2xl dark:bg-[#22445D;]">
            <div className="w-[80%] h-[70%] mt-20 m-10 ">
              <img src="./verfy.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </section>
  );
};

export default index;

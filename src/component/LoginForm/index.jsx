import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <section>
      <div className="bg-[#eef3f9] dark:bg-[#22445D;]">
        <div className="flex justify-center w-[90%] h-[700px] mx-auto">
          <div className="bg-[#FBF6F6;] shadow-2xl sm:w-[100%] xl:w-[50%] mt-20 rounded-2xl  dark:bg-slate-900">
            <h1 className=" relative right-14 top-12 text-2xl">
              ورود به سیستم
            </h1>
            <div className=" flex flex-wrap justify-center m-16 w-[70%] h-96 mt-12 sm:w-[80%]">
              <Formik
                initialValues={{ Mobile: "", PassWord: "" }}
                onSubmit={(values) => onsubmit(values)}
              >
                <Form>
                  <Field
                    name="Mobile"
                    placeholder="شماره همراه"
                    className=" w-[100%] h-[50px] mt-4 px-5 border-2 rounded-xl border-blue-600 "
                  />
                  <Field
                    name="PassWord"
                    placeholder="رمز عبور"
                    className=" w-[100%] h-[50px] mt-4 relative px-5 border-2 rounded-xl  border-blue-600 "
                  />

                  <label className="font-inter text-[#22445D] text-sm relative top-5 dark:text-white">
                    <input type="checkbox"/>
                    مرا به خاطر بسپار
                  </label>

                  <button className="btn btn-primary  w-[100%] h-[50px] bg-blue-600 text-white rounded-lg relative top-10">
                    تایید
                  </button>
                  <br />

                  <NavLink to={"/"}>
                    <button className="btn btn-outline btn-primary w-[100%] h-[50px] border-2 border-blue-600 text-[#22445D] rounded-lg relative top-14 hover:text-blue-500 dark:text-white ">
                      {" "}
                      بازگشت به صفحه اصلی
                    </button>
                  </NavLink>

                  <br />

                  <NavLink to={"/Step1"}>
                    <a
                      className="font-inter text-[#22445D] text- underline relative top-32  hover:text-[#4982d1] dark:text-white"
                      href="#"
                    >
                      یک حساب کاربری ایجاد کنید{" "}
                    </a>
                  </NavLink>

                  <NavLink to={"/NewPass"}>
                    <a
                      className="lg:right-52 font-inter text-[#22445D] text-lg underline relative top-32 hover:text-[#4982d1] dark:text-white sm:right-28 "
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
        </div>
      </div>
    </section>
  );
};

export default index;

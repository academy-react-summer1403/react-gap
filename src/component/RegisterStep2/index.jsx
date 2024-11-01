import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div className=" flex justify-center w-[90%] h-[600px] mx-auto mt-10">
      <div className="w-[50%] h-[100%] bg-[#FBF6F6;] rounded-2xl shadow-2xl sm:w-[100%] xl:w-[50%]">
        <h1 className=" relative right-14 top-32 text-2xl">ورود به سیستم</h1>
        <div className="flex flex-wrap justify-center mr-16 w-[90%] h-[75%] mt-40  sm:w-[80%]">
          <Formik
            initialValues={{ Mobile: "", PassWord: "" }}
            onSubmit={(values) => onsubmit(values)}
          >
            <Form>
              <Field
                name="Mobile"
                placeholder="ایمیل خود را وارد کنید"
                className="w-[100%] h-[60px] mt-10 px-36 border-2 rounded-xl border-blue-600"
              />

              <button className=" w-[100%] h-[50px] bg-blue-600 text-white rounded-lg relative top-10">
                ادامه{" "}
              </button>

              <br />
              <NavLink to={"/Step1"}>
                <button className=" w-[100%] h-[50px] border-2 border-blue-600 text-blue-600 rounded-lg relative top-14">
                  بازگشت به صفحه قبل{" "}
                </button>
              </NavLink>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;

import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
const index = () => {
  // const validation = yup.object().shape({
  //   lastName: yup.string().required("پر کردن این فیلد اجباریست"),
  //   email: yup.string().required("پر کردن این فیلد اجباریست"),
  //   txt: yup.string().required("پر کردن این فیلد اجباریست"),
  // });
  return (
    <div className=" h-[800px] max-sm:mt- ">
      <div className=" h-[100px] text-center relative top-[30px]   ">
        <h1 className="text-[#22445D] text-4xl dark:text-white">
          {" "}
          پیشنهادات و انتقادات{" "}
        </h1>

        <p className="text-[#22445D] text-2xl font-normal mt-4  dark:text-white">
          {" "}
          نظرات خود را با ما درمیان بگذارید{" "}
        </p>
      </div>

      <div className="flex justify-center gap-5 w-[90%] h-[500px] mx-auto relative top-[60px] left-[150px]">
        <div className="w-44 h-8 relative right-[350px] bottom-[100px] ">
          <img src="./flash4.png" className="max-sm:hidden" />
        </div>
        <div>
          <div className="w-[100%] h-[300px] mx-auto mt-20">
            <Formik
              initialValues={{ lastName: "", email: "", txt: "" }}
            
            >
              <Form>
                <Field
                  className="w-[100%] h-[60px] border-2 border-[#1b426b] mt-2 rounded-lg bg-[#fff] outline-none 
                  max-sm:w-[100%]
                   max-sm:mr-32
                  placeholder: text-xl
                   placeholder:text-[#22445D]
                    placeholder:p-6
                    placeholder:font-medium"
                  name="lastName"
                  placeholder="نام و نام خانوادگی..."
                />
                <ErrorMessage
                  name="lastName"
                  component={"p"}
                  className="text-[#16153f]"
                />
                <Field
                  className="w-[100%] h-[60px] border-2 border-[#1b426b]  mt-3 rounded-xl bg-[#fff] outline-none
                  max-sm:w-[100%]
                   max-sm:mr-32
                    placeholder: text-xl
                   placeholder:text-[#22445D;]
                    placeholder:p-6 
                     placeholder:font-medium"
                  name="email"
                  placeholder="ایمیل ..."
                />
                <ErrorMessage
                  name="email"
                  component={"p"}
                  className="text-[#16153f]"
                />
                <Field
                  className="w-[100%] h-[140px] border-2 border-[#1b426b] mt-3 rounded-lg bg-[#fff] outline-none
                   max-sm:w-[100%]
                   max-sm:mr-32
                    placeholder: text-xl
                   placeholder:text-[#22445D;]
                    placeholder:p-6
                     placeholder:font-medium"
                  name="txt"
                  placeholder="متن ..."
                />
                {/* <ErrorMessage
                  name="txt"
                  component={"p"}
                  className="text-[#16153f] max-sm:mr-60"
                /> */}
              </Form>
            </Formik>
          </div>

          <button
            type="submit "
            className="btn btn-active  w-[120px] h-[50px] text-white rounded-lg mt-[70px] shadow-xl bg-[#df821f] max-sm:mr-28 "
          >
            {" "}
            ارسال
          </button>
        </div>

        <div className="hidden xl:block w-[600px] h-[300px] mt-20">
          <img className="w-[100%] h-[100%]" src="./tamas bama.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default index;

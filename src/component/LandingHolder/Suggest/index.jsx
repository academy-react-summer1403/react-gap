import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
const index = () => {
  const validation = yup.object().shape({
    lastName: yup.string().required("پر کردن این فیلد اجباریست"),
    email: yup.string().required("پر کردن این فیلد اجباریست"),
    txt: yup.string().required("پر کردن این فیلد اجباریست"),
  });
  return (
    <div className=" h-[800px]">
      <div className=" h-[100px] text-center relative top-[30px] ">
        <h1 className="text-[#22445D;] text-4xl"> پیشنهادات و انتقادات </h1>

        <p className="text-[#22445D;] text-2xl font-normal mt-4">
          {" "}
          نظرات خود را با ما درمیان بگذارید{" "}
        </p>
      </div>

      <div className="flex justify-center gap-5 w-[90%] h-[500px] mx-auto relative top-[60px]">
        <div className=" w-[600px] h-[500px]">
          <div className="w-[600px] h-[300px] mx-auto mt-20">
            <Formik
              initialValues={{ lastName: "", email: "", txt: "" }}
              validationSchema={validation}
            >
              <Form>
                <Field
                  className="w-[600px] h-[60px] border-2 border-[#007aff] mt-2 rounded-lg bg-[#FBF6F6;] outline-none 
                  placeholder: text-xl
                   placeholder:text-[#22445D;]
                    placeholder:p-6
                    placeholder:font-medium"
                  name="lastName"
                  placeholder="نام و نام خانوادگی..."
                />
                <ErrorMessage
                  name="lastName"
                  component={"p"}
                  className="text-[#12926C]"
                />
                <Field
                  className="w-[600px] h-[60px] border-2 border-[#007aff]  mt-3 rounded-xl bg-[#FBF6F6;] outline-none
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
                  className="text-[#12926C]"
                />
                <Field
                  className="w-[600px] h-[140px] border-2 border-[#007aff] mt-3 rounded-lg bg-[#FBF6F6;] outline-none
                    placeholder: text-xl
                   placeholder:text-[#22445D;]
                    placeholder:p-6
                     placeholder:font-medium"
                  name="txt"
                  placeholder="متن ..."
                />
                <ErrorMessage
                  name="txt"
                  component={"p"}
                  className="text-[#12926C]"
                />
              </Form>
            </Formik>
          </div>
          <button
            type="submit "
            className="w-[120px] h-[50px] bg-[#007aff;] text-white rounded-lg mt-[70px] shadow-xl"
          >
            ارسال
          </button>
        </div>

        <div className="hidden xl:block w-[600px] h-[500px]">
          <img className="w-[100%] h-[100%]" src="./img1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default index;

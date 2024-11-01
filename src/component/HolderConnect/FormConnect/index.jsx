import { Field, Form, Formik } from "formik";
import React from "react";
import { IoMdCall } from "react-icons/io";

const index = () => {
  return (
    <div className="w-[90%] h-[400px] border-2 mx-auto">
      <div className="w-96 flex">
        <div className=" w- h-[100%]">
          <IoMdCall size={40} fill="gray" />
        </div>
        <div>
          <h1 className="text-3xl text-gray-600 mr w-72">فرم تماس با ما</h1>
        </div>
      </div>

<div className="w-[30%] h-[300px] mx-auto flex flex-wrap gap-9 justify-center">
 <Formik initialValues={{ LastName: "", email: "", txt: "" }}>
        <Form>
          <Field name="LastName" placeholder="نام خود را وارد کنید" className="w-96 h-10 bg-base-300 rounded-xl mt-6" />
          <Field name="email" placeholder="ایمیل خود را وارد کنید" className="w-96 h-10 bg-base-300 rounded-xl mt-8" />
          <Field name="text" placeholder="پیام خودتون رو برامون ارسال کنید" className="w-96 h-32 bg-base-300 rounded-xl mt-8 placeholder:" />
        </Form>
      </Formik> 
</div>
      
    </div>
  );
};

export default index;

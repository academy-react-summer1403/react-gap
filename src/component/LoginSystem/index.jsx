import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";



const index = () => { 
  return (
    <div className=" flex justify-center w-[90%] h-[600px] mx-auto mt-10">
      <div className="flex w-[90%] h-[100%] ">
        <NavLink to={'/'}>
          <div className="relative top-5 right-[580px]">
              <IoHome  className="size-7 fill-[#158B68]"/>
              </div> 
        </NavLink>

        <div className="w-[50%] h-[100%] bg-[#FBF6F6;] rounded-r-2xl shadow-2xl">
        <h1 className=" relative right-14 top-12 text-2xl">
                        ورود به سیستم
              </h1>
          <div className="flex flex-wrap justify-center mr-5 w-[90%] h-[55%] mt-32">
            <Formik 
            initialValues={{Mobile:"", PassWord:""}}
            onSubmit={(values) => onsubmit(values)}
            >
              <Form>
                
            <Field name='PassWord'placeholder='کد تایید' 
            className=" w-[100%] h-[60px] relative px-12 border-2 rounded-xl border-[#158B68]"/>

            

                <button className="w-[100%] h-[60px] bg-[#158B68;] text-white rounded-lg relative top-20"> ورود{" "}
                </button>


                    <NavLink to={'/Login'}>
                    <button className=" w-[100%] h-[60px] border-2 border-[#158B68] text-[#22445D] rounded-lg relative top-24 hover:text-blue-500">
                      {" "}
                      بازگشت به صفحه قبل</button>
                    </NavLink>
              </Form>
            </Formik>
          </div>
        </div>

        <div className="flex justify-center w-[50%] h-[100%] bg-[#A4F6DE;] rounded-l-2xl">
          <div className="w-[80%] h-[70%] mt-20  ">
            <img src="./verfy.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";



const index = () => { 
return (
    <div className=" flex justify-center w-[90%] h-[600px] mx-auto mt-10">
    <div className="flex w-[90%] h-[100%] ">
        <NavLink to={'/'}>
        <div className="relative top-5 right-[580px] lg:right-[550px] sm:right-[450px]">
            <IoHome  className="size-7 fill-[#158B68]"/>
            </div> 
        </NavLink>

        <div className="w-[40%] h-[100%] bg-[#FBF6F6;] rounded-r-2xl shadow-2xl sm:w-[100%] xl:w-[50%]">
        <h1 className=" relative right-14 top-12 text-2xl">
                ثبت نام
            </h1>
        <div className="flex flex-wrap justify-center mr-6 w-[90%] h-[75%] mt-20 sm:w-[80%]">
        
            <Formik 
            initialValues={{Mobile:"", PassWord:""}}
            onSubmit={(values) => onsubmit(values)}
            >
            <Form>
                <Field name='Mobile' placeholder='شماره همراه' 
                className='w-[100%] h-[60px] mt-4 px-36 border-2 rounded-xl border-[#158B68]'/>
            
            <Field name='Mobile' placeholder=' ایمیل کاربر' 
                className='w-[100%] h-[60px] mt-4 px-36 border-2 rounded-xl border-[#158B68]'/>
            
            <Field name='Mobile' placeholder='رمز عبور' 
                className='w-[100%] h-[60px] mt-4 px-36 border-2 rounded-xl border-[#158B68]'/>
            
            <Field name='Mobile' placeholder='تکرار رمز عبور' 
                className='w-[100%] h-[60px] mt-4 px-36 border-2 rounded-xl border-[#158B68]'/>

<label className="font-inter text-[#22445D] text-sm relative top-5">
                  <input type="checkbox" />مرا به خاطر بسپار
                </label>
            
                
                

                <button className=" w-[100%] h-[50px] bg-[#158B68;] text-white rounded-lg relative top-14">
                ادامه{" "}
                </button>
                <br />

            


                <br />

              
    
            </Form>
            </Formik>
        </div>
        </div>

        <div className="hidden lg:block  w-[50%] h-[100%] bg-[#A4F6DE;] rounded-l-2xl">
        <div className="w-[60%] h-[60%] mt-36 m-28">
            <img src="./stap2.png" alt="" />
        </div>
        </div>
    </div>
    </div>
);
};

export default index;

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

        <div className="w-[50%] h-[100%] bg-[#FBF6F6;] rounded-r-2xl shadow-2xl sm:w-[100%] xl:w-[50%]">
        <h1 className=" relative right-14 top-32 text-2xl">
            ورود به سیستم
            </h1>
        <div className="flex flex-wrap justify-center mr-6 w-[90%] h-[75%] mt-40  sm:w-[80%]">
        
            <Formik 
            initialValues={{Mobile:"", PassWord:""}}
            onSubmit={(values) => onsubmit(values)}
            >
            <Form>
                <Field name='Mobile' placeholder='ایمیل خود را وارد کنید' 
                className='w-[100%] h-[60px] mt-10 px-36 border-2 rounded-xl border-[#158B68]'/>
            
                

                
                <button className=" w-[100%] h-[50px] bg-[#158B68;] text-white rounded-lg relative top-10">
                ادامه{" "}
                </button>

                <br />
                <NavLink to={'/Step1'}>
            <button className=" w-[100%] h-[50px] border-2 border-[#158B68]  text-[#158B68] rounded-lg relative top-14">
                بازگشت به صفحه قبل{" "}
                </button>    
                </NavLink>
        
            

    
            
    
            </Form>
            </Formik>
        </div>
        </div>

        <div className=" hidden lg:block  w-[50%] h-[100%] bg-[#A4F6DE;] rounded-l-2xl">
        <div className="w-[60%] h-[60%] mt-28 m-28  ">
            <img src="./forgot.png" alt="" />
        </div>
        </div>
    </div>
    </div>
);
};

export default index;

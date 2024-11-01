import { Field, Form, Formik } from "formik";
import React from "react";





const index = () => { 
return (
    <div className=" flex justify-center w-[90%] h-[600px] mx-auto mt-10">
    

        <div className="w-[50%] h-[100%] bg-[#FBF6F6;] rounded-2xl shadow-2xl  sm:w-[100%] xl:w-[50%]">
        <h1 className=" relative right-14 top-32 text-2xl">
                   تغییر رمز 
            </h1>
        <div className="flex flex-wrap justify-center mr-16 w-[90%] h-[75%] mt-40 sm:w-[80%]">
        
            <Formik 
            initialValues={{Mobile:"", PassWord:""}}
            onSubmit={(values) => onsubmit(values)}
            >
            <Form>
                <Field name='Mobile' placeholder='رمز عبور' 
                className='w-[100%] h-[60px] mt-10 px-36 border-2 rounded-xl border-blue-600'/>
                <Field name='Mobile' placeholder=' تکرار رمز عبور' 
                className='w-[100%] h-[60px] mt-4 px-36 border-2 rounded-xl border-blue-600'/>
            
                

                
                <button className=" w-[100%] h-[50px] bg-blue-600 text-white rounded-lg relative top-10">
                ادامه{" "}
                </button>

                <br />

        

    
            
    
            </Form>
            </Formik>
        </div>
        </div>

        
    </div>
);
};

export default index;

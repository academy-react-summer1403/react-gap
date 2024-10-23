import { Field, Form, Formik } from "formik";
import React from "react";
import { BiHome } from "react-icons/bi";
const HolderConnect = () => {
  return (
    <div className="flex w-full h-[850px] mt-20">
      <div className="w-[45%] h-[90%]">
        <div className="w-[90%] mr-20">
          <h1 className="text-4xl">با ما در ارتباط باشید</h1>
          <h2 className="text-2xl mt-3">
            لورم ایپسوم بسیار فراگیر است زیرا بسیار همه کاره است. تعداد
            پاراگراف‌هایی را که می‌خواهید انتخاب کنید، کپی کنید
          </h2>
        </div>
        <div className="flex gap-4 flex-wrap w-[80%] h-[70%] mt-28 mr-20 ">
          <div className="w-[100%] h-36">
            <div className=" w-[140px] h-[100%] rounded-2xl shadow-2xl">
              <BiHome className=" fill-[#158B68] size-28 mx-auto" />

            </div>
            
          </div>
          <div className="w-[100%] h-36">
            <div className="w-[140px] h-[100%] rounded-2xl shadow-2xl">
              <BiHome className=" fill-[#158B68] size-28 mx-auto" />
            </div>
          </div>

          <div className="w-[100%] h-36">
            <div className="w-[140px] h-[100%] rounded-2xl shadow-2xl">
              <BiHome className=" fill-[#158B68] size-28 mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[90%]">
        <div className="border-2 w-[85%] h-[100%] mx-auto rounded-[30px] bg-[#FBF6F6;] shadow-2xl">
          <div className="flex justify-center w-[80%] mt-20 mr-16">
            <Formik
              initialValues={{
                Lastname: "",
                Email: "",
                Phone: "",
                TextMessage: "",
              }}
              onSubmit={(values) => onsubmit(values)}
            >
              <Form>
                <Field
                  name="Lastname"
                  placeholder="نام و نام خانوادگی"
                  className="border-2 border-[#158B68] w-[100%] h-[70px]
               rounded-xl placeholder:text-[#807A7A;]
                placeholder:text-2xl 
                placeholder:relative 
                placeholder:right-6"
                />
                <Field
                  name="Email"
                  placeholder="ایمیل"
                  className="border-2 border-[#158B68] w-[100%] h-[70px]
                            rounded-xl placeholder:text-[#807A7A;]
                             placeholder:text-2xl 
                             placeholder:relative 
                             placeholder:right-6 mt-7"
                />
                <Field
                  name="Phone"
                  placeholder="شماره تماس"
                  className="border-2 border-[#158B68] w-[100%] h-[70px]
               rounded-xl placeholder:text-[#807A7A;]
                placeholder:text-2xl 
                placeholder:relative 
                placeholder:right-6 mt-7"
                />
                <Field
                  name="TextMessage"
                  placeholder="متن پیام"
                  className="border-2 border-[#158B68] w-[100%] h-[270px]
               rounded-xl placeholder:text-[#807A7A;]
                placeholder:text-2xl 
                placeholder:relative 
                placeholder:right-6
                placeholder:bottom-24 mt-7"
                />

<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-40 h-16 bg-[#5BE1B9;] rounded-2xl text-[#ffffff] text-xl mt-8">ارسال</button>
                {/* <button
                  type="submit"
                  className="w-40 h-16 bg-[#5BE1B9;] rounded-2xl text-[#ffffff] text-xl mt-8"
                >
                  ارسال
                </button> */}
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolderConnect;

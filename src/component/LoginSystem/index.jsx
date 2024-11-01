import { Field, Form, Formik } from "formik";
import React from "react";
import { Navigate, NavLink, useNavigation } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const index = () => {
  // const navigate = useNavigation()
  // const onsubmit = async(values)=>{
  //   const obj = {phoneOrGmail:values.Mobile , password:values.PassWord , rememberMe:false}
  //   const res = await LoginApi(obj)
  //   if(res.success){
  //     setData("Login", res.token) alert('')
  //     navigate("/")
  //   }
  //   else(alert(''))
  //    console.log(res)

  // }

  return (
    <div className=" flex justify-center w-[90%] h-[600px] mx-auto mt-20  dark:[#000000]">
      <div className=" w-[50%] h-[100%] bg-[#FBF6F6;] rounded-2xl shadow-2xl sm:w-[100%] xl:w-[50%]  dark:bg-[#34445D;]">
        <h1 className=" relative right-14 top-12 text-2xl dark:text-white">ورود به سیستم</h1>
        <div className="flex flex-wrap justify-center mr-16 w-[90%] h-[55%] mt-32  sm:w-[80%]">
          <Formik
            initialValues={{ Mobile: "", PassWord: "" }}
            onSubmit={(values) => onsubmit(values)}
          >
            <Form>
              <Field
                name="PassWord"
                placeholder="کد تایید"
                className=" w-[100%] h-[60px] relative px-12 border-2 rounded-xl border-blue-600"
              />

              <button className="w-[100%] h-[60px] bg-blue-600 text-white rounded-lg relative top-20">
                {" "}
                ورود{" "}
              </button>

              <NavLink to={"/Login"}>
                <button className=" w-[100%] h-[60px] border-2 border-blue-600 text-[#22445D] rounded-lg relative top-24 hover:text-blue-500">
                  {" "}
                  بازگشت به صفحه قبل
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

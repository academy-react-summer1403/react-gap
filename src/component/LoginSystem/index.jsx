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
    <div className=" flex justify-center w-[100%] h-[730px] mx-auto bg-slate-100 ">
        {/* <div className="w-[180px] h-[120px] -ml-36 max-sm:-mr-[48px] max-sm:mt-[2%]  ">
          <img
            src="./logoabi.png "
            className=" max-sm:w-[85%] max-sm:justify-center max-sm:block relative top-16 right-56 "
          />
        </div> */}
      <div className="w-[500px] h-[550px] mt-44 bg-white rounded-xl ">
        
        <h1 className="text-center top-10 text-2xl dark:text-white relative font-bold">ورود به سیستم</h1>
        <div className="flex flex-wrap justify-center mr-16 w-[90%] h-[55%] mt-32  max-sm:w-[80%]">
          <Formik
            initialValues={{ Mobile: "", PassWord: "" }}
            onSubmit={(values) => onsubmit(values)}
          >
            <Form>
              <Field
                name="PassWord"
                placeholder="کد تایید"
                className=" w-[90%] h-[60px] relative px-12 bg-slate-200 rounded-xl "
              />

              <button className="btn w-[90%] h-[60px] bg-green-600 text-white rounded-lg relative top-20">
                {" "}
                ورود{" "}
              </button>

            

              <NavLink to={"/Login"}>
                <button className=" w-[90%] h-[60px] bg-slate-200 text-[#22445D] rounded-lg relative top-24 hover:text-blue-500">
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

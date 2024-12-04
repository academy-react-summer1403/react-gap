import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getData } from "../../core/storage/localStorage.storage";
import { signUpThreeAPI } from "../../core/Servises/api/auth/Register.api";

const index = () => {
  const tel = getData("phoneNumber");
  const navigate = useNavigate();

  const onsubmit = async (values) => {
    const userInfo = {
      phoneNumber: tel,
      password: values.pass,
      gmail: values.email,
    };
    console.log("userInfo",userInfo);

    const user = await signUpThreeAPI(userInfo);
    console.log("user",user);

    navigate("/login");
  };

  return (
    <div className=" flex justify-center w-[100%] h-[730px] bg-slate-100">
      <div className="w-[30%] h-[500px] mt-40 bg-white rounded-2xl max-sm:w-[100%]">
        <h1 className=" relative right-14 top-10 text-2xl"> ثبت نام </h1>
        <div className="flex flex-wrap justify-center mr-16 w-[90%] h-[75%] mt-10  sm:w-[80%]">
          <Formik
            initialValues={{ email: "", pass: "", confirmPass: "" }}
            onSubmit={(values) => onsubmit(values)}
          >
            <Form>
              <Field
                value={tel}
                name="phoneNum"
                placeholder="شماره همراه"
                className="w-[100%] h-[60px] mt-10 px-36 border-2 rounded-xl bg-slate-200"
              />
              <Field
                name="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-[100%] h-[60px] mt-10 px-36 border-2 rounded-xl bg-slate-200"
              />
              <Field
                name="pass"
                placeholder="رمز عبور"
                className="w-[100%] h-[60px] mt-10 px-36 border-2 rounded-xl bg-slate-200"
              />

              <button className=" w-[100%] h-[50px] bg-green-600 text-white rounded-lg relative top-10">
                ثبت نام{" "}
              </button>

              <br />
              <NavLink to={"/Step2"}>
                <button className=" w-[100%] h-[50px] bg-slate-200 text-blue-600 rounded-lg relative top-14">
                  بازگشت به صفحه قبل{" "}
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

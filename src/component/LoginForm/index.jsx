import { Field, Form, Formik } from "formik";
import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { setData } from "../../core/storage/localStorage.storage";
import { signInAPI } from "../../core/Servises/api/auth/Login.api";

const index = () => {
  const navigation = useNavigate();
  const onSubmit = async (values) => {
    const obj = {
      phoneOrGmail: values.phone,
      password: values.pass,
      rememberMe: true,
    };
    const res = await signInAPI(obj);
    console.log(res)
    if (res.success) {
      setData("login", res.token);
      alert(res.message);
      navigation("/");
    } else {
      alert(res.message);
    }
    console.log(res);
  };

  return (
    <section>
      <div className="bg-[#eef3f9] dark:bg-[#22445D;]">
        <div className="flex justify-center w-[90%] h-[700px] mx-auto">
          <div className="bg-[#FBF6F6;] shadow-2xl sm:w-[100%] xl:w-[50%] mt-20 rounded-2xl  dark:bg-slate-900">
            <h1 className=" relative right-14 top-12 text-2xl">
              ورود به سیستم
            </h1>
            <div className="flex flex-wrap justify-center m-16 w-[70%] h-96 mt-12 sm:w-[80%]">
              <Formik
                initialValues={{ phone: "", pass: "" }}
                onSubmit={onSubmit}
              >
                <Form>
                  <Field
                    name="phone"
                    placeholder="شماره همراه"
                    className="w-[100%] h-[50px] mt-4 px-5 border-2 rounded-xl border-blue-600 dark:bg-slate-700"
                  />
                  <Field
                    name="pass"
                    placeholder="رمز عبور"
                    className="w-[100%] h-[50px] mt-4 relative px-5 border-2 rounded-xl  border-blue-600  dark:bg-slate-700"
                  />

                  <div className=" ml-[90%] flex text-[#22445D] text-sm relative top-5 dark:text-white w-[200px]">
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-primary"
                      />
                      <span className="label-text w-[150px] relative text-center dark:text-white">
                        {" "}
                        مرا به خاطر بسپار
                      </span>
                    </label>
                  </div>

                  <button className="btn btn-primary w-[100%] h-[50px] bg-blue-600 text-white rounded-lg relative top-10">
                    تایید
                  </button>
                  <br />

                  <NavLink to={"/"}>
                    <button className="btn btn-outline btn-primary w-[100%] h-[50px] border-2 border-blue-600 text-[#22445D] rounded-lg relative top-14 hover:text-blue-500 dark:text-white ">
                      {" "}
                      بازگشت به صفحه اصلی
                    </button>
                  </NavLink>

                  <br />

                  <NavLink to={"/Step1"}>
                    <a
                      className="font-inter text-[#22445D] text- underline relative top-32  hover:text-[#4982d1] dark:text-white"
                      href="#"
                    >
                      یک حساب کاربری ایجاد کنید{" "}
                    </a>
                  </NavLink>

                  <NavLink to={"/NewPass"}>
                    <a
                      className="lg:right-52 font-inter text-[#22445D] text-lg underline relative top-32 hover:text-[#4982d1] dark:text-white sm:right-28 "
                      href="#"
                    >
                      {" "}
                      فراموشی رمز
                    </a>
                  </NavLink>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;

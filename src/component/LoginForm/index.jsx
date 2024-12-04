import { Field, Form, Formik } from "formik";
import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { setData } from "../../core/storage/localStorage.storage";
import { signInAPI } from "../../core/Servises/api/auth/Login.api";
import { FaPhoneAlt } from "react-icons/fa";
const index = () => {
  const navigation = useNavigate();
  const onSubmit = async (values) => {
    const obj = {
      phoneOrGmail: values.phone,
      password: values.pass,
      rememberMe: true,
    };
    const res = await signInAPI(obj);
    console.log(res);
    if (res.success) {
      setData("login", res.token);
      navigation("/");
    } else {
      alert(res.message);
    }
    console.log(res);
  };

  return (
    <section>
      <div className="bg-slate-100">
        {/* <div className="w-[180px] h-[120px] relative top-24 right-[45%] max-sm:ml-[60px] max-sm:mt-[2%] ">
          <img
            src="./logoabi.png "
            className=""
          />
        </div> */}

        <div className="flex justify-center w-[60%] bg-slate-100 mx-auto">
          <div className=" sm:w-[100%] xl:w-[50%] mt-20 rounded-2xl bg-white">
            <h1 className=" relative text-center font-bold text-2xl">
              ورود به سیستم
            </h1>

            <NavLink to={"/Step1"}>
              <a
                className="font-inter text-[#22445D] relative top-10 flex mr-20"
                href="#"
              >
                <h1> حساب کاربری ندارید؟ </h1>
                <h1 className="text-green-600 underline hover:text-[#4982d1] mr-2">
                  ثبت نام کنید
                </h1>
              </a>
            </NavLink>
            <div className="flex flex-wrap justify-center m-16 w-[70%] h-96 mt-12 sm:w-[80%]">
              <Formik
                initialValues={{ phone: "", pass: "" }}
                onSubmit={onSubmit}
              >
                <Form>
                  <Field
                    name="phone"
                    placeholder="شماره همراه"
                    className="w-[100%] h-[50px] mt-4 px-5 border-2 rounded-xl bg-slate-200"
                  />

                  <Field
                    name="pass"
                    placeholder="رمز عبور"
                    className="w-[100%] h-[50px] mt-4 relative px-5 border-2 rounded-xl bg-slate-200"
                  />

                  <div className=" ml-[90%] flex text-[#22445D] text-sm relative top-5 w-[200px]">
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

                  <button className="btn w-[100%] h-[50px] bg-green-600 text-white rounded-lg relative top-10">
                    تایید
                  </button>
                  <br />

                  <NavLink to={"/"}>
                    <button className="btn  w-[100%] h-[50px] border-2 bg-slate-200 text-[#22445D] rounded-lg relative top-14 hover:text-blue-500 dark:text-white">
                      {" "}
                      بازگشت به صفحه اصلی
                    </button>
                  </NavLink>

                  <br />

                  <NavLink to={"/NewPass"}>
                    <a
                      className="lg:right-52 font-inter text-[#22445D] text-lg underline relative -mr-36 top-24 hover:text-[#4982d1] max-sm:relative max-sm:right-10"
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

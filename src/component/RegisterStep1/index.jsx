import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { setData } from "../../core/storage/localStorage.storage";
import { signUpOneAPI } from "../../core/Servises/api/auth/Register.api";

const index = () => {
  const navigate = useNavigate();

  const onsubmit = async (values) => {
    const userPhoneNum = {
      phoneNumber: values.Mobile,
    };
    console.log("ddddddd", userPhoneNum);

    const user = await signUpOneAPI(userPhoneNum);
    console.log(user);

    setData("phoneNumber", userPhoneNum.phoneNumber);

    console.log("ccccccccc", setData);

    navigate("/Step2");
  };

  return (
    <div className=" flex justify-center w-[90%] h-[600px] mx-auto mt-10">
      <div className="w-[40%] h-[100%] bg-[#FBF6F6;] rounded-2xl shadow-2xl sm:w-[100%] xl:w-[50%]">
        <h1 className=" relative right-14 top-5 text-2xl">ثبت نام</h1>
        <div className="flex flex-wrap justify-center mr-16 w-[90%] h-[75%] mt-20 sm:w-[80%]">
          <Formik
            initialValues={{ Mobile: "" }}
            onSubmit={(values) => onsubmit(values)}
          >
            <Form>
              <Field
                name="Mobile"
                placeholder="شماره همراه"
                className="w-[100%] h-[60px] mt-4 px-36 border-2 rounded-xl border-blue-600"
              />

              <button className="btn btn-active btn-primary w-[100%] h-[50px] bg-blue- text-white rounded-lg relative top-14">
                ادامه{" "}
              </button>
              <br />
            

              <NavLink to={"/"}>
                <button className="mt-5 w-[100%] h-[60px] border-2 border-blue-600 text-[#22445D] rounded-lg relative top-14 hover:text-blue-500">
                  {" "}
                  بازگشت به صفحه اصلی
                </button>
              </NavLink>
              <br />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;

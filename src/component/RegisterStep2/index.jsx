import { Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../../core/storage/localStorage.storage";
import { signUpTwoAPI } from "../../core/Servises/api/auth/Register.api";

const index = () => {
  const navigate = useNavigate();

  const onsubmit = async (values) => {
    const tel = getData("phoneNumber");
    // console.log("phoneNumber", tel);

    const obj = {
      phoneNumber: tel,
      verifyCode: values.verCode,
    };
    console.log("userVerify", obj);

    const user = await signUpTwoAPI(obj);
    console.log("user", user);

    navigate("/Step3");
  };

  return (
    <div className=" flex justify-center w-[90%] h-[600px] mx-auto mt-10">
      <div className="w-[50%] h-[100%] bg-[#FBF6F6;] rounded-2xl shadow-2xl sm:w-[100%] xl:w-[50%]">
        <h1 className=" relative right-14 top-10 text-2xl">ثبت نام</h1>
        <div className="flex flex-wrap justify-center mr-16 w-[90%] h-[75%] mt-14  sm:w-[80%]">
          <Formik
            initialValues={{ verCode: "" }}
            onSubmit={(values) => onsubmit(values)}
          >
            <Form>
              <Field
                name="verCode"
                placeholder="کد تایید"
                className="w-[100%] h-[60px] mt-10 px-36 border-2 rounded-xl border-blue-600"
              />

              <button
                type="submit"
                className=" w-[100%] h-[50px] bg-blue-600 text-white rounded-lg relative top-10"
              >
                ادامه{" "}
              </button>

              <br />
            </Form>
          </Formik>

          <button
            className=" w-[92%] h-[50px] border-2 border-blue-600  text-blue-800 rounded-lg relative -top-14"
          >
            <Link to="/Step1">بازگشت به صفحه قبل </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;

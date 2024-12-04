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
    <div className=" flex justify-center w-[100%] h-[735px] bg-slate-100">
      <div className="w-[30%] h-[500px] bg-white mt-40 rounded-2xl max-sm:w-[100%]">
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
                className="w-[90%] h-[60px] mt-10 px-36 border-2 rounded-xl bg-slate-200"
              />

              <button
                type="submit"
                className=" w-[90%] h-[50px] bg-green-600 text-white rounded-lg relative top-10"
              >
                ادامه{" "}
              </button>

              <button className=" w-[90%] h-[50px] bg-slate-200 text-blue-800 rounded-lg relative top-14">
                <Link to="/Step1">بازگشت به صفحه قبل </Link>
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

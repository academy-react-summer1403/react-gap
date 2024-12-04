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
    <div className="flex justify-center w-full h-[730px] bg-slate-100">
      <div className=" w-[30%] h-[500px] bg-white rounded-2xl mt-48 max-sm:w-[100%] max-md:[100%]">
        <h1 className=" relative top-5 text-center text-2xl">ثبت نام</h1>
        <div className=" w-[90%] mr-10 flex flex-wrap justify-center h-[500px] max-sm:w-[80%] mt-10">
          <Formik
            initialValues={{ Mobile: "" }}
            onSubmit={(values) => onsubmit(values)}
          >
            <Form>
              <Field
                name="Mobile"
                placeholder="شماره همراه"
                className="w-[90%] h-[60px] mt-4 px-36 border-2 rounded-xl"
              />

              <button className="btn btn-active bg-green-600 w-[90%] h-[50px] bg-blue- text-white rounded-lg relative top-14">
                ادامه{" "}
              </button>
              <br />
            

              <NavLink to={"/"}>
                <button className="mt-5 w-[90%] h-[50px] bg-slate-200 text-[#22445D] rounded-lg relative top-14 hover:text-blue-500">
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

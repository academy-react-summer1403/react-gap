import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();

  const onsubmit = async (values) => {
    const userPhoneNum = {
      phoneNumber: values.Mobile,
    };
    console.log("ddddddd", userPhoneNum);

    const user = await ForgetPassOneAPI(userPhoneNum);
    console.log(user);

    setData("phoneNumber", userPhoneNum.phoneNumber);

    console.log("ccccccccc", setData);

    navigate("");
  };
  return (
    <div className=" flex justify-center w-[100%] h-[730px] mx-auto bg-slate-100">
      <div className="w-[30%] h-[500px] bg-white mt-40 rounded-2xl max-sm:w-[100%]">
        <h1 className=" mr-14 mt-7 text-2xl">تغییر رمز</h1>
        <div className="flex flex-wrap justify-center mr-11 w-[90%] h-[75%] mt-10 sm:w-[80%]">
          <Formik
            initialValues={{ Mobile: "", PassWord: "" }}
            onSubmit={(values) => onsubmit(values)}
          >
            <Form>
              <Field
                name="Mobile"
                placeholder="رمز عبور"
                className="w-[100%] h-[60px] mt-10 px-6 rounded-xl bg-slate-200 outline-none"
              />
              <Field
                name="Mobile"
                className="w-[100%] h-[60px] mt-4 px-6 bg-slate-200 rounded-xl outline-none"
                placeholder=" تکرار رمز عبور"
              />

              <NavLink to={"/Login"}>
                {" "}
                <button className="btn btn-active bg-green-600  w-[100%] h-[50px] bg-blue- text-white rounded-lg relative top-14">
                  تایید{" "}
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

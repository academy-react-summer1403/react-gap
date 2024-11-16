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
    <div className=" flex justify-center w-[90%] h-[600px] mx-auto mt-10">
      <div className="w-[50%] h-[100%] bg-[#FBF6F6;] rounded-2xl shadow-2xl  sm:w-[100%] xl:w-[50%]">
        <h1 className=" relative right-14 top-32 text-2xl">تغییر رمز</h1>
        <div className="flex flex-wrap justify-center mr-16 w-[90%] h-[75%] mt-40 sm:w-[80%]">
          <Formik
            initialValues={{ Mobile: "", PassWord: "" }}
            onSubmit={(values) => onsubmit(values)}
          >
            <Form>
              <Field
                name="Mobile"
                placeholder="رمز عبور"
                className="w-[100%] h-[60px] mt-10 px-6 border-2 rounded-xl border-blue-600 outline-none"
              />
              <Field
                name="Mobile"
                className="w-[100%] h-[60px] mt-4 px-6 border-2 rounded-xl border-blue-600 outline-none"
                placeholder=" تکرار رمز عبور"
              />

              <NavLink to={"/Login"}>
                {" "}
                <button className="btn btn-active btn-primary  w-[100%] h-[50px] bg-blue- text-white rounded-lg relative top-14">
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

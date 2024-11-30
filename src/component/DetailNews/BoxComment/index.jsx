import { Field, Form, Formik } from "formik";
import React from "react";
import { getData } from "../../../core/Storage/LocalStorage.storage";
import { FaUserLarge } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineReplyAll } from "react-icons/md";

const index = () => {
  const onSubmit = () => {};




  return (
    <div className=" w-[61%] h-[600px] mr-40 bg-white mt-10 rounded-xl">
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="نظرات کاربران"
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="border-2 w-[90%] h-96 rounded-2xl">
            {" "}
            <div className="border-b-2 w-[95%] h-20 mx-auto flex justify-around">
              <NavLink to="/panel">
                <div className="avatar mt-1">
                  <div className="ring-green-500 ring-offset-base-100 w-16 rounded-full ring ml-7 bg-slate-300">
                    <FaUserLarge
                      size={30}
                      fill="white"
                      className="mt-4 mr-4 bg-slate-300"
                    />
                  </div>{" "}
                  <h1 className="mt-4 font-thin">عاطفه کاویانی</h1>
                </div>
              </NavLink>

              <button className="border-2 w-20 h-8 mt-4 bg-slate-200 rounded-lg">
                پاسخ
                <MdOutlineReplyAll className="-mt-4" />
              </button>
            </div>{" "}
            <h1 className=" w-[90%] mx-auto mt-4">
              سلام ت بهم پیشنهاد بدین و اگر نیست بنویسید دمتون گرم بابت بابت
              انرژی ای که برامون میزارین❤️
            </h1>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          tab2
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label=" افزودن نظر جدید"
        />
        <div role="tabpanel" className="tab-content p-10">
          <NavLink to="/panel">
            <div className="avatar">
              <div className="ring-green-500 ring-offset-base-100 w-16 rounded-full ring ml-7 bg-slate-300 ">
                <FaUserLarge
                  size={30}
                  fill="white"
                  className="mt-4 mr-4 bg-slate-300"
                />
              </div>{" "}
              <h1 className="mt-4 font-thin">عاطفه کاویانی</h1>
            </div>
          </NavLink>

          <Formik initialValues={{ name: "comment" }} onSubmit={onSubmit}>
            <Form>
              <Field
                name="comment"
                placeholder="متن مورد نظر خود را وارد کنید ..."
                className="border-2 w-[90%] h-72 mt-7"
              />
              <button className="btn btn-primary mt-8">ثبت دیدگاه</button>
              <button className="btn btn-outline btn-primary mr-3">
                انصراف
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;

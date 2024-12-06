import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { RiUserFill } from "react-icons/ri";
import http from "../../../../core/Servises/interceptor";

const index = () => {
  const [MyInfo, setMyInfo] = useState(null);
  const [Img, setImg] = useState(null);

  const getMyProfile = async () => {
    const res = await http.get("/SharePanel/GetProfileInfo");
    setMyInfo(res);
  };

  const handleImage = async () => {
    const data = new FormData();
    data.append("formFile", Img);

    const result = await http.post(`/SharePanel/AddProfileImage`, data);
    console.log(result);
    getMyProfile();
  };

  const handleUpdateProfile = async (values) => {
    const data = new FormData();
    data.append("formFile", values.file);

    const result = await http.post(`/SharePanel/AddProfileImage`, data);
    console.log(result);
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <div className="bg-white w-[70%] h-[800px] rounded-xl mt-10 dark:bg-slate-900">
      <div className="border-b-2 w-[95%] h-20 mx-auto">
        <h1 className="relative top-8 text-lg font-sans font-bold">
          جزییات حساب کاربری
        </h1>
      </div>
      <div className="w-[100%] h-[90%]">
        <div className="w-[95%] h-20 mt-10 mx-auto flex">
          <div className="w-20">
            <div className="avatar">
              <div className=" ring-offset-base-100 w-36 rounded-full ring ring-offset-2">
                <img
                  src={
                    MyInfo?.userImage[MyInfo?.userImage.length - 1]
                      .puctureAddress
                  }
                />
              </div>
            </div>
          </div>
          <div className="">
            <input
              type="file"
              className=" dark:bg-slate-900 mt-40"
              onChange={(e) => setImg(e.target.files[0])}
            />

            <button onClick={handleImage} className="btn btn-info text-white">
              انتخاب
            </button>
          </div>
        </div>
        <div className="w-[90%] rounded-3xl h-[10%] mx-auto"></div>
        <div className="w-[90%] rounded-3xl h-[500px] mx-auto mt-2 flex ">
          <div className="w-[100%]  h-96 mt-16 mx-auto">
            <Formik
              enableReinitialize
              onSubmit={handleUpdateProfile}
              initialValues={{
                LName: MyInfo?.lName,
                FName: MyInfo?.fName,
                UserAbout: MyInfo?.userAbout,
                ReceiveMessageEvent: true,
                HomeAdderess: MyInfo?.homeAdderess,
                NationalCode: MyInfo?.nationalCode,
                Gender: MyInfo?.gender,
                BirthDay: "1999-02-08T00:00:00",
                Latitude: "36.5654149",
                Longitude: "53.0327506",
              }}
            >
              <Form>
                <label className="ml-3 font-bold">نام:</label>
                <Field
                  name="FName"
                  className="border-2 w-[40%] h-[50px] rounded-xl   border-slate-600 dark:bg-slate-600"
                  placeholder="نام"
                />
                
                <br />
                <label className="mr-2 font-bold"> خانوادگی:</label>
                <Field
                  name="LName"
                  className="border-2 w-[40%] h-[50px] rounded-xl mr-5 mt-4  border-slate-600 dark:bg-slate-600"
                  placeholder="نام خانوادگی"
                />
                <br />
                <label className="ml-3 font-bold"> درباره :</label>
                <Field
                  name="UserAbout"
                  className="border-2 w-[40%] h-[50px] mt-10 rounded-xl  ml-8  border-slate-600 dark:bg-slate-600"
                  placeholder="درباره"
                />
                <br />
                <label className="ml-3 font-bold"> آدرس :</label>
                <Field
                  name="HomeAdderess"
                  className="border-2 w-[40%] h-[50px] rounded-xl mt-10   border-slate-600 dark:bg-slate-600"
                  placeholder="آدرس"
                />
                <br />
                <label className="ml-3 font-bold"> شماره :</label>
                <Field
                  name="NationalCode"
                  className="border-2 w-[40%] h-[50px] rounded-xl mt-10  border-slate-600 dark:bg-slate-600"
                  placeholder="شماره"
                />
                <div className=" w-[40%] h-[50px] rounded-xl mt-10 mr-5   border-slate-300 dark:bg-slate-600">
                  <h2>جنسیت</h2>
                  <Field type="radio" name="gender" value="true" id="d1" />

                  <label htmlFor="d1"> مرد</label>
                  <br />
                  <Field type="radio" name="gender" value="false" id="d2" />
                  <label htmlFor="d2" className="mt-10">
                    {" "}
                    زن
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-active  btn-accent text-white mt-14 mr-[80%] w-28"
                >
                  تایید
                </button>
              </Form>
            </Formik>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

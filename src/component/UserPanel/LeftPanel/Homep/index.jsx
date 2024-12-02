import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { RiUserFill } from "react-icons/ri";
import http from '../../../../core/Servises/interceptor'

const index = () => {
  const [MyInfo, setMyInfo] = useState(null);
  const [Img, setImg] = useState(null);

  const getMyProfile = async () => {
    const res = await http.get("/SharePanel/GetProfileInfo");
    setMyInfo(res);
  };

  const handleImage =async () => {
    const data = new FormData();
    data.append("formFile", Img);

    const result = await http.post(`/SharePanel/AddProfileImage`, data);
    console.log(result);
    getMyProfile()
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
    <div className="bg-white w-[100%] h-[800px] rounded-xl mt-10 dark:bg-slate-900">
      <div className="border-b-2 w-[95%] h-20 mx-auto">
        <h1 className="relative top-8 text-lg font-sans font-bold">
          ویرایش اطلاعات
        </h1>
      </div>
      <div className="w-[100%] h-[90%]">
        <div className="w-[95%] h-20 mt-10 mx-auto flex">
          <div className="w-20">
            <div className="avatar">
            <div className="">
              <img src={MyInfo?.userImage[MyInfo?.userImage.length - 1].puctureAddress} className="h-32 rounded-full"/>
            </div>
            </div>
          </div>
          <div className="w-[90%] rounded-3xl h-[80%] bg-slate-200">
            <input type="file" className="mt-5 mr-5 dark:bg-slate-900" onChange={(e)=>setImg(e.target.files[0])} />
            <button onClick={handleImage}>send</button>
          </div>
        </div>
        <div className="w-[90%] rounded-3xl h-[10%] mx-auto">
        </div>
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
                NationalCode:  MyInfo?.nationalCode,
                Gender: MyInfo?.gender,
                BirthDay: "1999-02-08T00:00:00",
                Latitude: "36.5654149",
                Longitude: "53.0327506",
              }}
            >
              <Form>
                <Field
                  name="FName"
                  className="border-2 w-[40%] h-[50px] rounded-xl  border-slate-300 dark:bg-slate-600"
                  placeholder="نام"
                />
                <Field
                  name="LName"
                  className="border-2 w-[40%] h-[50px] rounded-xl mr-5  border-slate-300 dark:bg-slate-600"
                  placeholder="نام خانوادگی"
                />
                <Field
                  name="UserAbout"
                  className="border-2 w-[40%] h-[50px] rounded-xl mr-5  border-slate-300 dark:bg-slate-600"
                  placeholder=" UserAbout"
                />
                <Field
                  name="HomeAdderess"
                  className="border-2 w-[40%] h-[50px] rounded-xl mt-10  border-slate-300 dark:bg-slate-600"
                  placeholder=" HomeAdderess"
                />
                <Field
                  name="NationalCode"
                  className="border-2 w-[40%] h-[50px] rounded-xl mt-10 mr-5   border-slate-300 dark:bg-slate-600"
                  placeholder="NationalCode"
                />

                <div className=" w-[40%] h-[50px] rounded-xl mt-10 mr-5   border-slate-300 dark:bg-slate-600">
                  <h2>gender</h2>
                  <Field type="radio" name="gender" value="true" id="d1" />
                  <label htmlFor="d1"> man</label>

                  <Field type="radio" name="gender" value="false" id="d2" />
                  <label htmlFor="d2"> womman</label>
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

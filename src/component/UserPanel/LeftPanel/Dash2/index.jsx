import React, { useEffect, useState } from "react";
import { RiUserFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import http from "../../../../core/Servises/interceptor";
const index = () => {
  const [MyInfo, setMyInfo] = useState(null);

  const getMyProfile = async () => {
    const res = await http.get("/SharePanel/GetProfileInfo");
    setMyInfo(res);
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <div className=" bg-white w-[90%] h-[500px] rounded-3xl mt-10 dark:bg-slate-900">
      <div className=" h-[120px] border-2 mt-4 rounded-3xl flex mr-10">
        <div className="w-1/4">
          <img src="./introImg.png" className="w-[80%] mr-4" alt="" />
        </div>
        <h1 className="text-2xl relative mt-10 w-1/2">
          سلام {MyInfo?.fName} {MyInfo?.lName} خوش آمدید
        </h1>
        <div className="w-1/4">
          <img src={MyInfo?.userImage[0].puctureAddress} className="h-32 rounded-full"/>
        </div>
      </div>

      <div className="flex">
        <div className="border-2 w-[90%] mt-10 h-[220px] mr-10 rounded-3xl ">
          <h1 className="text-xl relative text-center bg-slate-100 rounded-t-3xl dark:bg-slate-800 ">
            اطلاعات کاربر
          </h1>


          <div className="mt-6 mr-6 flex flex-wrap gap-y-4">
            <div className="w-1/2 flex gap-4">
              <h2>نام :</h2>
              <h2 htmlFor=""> {MyInfo?.fName} </h2>
            </div>
            <div className="w-1/2 flex gap-4">
              <h2>نام خانوادگی :</h2>
              <h2 htmlFor=""> {MyInfo?.lName} </h2>
            </div>
            <div className="w-1/2 flex gap-4">
              <h2> شماره :</h2>
              <h2 htmlFor=""> {MyInfo?.phoneNumber} </h2>
            </div>
            <div className="w-1/2 flex gap-4">
              <h2> ایمیل :</h2>
              <h2 htmlFor=""> {MyInfo?.email} </h2>
            </div>


          </div>
        </div>
        {/* <div className="border-2 w-[70%] mt-10 h-[170px] mr-10 rounded-3xl flex gap-6">
          <div className="w-[10%] h-[80px] mt-14 mr-10">
            <RiUserFill fill="gray" size={70} />
          </div>
          <NavLink to={"/Panel/dashbord"}>
            <button className="btn btn-active btn-accent mt-20 w-60 mr-[100%] text-white">
              ویرایش اطلاعات
            </button>
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default index;

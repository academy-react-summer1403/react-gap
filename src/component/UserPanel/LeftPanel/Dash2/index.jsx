import React, { useEffect, useState } from "react";
import { RiUserFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import http from '../../../../core/Servises/interceptor'
const index = () => {
  const [MyInfo, setMyInfo] = useState(null);

  const getMyProfile = async () =>{
    const res = await http.get('/SharePanel/GetProfileInfo')
    setMyInfo(res)
  }

  useEffect(() => {
    getMyProfile()
  }, []);

  return (
    <div className=" bg-white w-[90%] h-[500px] rounded-3xl mt-10 dark:bg-slate-900">
      <div className="w-[60%] h-[120px] border-2 mt-4 rounded-3xl flex mr-10">
        <div className="w-[200px]">
          <img src="./introImg.png" className="w-[100%] h-[100%] mr-4" alt="" />
        </div>
        <h1 className="text-2xl relative mt-10 mr-6">
          سلام {MyInfo?.fName} {MyInfo?.lName} خوش آمدید
        </h1>
      </div>

      <div className="flex">
        <div className="border-2 w-[40%] mt-10 h-[220px] mr-10 rounded-3xl ">
          <h1 className="text-xl relative text-center bg-slate-100 rounded-t-3xl dark:bg-slate-800 ">
            اطلاعات کاربر
          </h1>

          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-16 rounded-full mr-3 mt-3">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="mt-6 mr-6">
              <label>نام :</label>
              <label htmlFor=""> نام کاربری</label>
              <br />
              <label htmlFor="">شماره:</label>
              <label>فلانی</label>
              <br />
              <label>ایمیل:</label>
              <label>Kaviyani@gmail.com</label>
          </div>
        
        </div>
        <div className="border-2 w-[70%] mt-10 h-[170px] mr-10 rounded-3xl flex gap-6">
          <div className="w-[10%] h-[80px] mt-14 mr-10">
            <RiUserFill fill="gray" size={70} />
          </div>
          <NavLink to={"/Panel/dashbord"}>
             <button className="btn btn-active btn-accent mt-20 w-60 mr-[100%] text-white">
            ویرایش اطلاعات
          </button>
          </NavLink>
         
        </div>
      </div>
    </div>
  );
};

export default index;

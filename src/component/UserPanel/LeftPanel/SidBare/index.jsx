import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { TiHome } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsBasket3Fill } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { IoKey } from "react-icons/io5";
import { BiSolidExit } from "react-icons/bi";
import SideBarItem from "./SideBarItem";

const index = () => {
  return (
   
      <div className="bg-slate-600 w-[200px] h-[100vh] flex flex-col overflow-hidden">
        <div className=" flex flex-col p-3 pr-10 gap-3 mt-4 w-full h-full items-start max-lg:justify-around max-2lg:pr-4 text-white">
          <SideBarItem
            url="/Panel"
            title="پیشخوان"
            icon={<HiOutlineViewGrid size={24}/>}
          />
          <SideBarItem
            url="/Panel/dashbord"
            title="ویرایش پروفایل"
            icon={<FaUserEdit size={24} />}
          />
          <SideBarItem
            url="/Panel/MyCourse"
            title=" دوره های من"
            icon={<BsCameraVideoFill size={24} />}
          />
           <SideBarItem
            url="/Panel/ReservPanel"
            title=" دوره های رزرو"
            icon={<BsBasket3Fill size={24}/>}
          />
           <SideBarItem
            url="/Panel/FavoritePanel"
            title=" مورد علاقه ها"
            icon={<GoHeartFill size={24}/> }
          />
           <SideBarItem
            url="/Panel/ChangePas"
            title=" تغیییر رمز  "
            icon={<IoKey size={24}/>}
          />
           <SideBarItem
            url="/"
            title="  بازگشت به خانه  "
            icon={<TiHome size={24} />}
          />
           <SideBarItem
            url="/"
            title="خروج "
            icon={<BiSolidExit size={24}/>}
          />
          
        </div>
      </div>
   
  );
};

export default index;

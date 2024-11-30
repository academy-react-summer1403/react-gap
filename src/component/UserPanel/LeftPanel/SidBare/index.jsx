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
import { clearStorage, removeItem } from "../../../../core/Storage/storage.services";
import { useNavigate, useNavigation } from "react-router-dom";

const index = () => {

  const navigate = useNavigate()

  const handleExite = () =>{
    clearStorage()
    navigate('/')
  }
  return (
   
      <div className="bg-slate-100 w-[250px] h-[100vh] flex flex-col overflow-hidden dark:bg-[#22445D]">
        <div className=" flex flex-col p-3 pr-10 gap-3 mt-4 w-full h-full items-start max-lg:justify-around max-2lg:pr-4 text-black dark:text-white">
          <SideBarItem
            url="/Panel"
            title="پیشخوان"
            icon={<HiOutlineViewGrid size={24} fill="green"/>}
          />
          <SideBarItem
            url="/Panel/dashbord"
            title="ویرایش پروفایل"
            icon={<FaUserEdit size={24} fill="green" />}
          />
          <SideBarItem
            url="/Panel/MyCourse"
            title=" دوره های من"
            icon={<BsCameraVideoFill size={24} fill="green"/>}
          />
           <SideBarItem
            url="/Panel/ReservPanel"
            title=" دوره های رزرو"
            icon={<BsBasket3Fill size={24} fill="green"/>}
          />
           <SideBarItem
            url="/Panel/FavoritePanel"
            title=" مورد علاقه ها"
            icon={<GoHeartFill size={24} fill="green"/> }
          />
           <SideBarItem
            url="/Panel/ChangePas"
            title=" تغیییر رمز  "
            icon={<IoKey size={24} fill="green"/>}
          />
           <SideBarItem
            url="/"
            title="  بازگشت به خانه  "
            icon={<TiHome size={24} fill="green"/>}
          />
           <SideBarItem
           
            url="/"
            title="خروج "
            icon={<BiSolidExit size={24}/>}
          />

          <button onClick={handleExite}>exit</button>
          
        </div>
      </div>
   
  );
};

export default index;

import React from "react";
import { TiHome } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import SideBarItem from "./SideBarItem";

const index = () => {
  return (
    <div
      className="bg-slate-600 w-[200px] h-[100vh] flex flex-col overflow-hidden
    "
    >
      <div
        className=" flex flex-col p-3 pr-10 gap-3 mt-4 w-full h-full items-start
            max-lg:justify-around max-2lg:pr-4 text-white"
      >
        <SideBarItem url="/Panel" title="home" icon={<TiHome size={24} />} />
        <SideBarItem
          url="/Panel/dashbord"
          title="dashbord"
          icon={<FaUserEdit size={24} />}
        />
      </div>
    </div>
  );
};

export default index;

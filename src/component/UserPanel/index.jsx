import React from "react";
import SidBare from "../../component/UserPanel/LeftPanel/SidBare";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div
      className=" w-full h-auto min-h-[100vh]"
    >
      <div
        className="flex flex-row justify-center w-[93%] h-auto"
      >
        <SidBare />
        <div className="p-5 flex-1 flex flex-col h-auto min:h-[540px] items-start justify-start rounded-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default index;

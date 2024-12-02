import React from "react";
import { useNavigate } from "react-router-dom";

const index = ({ title, icon, url }) => {
  const navigate = useNavigate();
  const value = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  const currurl = url.substring(url.lastIndexOf("/") + 1);

  return (
    <div
      onClick={() => {
        navigate(url);
      }}
      className={`h-[40px] min-w-[120px]  ${
        value === currurl ? "text-blue-300" : "text-textColorBlack"
      } flex gap-4 
        cursor-pointer
                        max-2lg:pr-0 max-2lg:gap-5
                        max-S1000:min-w-[20px]`}
    >
      {icon}
      <div className="text-sm max-S1000:hidden">{title}</div>

    </div>
  );
};

export default index;

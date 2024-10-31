import React, { useState } from "react";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { div } from "framer-motion/client";

import { NavLink } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import ButtonGroup from "antd/es/button/button-group";
const { Sider } = Layout;
function getItem(label, key, icon, NavLink) {
  return {
    key,
    icon,
    label,
    NavLink,
  };
}
const handelDark = () => {
  document.documentElement.classList.toggle("dark");
};
const items = [
  getItem(
    "پیشخوان",
    "1",
    <NavLink to={"/UserCounter"}>
      <PieChartOutlined />
    </NavLink>
  ),
  getItem(
    "ویرایش پروفایل",
    "2",
    <NavLink to={"/EditPro"}>
      <PieChartOutlined />
    </NavLink>
  ),
  getItem(
    "دوره های من",
    "3",
    <NavLink to={"/UserMyCourse"}>
      {" "}
      <PieChartOutlined />
    </NavLink>
  ),
  getItem(
    "دوره های رزرو",
    "4",
    <NavLink to={"/UserReserv"}>
      {" "}
      <DesktopOutlined />
    </NavLink>
  ),
  getItem(
    "مورد علاقه ها",
    "5",
    <NavLink to={"/UserFavorit"}>
      <UserOutlined />
    </NavLink>
  ),
  getItem(
    "نظرات من",
    "6",
    <NavLink to={"/UserComments"}>
      <TeamOutlined />
    </NavLink>
  ),

  getItem(
    " بازگشت به خانه",
    "7",
    <NavLink to={"/"}>
      {" "}
      <FileOutlined />
    </NavLink>
  ),
  getItem(
    " خروج",
    "8",
    <NavLink to={""}>
      <FileOutlined />
    </NavLink>
  ),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div className="border-2 border-redw-full h-[300px]">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical " />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
          <div>
          <div className="w-40 h-10 relative top-8 right-10 cursor-pointer">
          <label htmlFor="DarkId" onClick={handelDark} className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
          </div>
        </Sider>

        <Content
        
          className="dark:bg-[#22445D;] m-8"
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>
              <div className="avatar online ">
                <div className="w-24 rounded-full">
                <img src="./user2.png" />
                </div>
              </div>
              کاربر
              
            </Breadcrumb.Item>
            <Breadcrumb.Item>کاربر</Breadcrumb.Item>
          </Breadcrumb>
          <div
            
            className="dark:bg-[#22445D;] p-24"
          >
            <div className="border-b-2 h-[40px] w-[95%] mx-auto mt-4 font-sans text-xl dark:bg-[#22445D;]">
              <h1 className=" dark:text-white">ویرایش اطلاعات</h1>
            </div>
            <div className=" flex flex-wrap gap-9 h-[500px] w-[70%] mx-auto mt-9">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text dark:text-white"> نام</span>
                </div>
                <input
                  type="text"
                  placeholder=" اینجا بنویس"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label"></div>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text  dark:text-white"> نام خانوادگی </span>
                </div>
                <input
                  type="text"
                  placeholder=" اینجا بنویس"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label"></div>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text  dark:text-white"> شماره </span>
                </div>
                <input
                  type="text"
                  placeholder=" اینجا بنویس"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label"></div>
              </label>

              <label className="form-control w-full max-w-xs mb-80">
                <div className="label">
                  <span className="label-text  dark:text-white"> ایمیل </span>
                </div>
                <input
                  type="text"
                  placeholder=" اینجا بنویس"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label"></div>
              </label>
            </div>

            <button className="btn btn-primary mr-[900px] relative bottom-40">
              ثبت اطلاعات
            </button>
          </div>
        </Content>
      </Layout>
    </div>
  );
};
export default App;

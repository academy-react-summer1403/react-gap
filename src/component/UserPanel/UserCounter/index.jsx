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
const { Sider } = Layout;
function getItem(label, key, icon, NavLink,DarkMode) {
  return {
    key,
    icon,
    label,
    NavLink,
    DarkMode,
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
            <label
            htmlFor="DarkId"
            onClick={handelDark}
            className="flex cursor-pointer gap-2"
          >
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
        </Sider>

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>
              <div className="avatar online">
                <div className="w-24 rounded-full">
                <img src="./user2.png" />
                </div>
              </div>
              User
            </Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="dark:bg-[#22445D;] "
          >
            <div className="flex gap-3 w-[90%]">
              <div className="w-[50%]">
                <div className="mockup-window  border-2 border-blue-500">
                  <div className="border-t-2 border-blue-500 flex justify-center px-4 py-16">
                    <h1 className="text-xl">
                      کاربر عزیز اطلاعات پروفایل خود را تکمیل کنید
                    </h1>

                    <NavLink to={"/EditPro"}>
                      <button className="btn btn-outline btn-primary relative top-10 right-2">
                        تکمیل پروفایل
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex w-[50%]">
                <div className="mockup-window bg-base-300 border w-[100%]">
                  <div className="bg-base-200 flex justify-center px-4 py-16">
                    <h1 className="text-xl">مشاهده دوره های خریداری شده </h1>
                    <NavLink to={"/UserReserv"}>
                      <button className="btn btn-primary relative top-9 right-16">
                        مشاهده
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[45%] mt-10">
              <div
                tabIndex={0}
                className="collapse border-base-300 border bg-blue-400"
              >
                <div className="collapse-title text-xl font-medium">
                  <h1 className="text-white">مشاهده اطلاعات کاربر</h1>
                </div>
                <div className="collapse-content">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 mt-2">
                    <ul className="menu menu-xs bg-base-200 rounded-box w-56">
                      <li>
                      <h1>نام و نام خانوادگی:</h1>
                      </li>
                     
                    </ul>
                    <ul className="menu menu-xs bg-base-200 rounded-box w-56">
                      <li>
                      <h1>ایمیل:</h1>
                      </li>
                     
                    </ul>
                    
                   
                    <ul className="menu menu-lg bg-base-200 rounded-box w-56">
                      <li>
                        تلفن همراه
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};
export default App;

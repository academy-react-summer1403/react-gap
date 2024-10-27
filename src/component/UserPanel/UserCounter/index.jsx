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
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              User
            </Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div className="flex gap-3 w-[90%] sm:w-[50%] sm:flex-wrap lg:flex-nowrap ">
              <div className=" w-[50%] sm:w-[100%] ">
                <div className="  mockup-window  border-2 border-blue-500 sm:w-[350px] sm:h-[100%]">
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
              <div className="flex w-[50%] sm:w-[100%]  ">
                <div className="mockup-window bg-base-300 border-2 border-blue-500 sm:flex-row ">
                  <div className="bg-base-200 flex justify-center px-4 py-16 ">
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

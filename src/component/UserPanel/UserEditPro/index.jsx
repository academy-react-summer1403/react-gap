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
              کاربر
              
            </Breadcrumb.Item>
            <Breadcrumb.Item>کاربر</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div className="border-b-2 h-[40px] w-[95%] mx-auto mt-4 font-sans text-xl">
              <h1>ویرایش اطلاعات</h1>
            </div>
            <div className=" flex flex-wrap gap-9 h-[500px] w-[70%] mx-auto mt-9">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text"> اسمت چیه؟</span>
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
                  <span className="label-text"> فامیلیت چیه؟</span>
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
                  <span className="label-text"> شمارت چنده؟</span>
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
                  <span className="label-text"> شمارت چنده؟</span>
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

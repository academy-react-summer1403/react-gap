import React, { useState } from "react";

import {
  DeleteOutlined,
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
const handelDark = () => {
  document.documentElement.classList.toggle("dark");
};
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
          <Breadcrumb className="dark:bg-[#22445D;] p-24">
            <Breadcrumb.Item>
              <div className="avatar online">
                <div className="w-24 rounded-full">
                <img src="./user2.png" />
                </div>
              </div>
              User
            </Breadcrumb.Item>
            <Breadcrumb.Item>کاربر</Breadcrumb.Item>
          </Breadcrumb>
          <div className="dark:bg-[#22445D;]">
            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <th>نام دوره</th>
                      <th>نام استاد</th>
                      <th>وضعیت دوره</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                      <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src="./panel2.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">  ریکت</div>
                            <div className="text-sm opacity-50">China</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        استاد محمد حسین بحر العلومی
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Desktop Support Technician
                        </span>
                      </td>
                      <td>مشاهده</td>
                      <th>
                        حذف
                        <button className="btn btn-ghost btn-xs">
                          <DeleteOutlined />
                        </button>
                      </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                      <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src="./panel2.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">  ریکت</div>
                            <div className="text-sm opacity-50">China</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        استاد محمد حسین بحر العلومی
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Desktop Support Technician
                        </span>
                      </td>
                      <td>مشاهده</td>
                      <th>
                        حذف
                        <button className="btn btn-ghost btn-xs">
                          <DeleteOutlined />
                        </button>
                      </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                      <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src="./panel2.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">  ریکت</div>
                            <div className="text-sm opacity-50">China</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        استاد محمد حسین بحر العلومی
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Desktop Support Technician
                        </span>
                      </td>
                      <td>مشاهده</td>
                      <th>
                        حذف
                        <button className="btn btn-ghost btn-xs">
                          <DeleteOutlined />
                        </button>
                      </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                      <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src="./panel2.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">  ریکت</div>
                            <div className="text-sm opacity-50">China</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        استاد محمد حسین بحر العلومی
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Desktop Support Technician
                        </span>
                      </td>
                      <td>مشاهده</td>
                      <th>
                        حذف
                        <button className="btn btn-ghost btn-xs">
                          <DeleteOutlined />
                        </button>
                      </th>
                    </tr>
                  </tbody>
                  {/* foot */}
                </table>
              </div>
            </div>

            <div className="join relative top-5 right-[510px] ">
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="1"
                defaultChecked
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="2"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="3"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="4"
              />
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};
export default App;

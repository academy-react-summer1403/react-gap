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
    <div className=" w-full h-[300px]">
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
            </div>
          </div>
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
                          <input
                            type="checkbox"
                            className="checkbox dark:border-slate-50"
                          />
                        </label>
                      </th>
                      <th className="dark:text-white text-lg">نام دوره</th>
                      <th className="dark:text-white text-lg">نام استاد</th>
                      <th className="dark:text-white text-lg"> ترم</th>
                      <th className="dark:text-white text-lg">جزییات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <label>
                          <input
                            type="checkbox"
                            className="checkbox dark:border-slate-50"
                          />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src="./panel1.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold"> استاد اسفندیاری</div>
                            <div className="text-sm opacity-50"></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        محسن اسفندیاری
                        <br />
                        <span className="badge badge-ghost badge-sm"></span>
                      </td>
                      <td>زمستان</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          مشاهده جزییات دوره
                        </button>
                      </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>
                        <label>
                          <input
                            type="checkbox"
                            className="checkbox dark:border-slate-50"
                          />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3 dark:bg-[#22445D;] ">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src="./panel2.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold"> استاد بحر العلومی</div>
                            <div className="text-sm opacity-50">China</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        محمدحسین بحرالعلومی
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Tax Accountant
                        </span>
                      </td>
                      <td>تابستان</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          مشاهده جزییات دوره
                        </button>
                      </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>
                        <label>
                          <input
                            type="checkbox"
                            className="checkbox dark:border-slate-50"
                          />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src="./panel3.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold"> استاد اصغری</div>
                            <div className="text-sm opacity-50"></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        مهدی اصغری
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Office Assistant I
                        </span>
                      </td>
                      <td>پاییز</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          مشاهده جزییات دوره
                        </button>
                      </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <th>
                        <label>
                          <input
                            type="checkbox"
                            className="checkbox dark:border-slate-50"
                          />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src="./panel1.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold"> بی نام</div>
                            <div className="text-sm opacity-50"></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        بی نام
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          بی نام
                        </span>
                      </td>
                      <td>تابستان</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          مشاهده جزییات دوره
                        </button>
                      </th>
                    </tr>
                  </tbody>
                  {/* foot */}
                  <tfoot>
                    <tr>
                      <th></th>
                      <th>..</th>
                      <th>..</th>
                      <th> ..</th>
                      <th></th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div>
              <div className="join relative top-5 right-[510px]">
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
          </div>
        </Content>
      </Layout>
    </div>
  );
};
export default App;

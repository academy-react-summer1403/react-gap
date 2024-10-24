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
                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Desktop Support Technician
                        </span>
                      </td>
                      <td>Purple</td>
                      <th>
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
                                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Brice Swyre</div>
                            <div className="text-sm opacity-50">China</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Carroll Group
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Tax Accountant
                        </span>
                      </td>
                      <td>Red</td>
                      <th>
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
                                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Marjy Ferencz</div>
                            <div className="text-sm opacity-50">Russia</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Rowe-Schoen
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Office Assistant I
                        </span>
                      </td>
                      <td>Crimson</td>
                      <th>
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
                                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Yancy Tear</div>
                            <div className="text-sm opacity-50">Brazil</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Wyman-Ledner
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Community Outreach Specialist
                        </span>
                      </td>
                      <td>Indigo</td>
                      <th>
                        <button className="btn btn-ghost btn-xs w-10">
                        <DeleteOutlined />
                          
                        </button>
                      </th>
                    </tr>
                  </tbody>
                  {/* foot */}
                
                </table>
              </div>
            </div>
            
            <div className="join relative top-5 right-[510px]">
  <input
    className="join-item btn btn-square"
    type="radio"
    name="options"
    aria-label="1"
    defaultChecked />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div>
          
          </div>
        </Content>
      </Layout>
    </div>
  );
};
export default App;















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
const { Sider } = Layout;
function getItem(label, key, icon , NavLink) {
  return {
    key,
    icon,
    label,
    NavLink
  };
}
const items = [
  
  getItem("پیشخوان", "1", <PieChartOutlined />),
  getItem("ویرایش پروفایل", "2", <PieChartOutlined />),
  getItem("دوره های من", "3", <PieChartOutlined />),
  getItem("دوره های رزرو", "4", <DesktopOutlined />),
  getItem("مورد علاقه ها", "5", <UserOutlined />),
  getItem("نظرات من", "6", <TeamOutlined />),

  getItem(" بازگشت به خانه", "7", <FileOutlined />),
  getItem(" خروج", "8", <FileOutlined />),
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


           
            Bill is a cat.
          </div>
        </Content>
      </Layout>
    </div>
  );
};
export default App;

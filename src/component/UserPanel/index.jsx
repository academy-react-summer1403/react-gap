import React from "react"
import {
  AppstoreOutlined,
  HeartOutlined,
  HomeOutlined,
  KeyOutlined,
  LogoutOutlined,
  MessageOutlined,
  ShoppingOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Sider } = Layout;
const items = [
  AppstoreOutlined,
  VideoCameraOutlined,
  ShoppingOutlined,
  HeartOutlined,
  MessageOutlined,
  KeyOutlined,
  HomeOutlined,
  LogoutOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
      onCollapse={(collapsed, type) => {}}
    >
      <div className="demo-logo-vertical " />
      <Menu
        className="bg-[#A4F6DE;] w-64 h-[365px] "
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};
export default App;

// import React from "react";
// import {
//   LaptopOutlined,
//   NotificationOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Breadcrumb, Layout, Menu, theme } from "antd";
// const { Content, Sider } = Layout;
// const items1 = ["1", "2", "3"].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   }
// );
// const App = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <Sider width={200}>
//       <Menu
//         className="bg-[#A4F6DE;]"
//         mode="inline"
//         defaultSelectedKeys={["1"]}
//         defaultOpenKeys={["پیشخوان"]}
//         style={{
//           height: "100%",
//         }}
//         items={items2}
//       />
//     </Sider>
//   );
// };
// export default App;

// import { Layout } from "antd";
// import { Content } from "antd/es/layout/layout";
// import Sider from "antd/es/layout/Sider";

// const UserPanel = () => {
//   return (
//     <div>
//       <div className="w-full h-[1200px]">
//         <Layout>
//           <Layout>
//             <Sider className=" bg-[#A4F6DE;]">left sidebar</Sider>
//             <Content className="bg-yellow-100 h-[1200px]">main content</Content>
//           </Layout>
//         </Layout>
//       </div>
//     </div>
//   );
// };

// export default UserPanel;

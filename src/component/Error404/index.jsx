import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          {" "}
          <Breadcrumb.Item>خانه </Breadcrumb.Item>
          <Breadcrumb.Item>صفحه خطا</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="mx-auto w-[50%] mt-20">
            <img src="./Errornew.png" c alt="" />
          </div>

          <div>
            <h1 className="text-center mt-20 text-2xl text-[#161439;] font-bold">
              این صفحه در دسترس نیست!
            </h1>
          </div>
          <NavLink to={"/"}>
            <button className="btn btn-info text-white mr-[650px] mt-10">
              برو به خونه
            </button>
          </NavLink>
        </div>
      </Content>
    </Layout>
  );
};
export default App;

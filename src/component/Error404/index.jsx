// import React from "react";
// import { NavLink } from "react-router-dom";

// const index = () => {
//   return (
//     <div className="flex  justify-center flex-col  h-[680px] mt-6 ml-6 bg-slate-50">
//       <div className="w-[80%] h-[520px] mr-[190px]">
//         <img src="Errornew.png" />
//       </div>
//       <NavLink to={"/"}>
//         <button class="btn btn-info text-white m-20 mr-[860px] mt-48 font-[Poppins]">
//           بازگشت به خانه
//         </button>
//       </NavLink>
//     </div>
//   );
// };

// export default index;
// //
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

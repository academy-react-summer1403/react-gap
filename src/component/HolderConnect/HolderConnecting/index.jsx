// import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from "antd";
import FormConnect from "../../../component/HolderConnect/FormConnect";
const { Content } = Layout;
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
      <Content className="p-0 bg-orange-500">
        <Breadcrumb
          style={{
            margin: "16px 0",
            marginRight:"25px"
          }}
        >
          <Breadcrumb.Item className="text-white ">خانه</Breadcrumb.Item>
          <Breadcrumb.Item className="text-white">ارتباط با ما</Breadcrumb.Item>
          <Breadcrumb.Item className="text-white">تماس با ما</Breadcrumb.Item>
        </Breadcrumb>
        <div className="dark:bg-[#22445D;] bg-[#ffff]  min-h-24 p-4">
          <div className="w-[40%] flex gap-10 relative top-20 right-16">
            <div className="stack">
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body">
                  تماس با ما
                  <h2>0907654345</h2>
                </div>
              </div>
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body"></div>
              </div>
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body">C</div>
              </div>
            </div>
            <div className="stack">
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body">
                  ایمیل کددات
                  <h2 className="text-center">kode.@gmail.com</h2>
                </div>
              </div>
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body">B</div>
              </div>
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body">C</div>
              </div>
            </div>
            <div className="stack">
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body">
                  آدرس
                  <h2>ساری میدان</h2>
                </div>
              </div>
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body">B</div>
              </div>
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body">C</div>
              </div>
            </div>
          </div>

          <FormConnect />
        </div>
      </Content>
    </Layout>
  );
};
export default App;

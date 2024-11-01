import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import QuestionBox from "../../../component/TitleHolder/QuestionBox";
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
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
    <div className="w-full">
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div className="dark:bg-[#22445D;] p-2 ">
            <div className="hero bg-base-200 min-h-screen dark:bg-[#22445D;]">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="border-2 w-[100%] h-[300px] ml-9"></div>
                <div>
                  <h1 className="text-5xl font-bold dark:text-white">
                    عنوان دوره
                  </h1>
                  <p className="py-6 dark:text-white">
                    لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که
                    توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
                    تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.
                    لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک
                    نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می
                    کنند. لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است
                    که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می
                    شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه
                    است.
                  </p>
                  <h2 className="dark:text-white">
                    {" "}
                    لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک
                    نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می
                    کنند. لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است
                    که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می
                    شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه
                    است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان
                    گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ
                    استفاده می کنند.
                  </h2>

                  <button className="btn btn-primary mt-10">رزرو دوره </button>
                </div>
              </div>
            </div>

            <QuestionBox />
          </div>
        </Content>
      </Layout>
    </div>
  );
};
export default App;

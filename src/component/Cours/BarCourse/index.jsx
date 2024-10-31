
import React from "react";
import FilterCours from "../../../component/Cours/FilterCours";
import CardCours from "../../../component/Cours/CardCours";
import { Breadcrumb, Layout, Menu, theme } from "antd";
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
       
        className="p-10 dark:dark:bg-[#22445D;]"
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <div className="mr-8 w-[40%] h-24 flex flex-wrap ">
            <div className=" text-2xl font-bold text-[rgb(51,65,85)]">
            <h1> دوره های آموزشی  </h1>
            </div>
           
            <div className="mt-10 -mr-[30%] text-lg text-[rgb(149,160,177)]">
            <p> دوره ببین، تمرین کن، برنامه نویس شو</p>
            </div>

          </div>
         

        
        </Breadcrumb>
        <div
          style={{
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <FilterCours />
          <CardCours />
          
        </div>
      </Content>
    </Layout>
  );
};
export default App;


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
          <h1 className="mr-10 text-3xl font-bold text-orange-700">دوره های آموزشی</h1>
        
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

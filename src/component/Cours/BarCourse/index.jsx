import React, { useEffect, useState } from "react";
import FilterCours from "../../../component/Cours/FilterCours";
import CardCours from "../../../component/Cours/CardCours";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import http from '../../../core/Servises/interceptor'

const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [List, setList] = useState(null);
  const [SearchQuery, setSearchQuery] = useState("");
  const [LevelId, setLevelId] = useState("");
  const [CourseTypeId, setCourseTypeId] = useState("");
  const [CourseTech, setCourseTech] = useState("");
  const [PageNumber, setPageNumber] = useState(1);
  const [rand, setRand] = useState(1);


  const getCourseList = async () => {
    const res = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&RowsOfPage=9&SortingCol=Active&SortType=DESC${SearchQuery}&courseLevelId=${LevelId}&CourseTypeId=${CourseTypeId}${CourseTech}`
    );
    // console.log("res", res.courseFilterDtos);
    setList(res);
  };

  // const age =20
  // const text = 'my age is' + age
  // const text2 = `my age is ${age}`

  useEffect(() => {
    getCourseList();
  }, [SearchQuery, LevelId, CourseTypeId, CourseTech , PageNumber , rand]);

  const handleTech = (id) => {
    if (id === "0") {
      setCourseTech("");
    } else {
      setCourseTech(`&TechCount=1&ListTech=${id}`);
    }
  };

  return (
    <Layout>
      <Content className=" p-10 dark:dark:bg-[#22445D;]">
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          
          <div className="mr-8 w-[40%] h-24 flex flex-wrap max-sm:w-[80%] max-sm:text-wrap max-sm:mr-10">
            <div className=" text-2xl font-bold text-[rgb(51,65,85)]">
              <h1> دوره های آموزشی </h1>
            </div>

            <div className="mt-10 -mr-[30%] text-lg text-[rgb(149,160,177)]  max-sm:text-wrap max-sm:relative max-sm:right-8">
              <p> دوره ببین، تمرین کن، برنامه نویس شو</p>
            </div>
          </div>

          <h1 className="mr-[550px] font-sans text-xl max-sm:hidden"> بیش از 10 عنوان آموزشی </h1>
        </Breadcrumb>
        <div
          style={{
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <FilterCours
            setSearchQuery={setSearchQuery}
            setLevelId={setLevelId}
            setCourseTypeId={setCourseTypeId}
            handleTech={handleTech}
          />
          <CardCours List={List && List} PageNumber={PageNumber} setPageNumber={setPageNumber} setRand={setRand} />
        </div>
      </Content>
    </Layout>
  );
};
export default App;

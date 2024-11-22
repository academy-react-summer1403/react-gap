import { theme } from "antd";
import Articles from "../../component/NewsHolder/ArticleNews";
import CardNews from "../../component/NewsHolder/CardNews";
import NewsBar from "../../component/NewsHolder/NewsBar";
import { useEffect, useState } from "react";
import http from "../../core/Servises/interceptor"

const index = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [NewsList, setNewsList] = useState(null);
  const [SearchQuery, setSearchQuery] = useState('');
  const [PageNumber, setPageNumber] = useState();

  const getNewsList = async () => {
    const res = await http.get(
      `/News?PageNumber=1&RowsOfPage=6&SortingCol=InsertDate&SortType=DESC${SearchQuery}`
    );
    console.log("neeeeeeews", res.news);
    setNewsList(res.news);
    console.log("IdIdI", NewsList);
  };

  useEffect(() => {
    getNewsList();
  }, [SearchQuery]);

  // const [NewsList, setNewsList] = useState([]);
  // const [SearchQuery, setSearchQuery] = useState("");

  // const getCourseList = async () => {
  //   const res = await axios.get(
  //     `https://classapi.sepehracademy.ir/api/News&Query=${SearchQuery}`
  //   );
  //   console.log("res", res.data.courseFilterDtos);
  //   setNewsList(res.data.courseFilterDtos);
  // };

  // useEffect(() => {
  //   getCourseList();
  // }, [SearchQuery]);

  return (
    <div>
      <NewsBar setSearchQuery={setSearchQuery}  />
      <CardNews NewsList={NewsList} />
      {/* <Articles /> */}
    </div>
  );
};

export default index;

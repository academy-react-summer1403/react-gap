import { theme } from "antd";
import Articles from "../../component/NewsHolder/ArticleNews";
import CardNews from "../../component/NewsHolder/CardNews";
import NewsBar from "../../component/NewsHolder/NewsBar";
import { useEffect, useState } from "react";
import http from "../../core/Servises/interceptor";

const index = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [NewsList, setNewsList] = useState(null);
  const [SearchQuery, setSearchQuery] = useState("");
  const [PageNumber, setPageNumber] = useState();
  const [rand, setRand] = useState();

  const getNewsList = async () => {
    try {
      const res = await http.get(
        `/News?PageNumber=1&RowsOfPage=6&SortingCol=InsertDate&SortType=DESC${SearchQuery}`
      );
      console.log("neeeeeeews", res.news);
      setNewsList(res.news);
    } catch (error) {
      throw new Error("ERROR:", error);
    }

    // console.log("IdIdI", NewsList);
  };

  useEffect(() => {
    getNewsList();
  }, [SearchQuery, rand]);

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
      <div>
        <NewsBar setSearchQuery={setSearchQuery} />
      </div>
      <div className="w-11/12 mt-28 mr-16 flex flex-wrap justify-center gap-9 shadow-2xl">
        {" "}
        {NewsList &&
          NewsList.map((newslist, index) => {
            return (
              <div>
                <CardNews NewsList={NewsList} key={index} setRand={setRand} />
              </div>
            );
          })}
      </div>
      {/* <Articles /> */}
    </div>
  );
};

export default index;

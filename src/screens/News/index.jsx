import { theme } from "antd";
import Articles from "../../component/NewsHolder/ArticleNews";
import CardNews from "../../component/NewsHolder/CardNews";
import NewsBar from "../../component/NewsHolder/NewsBar";
import { useEffect, useState } from "react";

const index = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [NewsList, setNewsList] = useState([]);

  const getCourseList =async () => {
    const res =await axios.get(`https://classapi.sepehracademy.ir/api/News`);
    console.log('res' , res.data.courseFilterDtos);
    setNewsList(res.data.courseFilterDtos)
  };

  useEffect(() => {
    getCourseList();
  }, []);


  

  return (
    <div>
      <NewsBar />
      <CardNews  NewsList={NewsList}/>
      <Articles/>
    </div>
  );
};

export default index;

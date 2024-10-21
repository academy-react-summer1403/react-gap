import Articles from "../../component/NewsHolder/ArticleNews";
import CardNews from "../../component/NewsHolder/CardNews";
import NewsBar from "../../component/NewsHolder/NewsBar";

const index = () => {
  return (
    <div>
      <NewsBar />
      <CardNews />
      <Articles/>
    </div>
  );
};

export default index;

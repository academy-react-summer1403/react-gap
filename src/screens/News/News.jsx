import Articles from "../Landing/News/Articles";
import CardNews from "../Landing/News/CardNews";
import NewsBar from "../Landing/News/NewsBar";

const News = () => {
  return (
    <div>
      <NewsBar />
      <CardNews />
      <Articles/>
    </div>
  );
};

export default News;

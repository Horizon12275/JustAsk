import { Flex, Row } from "antd";
import { getRecommendedArticles } from "../services/articleService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecommendedArticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getRecommendedArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);
  return (
    <Flex vertical className="w-[1000px]">
      <h1 className="text-4xl font-bold text-center text-black ">
        What to read next
      </h1>
      <Row justify={"space-between"}>
        {articles.map((article) => (
          <article
            key={article.id}
            className="flex flex-col  text-2xl font-bold  text-center text-black w-[300px] mt-4"
          >
            <Link to={`/article/${article.id}`}>
              <img
                loading="lazy"
                src={article.cover}
                className="w-full aspect-[1.72] object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                alt={article.title}
              />
            </Link>
            <Link
              to={`/article/${article.id}`}
              className="self-center mt-6 w-full text-black"
            >
              {article.title}
            </Link>
          </article>
        ))}
      </Row>
    </Flex>
  );
};

export default RecommendedArticles;

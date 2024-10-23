import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext); // Data is directly accessed from context
  console.log(data);

  return (
    <div>
      <h1 className="head__text">News App 👋</h1>
      <div className="all__news">
        {
          data && data.length > 0 // Check if data is available and has content
            ? data.map((news) => (
                <NewsArticle data={news} key={news.url} /> // Mapping over data directly
              ))
            : "Loading" // Fallback loading message
        }
      </div>
    </div>
  );
}

export default News;

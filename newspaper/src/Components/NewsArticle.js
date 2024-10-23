import React from "react";
import "./NewsArticle.css"; // Import the CSS for NewsArticle

function NewsArticle({ data }) {
  return (
    <div className="news-card">
      <div className="news-image">
        {data.urlToImage ? (
          <img src={data.urlToImage} alt={data.title} />
        ) : (
          <div className="image-placeholder">Image Not Available</div>
        )}
      </div>
      <div className="news-content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsArticle;

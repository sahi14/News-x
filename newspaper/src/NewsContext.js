import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const apiKey = "7bc2c09002d14d00926ea641be33707e";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&from=2024-09-23&sortBy=publishedAt&apiKey=${apiKey}`
        );
        setData(response.data.articles);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children} {/* Render child components */}
    </NewsContext.Provider>
  );
};

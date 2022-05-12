import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NewsFeed() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:3001/news",
      };


    axios.request(options).then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(articles);

  //   gets only the first ten articles in the array
  const first6Articles = articles?.slice(0, 6);

  return (
    <div className="NewsFeed">
      <h2>News Feed</h2>
      {first6Articles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url}>
            <p>{article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

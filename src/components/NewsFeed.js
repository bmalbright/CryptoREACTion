import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {Card} from 'react-bootstrap';

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

    <div >
      <h2 className="NewsTitle">News Feed</h2>
      {first6Articles?.map((article, _index) => (

          <a href={article.url} target="-blank" rel="noopener noreferrer">
        <Card className="NewsCard" key={_index} >
            <Card.Title>{article.title}</Card.Title>
            </Card>
          </a>


      ))}
    
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/keep-informed';

const Stories = () => {
  const [mediumData, setMediumData] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.items);
      setMediumData(response.data.items);
    });
  }, []);
  return (
    <div>
      <h1>Stories Boilerplate</h1>
      <div className="card-columns section">
        {mediumData.map((article) => (
          <Card
            key={article['guid']}
            imgUrl={article['thumbnail']}
            title={article['title']}
            url={article['link']}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Card from './Card';
import RectangleSVG from '../static/images/rectangle.svg';

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
      <Helmet>
        <title>Stories</title>
        <meta name="description" content="Keep.id" />
      </Helmet>
      <div className="bg-story-hero-img viewport-height-100 negative-margin-top">
        <div className="container">
          <div className="viewport-height-100 custom-vertical-center">
            <div>
              <h1 className="hero-header pb-4 text-white">
                Keep.Informed
              </h1>
              <p className="hero-header-2 text-white">
                <img
                  className="svg-white mb-5"
                  src={RectangleSVG}
                  alt="rectangle"
                />
                <br />
                A collection of writing by Team
                {' '}
                <br />
                {' '}
                Keep about the homeless
                {' '}
                <br />
                {' '}
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="stories-sizing stories-body">
        <div className="grid">
          {mediumData.map((article) => (
            <Card
              key={article.guid}
              imgUrl={article.thumbnail}
              title={article.title}
              url={article.link}
              description={article.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;

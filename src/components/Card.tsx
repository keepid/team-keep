import React from 'react';

const Card = ({ imgUrl, title, url}) => (
  <div className="card" style={{ width: '18rem' }}>
    <img src={imgUrl} className="card-img-top" alt="Medium Article" />
    <div className="card-body">
      <a href={url} className="card-title">{`${title}`}</a>
    </div>
  </div>
);

export default Card;

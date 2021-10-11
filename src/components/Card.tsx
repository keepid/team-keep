import React from 'react';

const formatTitle = (title) => title.replace(/:|amp;/g, '');

const formatDescription = (description) => {
  const descriptionWithoutHtmlTags = description.replace(/(<([^>]+)>)/ig, '');
  const shorteneddDescription = descriptionWithoutHtmlTags.split(' ').splice(0, 18).join(' ').trim();
  return `"${shorteneddDescription}..."`;
};

const Card = ({
  imgUrl, title, url, description,
}) => (
  <div className="grid-item">
    <div className="card">
      <img className="card-img" src={imgUrl} alt="Medium Article" />
      <div className="card-content">
        <h1 className="card-header">{`${formatTitle(title)}`}</h1>
        <p className="card-text">{`${formatDescription(description)}`}</p>
        <a href={url} target="_blank" rel="noreferrer">
          <button type="button" className="card-btn">Read More</button>
        </a>
      </div>
    </div>
  </div>
);

export default Card;

/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

const ProfileCard = ({
  imgUrl,
  title,
  description,
  info,
  id,
  personDescription,
}) => (
  <div className="profileGrid-item">
    <div className="card">
      <img className="profileCard-img" src={imgUrl} alt="" />
      <h1 className="profileCard-header">{`${title}`}</h1>
      <h2 className="profileCard-text">{`${description}`} </h2>
      <a
        className="collapsed"
        type="button"
        data-toggle="collapse"
        data-bs-target={info}
        aria-expanded="false"
        href={info}
        aria-controls={info}
      >
        <div className="card-btn1 ">Learn More</div>
      </a>
      <div id={id} className="collapse">
        <div className="card-body">{personDescription}</div>
      </div>
    </div>
  </div>
);

export default ProfileCard;

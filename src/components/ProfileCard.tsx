import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const ProfileCard = ({
  imgUrl,
  title,
  description,
  info,
  id,
  personDescription,
}) => (
  <div className="card-profile">
    <div className="profileGrid-item">
      <img className="profileCard-img" src={imgUrl} alt="" />
      <h1 className="profileCard-header">{`${title}`}</h1>
      <h2 className="profileCard-text">
        {`${description}`}
        {' '}
      </h2>
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

ProfileCard.defaultProps = {
  imgUrl: 'This has no image',
  title: 'This has no title',
  description: 'This has no description',
  info: 'This has no info',
  id: 'This has no id',
  personDescription: 'This has no person description',
};

ProfileCard.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  info: PropTypes.string,
  id: PropTypes.string,
  personDescription: PropTypes.string,
};

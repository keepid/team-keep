import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet';
import sidewaysbeggarImg from '../static/images/sideways-beggar.png';

const ThankYouDonate = () => (
  <Form>
    <Helmet>
      <title>ThankYouDonate</title>
      <meta
        name="viewport"
        content="width = device-width, initial-scale=1 "
      />
    </Helmet>
    <div className="container-fluid">
      <div className="row align-items-start">
        <img alt="something" src={sidewaysbeggarImg} className="beggarimage col-xs-4" />
        <div className="col-sm img-container Thank-you-box col-xs-9">
          <div className="thank-you-msg col-xs-9">
            <h1> Thank you for your donation! </h1>
            <p className="spacingthankyou">
              {' '}
              Your donation was successful. We deeply value your
            </p>
            <p className="spacingthankyou">
              contribution and the positive impact that it will have.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Form>
  // </meta>
);

export default ThankYouDonate;

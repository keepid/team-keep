import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withAlert } from 'react-alert';

// image imports
import RectangleSVG from '../static/images/rectangle.svg';
import Handshake1 from '../static/images/handshake1.png';
import Target1 from '../static/images/target1.png';
import BusinessWoman1 from '../static/images/businesswoman1.png';

class AboutUs extends Component<{}, {}> {
  render() {
    return (
      <div>
        <Helmet>
          <title>About Us</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="bg-about-us-hero-img viewport-height-100 negative-margin-top">
          <div className="container">
            <div className="viewport-height-100 custom-vertical-center">
              <div>
                <h1 className="hero-header pb-4 text-white">
                  What we stand for
                </h1>
                <img
                  className="svg-white mb-5"
                  src={RectangleSVG}
                  alt="rectangle"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row viewport-height-50">
            <div className="col-md-11 custom-vertical-center mx-auto text-center">
              <div id="info">
                <img
                  className="svg-purple mb-5"
                  src={RectangleSVG}
                  alt="rectangle"
                />
                <h3 className="hero-header text-black pb-3">
                  Our Mission
                </h3>
                <p className="hero-subtext text-grey">
                  Our mission is to prioritize collaboration with our respective stakeholders, be purpose-led in our technical and non-technical work, and practice empathy in our interactions with those with housing insecurity.
                </p>
                <p className="hero-subtext text-black font-weight-medium">
                  We are dedicated to empowering those who are experiencing homelessness to obtain, secure, and utilize identification.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div>
            <div className="custom-vertical-center mx-auto text-center">
              <div>
                <h3 className="hero-header text-black pb-3">
                  Our Values
                </h3>
                <div className="row">
                  <div className="col-md-3 mx-auto">
                    <img className="w-100 story-card-img" src={Handshake1} alt="handshake" />
                  </div>
                  <div className="col-md-9 text-left my-auto">
                    <h3 className="hero-subtext font-weight-bold pb-1">
                      Collaboration
                    </h3>
                    <p className="home-container-text">
                      We understand that without working closely with existing organizations and human support networks, we cannot generate any substantial impact with great technology alone.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mx-auto">
                    <img className="w-100 story-card-img" src={Target1} alt="target" />
                  </div>
                  <div className="col-md-9 text-left my-auto">
                    <h3 className="hero-subtext font-weight-bold pb-1">
                      Purpose
                    </h3>
                    <p className="home-container-text">
                      We understand the particular position we are in to help a disadvantaged population. We aim to create sustainable, impact-driven technology that has beneficial implications for those who entrust us with their data.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mx-auto">
                    <img className="w-100 story-card-img" src={BusinessWoman1} alt="business woman" />
                  </div>
                  <div className="col-md-9 text-left my-auto">
                    <h3 className="hero-subtext font-weight-bold pb-1">
                      Empathy
                    </h3>
                    <p className="home-container-text">
                      Without practicing empathy, we begin to abandon our mission and will succumb to the capitalist forces of systemic greed and exploitation. We need empathy to ensure that we never demean or exploit those whom we are supposed to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-12 custom-vertical-center mx-auto text-center">
              <div>
                <img
                  className="svg-purple mb-5"
                  src={RectangleSVG}
                  alt="rectangle"
                />
                <h1 className="hero-header text-black pb-4">
                  Our product vision
                </h1>
                <p className="hero-subtext text-grey text-left pb-3">
                  Our product, Keep.id, aims to build a safety net around experienced homelessness by providing electronic document storage and complementary features. We envision Keep.id as a financially sustainable, HIPAA-compliant application that serves partner organizations in the Philadelphia community, and in the future, scales to various regional hubs experiencing homelessness in the U.S. We have three main goals for achieving this vision:
                </p>
                <ul className="text-left pb-5">
                  <li className="hero-subtext text-grey pb-3">
                    <b className="text-black font-weight-medium">HIPAA Compliance</b>
                    {' '}
                    is a major engineering milestone that will signal the technical integrity of our product.
                  </li>
                  <li className="hero-subtext text-grey pb-3">
                    <b className="text-black font-weight-medium">Receiving Funding</b>
                    {' '}
                    through competitions, grants, and  contributions. This will ensure the financial sustainability of our venture, allowing for long term support, the addition of new features, and technical scalability.
                  </li>
                  <li className="hero-subtext text-grey pb-3">
                    <b className="text-black font-weight-medium">Achieve Local Buy-in</b>
                    {' '}
                    from local partner organizations in the regional hub we are focusing in. Our technology may not reach homeless populations directly, but local partners can.
                  </li>
                </ul>
                <button type="button" className="btn btn-lg btn-outline-primary">
                  More about Keep.id
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-about-us-bottom-img viewport-height-100">
          <div className="container">
            <div className="viewport-height-100 custom-vertical-center">
              <div>
                <h1 className="hero-header pb-4 text-white">
                  Let’s work to uplift a vulnerable community.
                </h1>
                <button type="button" className="btn btn-lg btn-secondary">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert()(AboutUs);

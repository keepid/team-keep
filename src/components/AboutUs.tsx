import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withAlert } from 'react-alert';

// image imports
import RectangleSVG from '../static/images/rectangle.svg';
import ArrowDown from '../static/images/arrow-down.svg';
import HomeImg1 from '../static/images/homeImg1.png';
import HomeImg2 from '../static/images/homeImg2.png';
import OurPartners from '../static/images/ourPartners.png';
import StoryImg1 from '../static/images/story1.png';
import StoryImg2 from '../static/images/story2.png';
import StoryImg3 from '../static/images/story3.png';
import HandshakeImg from '../static/images/handshake.svg';
import TargetImg from '../static/images/target.svg';
import WomanImg from '../static/images/businesswoman.svg';

class AboutUs extends Component<{}, {}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>About Us</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="about-us-hero-img viewport-height-100 negative-margin-top">
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

        <div className="container py-4">
          <div className="row viewport-height-50">
            <div className="col-md-11 custom-vertical-center mx-auto text-center">
              <div id="info">
                <img
                  className="svg-purple mb-5"
                  src={RectangleSVG}
                  alt="rectangle"
                />
                <h3 className="hero-header text-black pb-3">Our Mission</h3>
                <p className="hero-subtext text-grey">
                  Our mission is to prioritize collaboration with our respective
                  stakeholders, be purpose-led in our technical and
                  non-technical work, and practice empathy in our interactions
                  with those with housing insecurity.
                </p>
                <p className="hero-subtext text-black font-weight-medium">
                  We are dedicated to empowering those who are experiencing
                  homelessness to obtain, secure, and utilize identification.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="bordered-background">
            <div className="container">
              <div className="row custom-vertical-center align-items-center my-4">
                <div className="col-12">
                  <div>
                    <h3 className="hero-header pb-3 text-center mx-auto mt-4">
                      Our Values
                    </h3>
                  </div>
                </div>
                <div className="row custom-vertical-center justify-content-center p-4">
                  <div className="col-8 col-md-2 p-4 p-md-0 mr-md-5">
                    <div className="row justify-content-center">
                      <img src={HandshakeImg} alt="handshake" />
                    </div>
                  </div>
                  <div className="col-9 col-md-7 mb-3">
                    <div className="home-container-text text-center text-md-left">
                      <div className="mb-1 font-weight-bold">
                        <b>Collaboration</b>
                      </div>
                      We understand that without working closely with existing
                      organizations and human support networks, we cannot
                      generate any substantial impact with great technology
                      alone.
                    </div>
                  </div>
                </div>
                <div className="row custom-vertical-center justify-content-center p-4">
                  <div className="col-8 col-md-2 p-4 p-md-0 mr-md-5">
                    <div className="row justify-content-center">
                      <img src={TargetImg} alt="target" />
                    </div>
                  </div>
                  <div className="col-9 col-md-7 mb-3">
                    <div className="home-container-text text-center text-md-left">
                      <div className="mb-1 font-weight-bold">
                        <b>Purpose</b>
                      </div>
                      We understand the particular position we are in to help a
                      disadvantaged population. We aim to create sustainable,
                      impact-driven technology that has beneficial implications
                      for those who entrust us with their data.
                    </div>
                  </div>
                </div>
                <div className="row custom-vertical-center justify-content-center p-4">
                  <div className="col-8 col-md-2 p-4 p-md-0 mr-md-5">
                    <div className="row justify-content-center">
                      <img src={WomanImg} alt="woman" />
                    </div>
                  </div>
                  <div className="col-9 col-md-7 mb-3">
                    <div className="home-container-text text-center text-md-left">
                      <div className="mb-1 font-weight-bold">
                        <b>Empathy</b>
                      </div>
                      Without practicing empathy, we begin to abandon our
                      mission and will succumb to the capitalist forces of
                      systemic greed and exploitation. We need empathy to ensure
                      that we never demean or exploit those whom we are supposed
                      to help.
                    </div>
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
                  Our product, Keep.id, aims to build a safety net around
                  experienced homelessness by providing electronic document
                  storage and complementary features. We envision Keep.id as a
                  financially sustainable, HIPAA-compliant application that
                  serves partner organizations in the Philadelphia community,
                  and in the future, scales to various regional hubs
                  experiencing homelessness in the U.S. We have three main goals
                  for achieving this vision:
                </p>
                <ul className="text-left pb-5">
                  <li className="hero-subtext text-grey pb-3">
                    <b className="text-black font-weight-medium">
                      HIPAA Compliance
                    </b>
                    {' '}
                    is a major engineering milestone that will signal the
                    technical integrity of our product.
                  </li>
                  <li className="hero-subtext text-grey pb-3">
                    <b className="text-black font-weight-medium">
                      Receiving Funding
                    </b>
                    {' '}
                    through competitions, grants, and contributions. This will
                    ensure the financial sustainability of our venture, allowing
                    for long term support, the addition of new features, and
                    technical scalability.
                  </li>
                  <li className="hero-subtext text-grey pb-3">
                    <b className="text-black font-weight-medium">
                      Achieve Local Buy-in
                    </b>
                    {' '}
                    from local partner organizations in the regional hub we are
                    focusing in. Our technology may not reach homeless
                    populations directly, but local partners can.
                  </li>
                </ul>
                <a href="https://keep.id/">
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-primary"
                  >
                    More about Keep.id
                  </button>
                </a>
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
                <a href="https://teamkeep.nationbuilder.com/donate">
                  <button type="button" className="btn btn-lg btn-secondary">
                    Donate now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert()(AboutUs);

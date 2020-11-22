import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withAlert } from 'react-alert';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// image imports
import HeroImage from '../static/images/personalData.svg';
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

const iconSize = 20;
class AboutUs extends Component<{}, {}> {
  render() {
    return (
      <div>
        <Helmet>
          <title>Welcome</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="bg-about-us-hero-img viewport-height-100">
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
              <div className="row custom-vertical-center align-items-center my-5">
                <div className="col-12">
                  <div>
                    <h3 className="hero-header pb-3 text-center mx-auto mt-4">
                      Our Values
                    </h3>
                  </div>
                </div>
                <div className="row custom-vertical-center mx-auto align-items-center py-4">
                  <div className="col-1" />
                  <div className="col-2 mr-5">
                    <img src={HandshakeImg} alt="handshake" />
                  </div>
                  <div className="col-7">
                    <div className="home-container-text">
                      <div className="mb-1">
                        <b>Collaboration</b>
                      </div>
                      We understand that without working closely with existing
                      organizations and human support networks, we cannot
                      generate any substantial impact with great technology
                      alone.
                    </div>
                  </div>
                </div>
                <div className="row custom-vertical-center mx-auto align-items-center py-4">
                  <div className="col-1" />
                  <div className="col-2 mr-5">
                    <img src={TargetImg} alt="target" />
                  </div>
                  <div className="col-7">
                    <div className="home-container-text">
                      <div className="mb-1">
                        <b>Purpose</b>
                      </div>
                      We understand the particular position we are in to help a
                      disadvantaged population. We aim to create sustainable,
                      impact-driven technology that has beneficial implications
                      for those who entrust us with their data.
                    </div>
                  </div>
                </div>
                <div className="row custom-vertical-center mx-auto align-items-center py-4">
                  <div className="col-1" />
                  <div className="col-2 mr-5">
                    <img src={WomanImg} alt="woman" />
                  </div>
                  <div className="col-7">
                    <div className="home-container-text">
                      <div className="mb-1">
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

        <div className="mb-5">
          <div className="bg-secondary-dark w-75 viewport-height-100 partial-background" />
          <div className="container">
            <span className="overlay-text">
              <div className="row viewport-height-100 custom-vertical-center">
                <div className="col-md-7 pr-4">
                  <div>
                    <h3 className="hero-header text-light-grey pb-3">
                      Identification is key
                    </h3>
                    <p className="text-light-grey home-container-text">
                      Homelessness falls at the intersection of many social
                      issues: income inequality, substance abuse, unaffordable
                      healthcare, and more.
                    </p>
                    <p className="text-light-grey home-container-text">
                      Obtaining identification helps individuals access
                      essential services and escape the cycle of homelessness.
                    </p>
                    <button
                      type="button"
                      className="mt-4 btn btn-lg btn-outline-white"
                    >
                      More about the Issue
                    </button>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    src={HomeImg1}
                    className="w-100"
                    alt="Homeless person 1"
                  />
                </div>
              </div>
            </span>
          </div>
        </div>
        <div>
          <div className="bg-secondary-yellow-dark w-75 viewport-height-100 partial-background right" />
          <div className="container">
            <span className="overlay-text">
              <div className="row viewport-height-100 custom-vertical-center">
                <div className="col-md-4 pr-4">
                  <img
                    src={HomeImg2}
                    className="w-100"
                    alt="Homeless person 2"
                  />
                </div>
                <div className="col-md-8">
                  <div>
                    <h3 className="hero-header pb-3">
                      We use technology to empower a vulnerable population.
                    </h3>
                    <p className="home-container-text">
                      We build long-term partnerships with homeless services and
                      bring them on to our cloud platform, Keep.id.
                    </p>
                    <p className="home-container-text">
                      Keep.id assists individuals experiencing homelessness in
                      the acquisition, storage, and application of
                      identification to gain access to aid and employment
                      opportunities.
                    </p>
                    <button
                      type="button"
                      className="mt-4 btn btn-lg btn-outline-black"
                    >
                      What we are doing
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className="container">
          <div className="row viewport-height-50">
            <div className="col-md-10 custom-vertical-center mx-auto text-center">
              <div className="w-100">
                <img
                  className="svg-light-grey mb-5"
                  src={RectangleSVG}
                  alt="divider rectangle"
                />
                <h3 className="hero-header text-grey pb-4">Our partnerships</h3>
                <img className="w-100" src={OurPartners} alt="Our partners" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-10 custom-vertical-center mx-auto text-center">
                <div className="w-100">
                  <h3 className="hero-header py-3">
                    Everyone has a story to tell
                  </h3>
                  <p className="home-container-text pb-4 text-grey">
                    We want every individual experiencing homelessness to not
                    only reclaim their sense of identity, but also to reclaim
                    their voice. Here are some of their stories.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={StoryImg1}
                  className="my-3 w-100 story-card-img"
                  alt="homeless individual"
                />
                <h3 className="hero-subtext font-weight-bold pb-1">
                  Dan Smith
                </h3>
                <p className="home-container-text pb-2">
                  CENTER CITY, PHILADELPHIA, PA
                </p>
                <button
                  type="button"
                  className="btn btn-lg btn-outline-primary"
                >
                  Read more
                </button>
              </div>
              <div className="col-md-4">
                <img
                  src={StoryImg2}
                  className="my-3 w-100 story-card-img"
                  alt="homeless individual"
                />
                <h3 className="hero-subtext font-weight-bold pb-1">
                  Dan Smith
                </h3>
                <p className="home-container-text pb-2">ATLANTA, GA</p>
                <button
                  type="button"
                  className="btn btn-lg btn-outline-primary"
                >
                  Read more
                </button>
              </div>
              <div className="col-md-4">
                <img
                  src={StoryImg3}
                  className="my-3 w-100 story-card-img"
                  alt="homeless individual"
                />
                <h3 className="hero-subtext font-weight-bold pb-1">
                  Dan Smith
                </h3>
                <p className="home-container-text pb-2">
                  KENSINGTON, PHILADELPHIA, PA
                </p>
                <button
                  type="button"
                  className="btn btn-lg btn-outline-primary"
                >
                  Read more
                </button>
              </div>
            </div>
            <div className="row py-5">
              <div className="col-md-3 custom-vertical-center mx-auto text-center">
                <button type="button" className="btn btn-lg btn-outline-dark">
                  All stories
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

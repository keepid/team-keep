import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withAlert } from 'react-alert';
import { Link } from 'react-router-dom';
// import ReCAPTCHA from 'react-google-recaptcha';
// import getServerURL from '../serverOverride';
// import { reCaptchaKey } from '../configVars';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// image imports
import HeroImage from '../static/images/personalData.svg';
import RectangleSVG from '../static/images/rectangle.svg';
import ArrowDown from '../static/images/arrow-down.svg';
import HomeImg1 from '../static/images/homeImg1.png';
import HomeImg2 from '../static/images/homeImg2.png';
import Partners from '../static/images/partners.png';
import StoryImg1 from '../static/images/story1.png';
import StoryImg2 from '../static/images/story2.png';
import StoryImg3 from '../static/images/story3.png';
import AnnualReport from '../static/images/2020AnnualReport.pdf';
import fireworks from '../static/images/fireworks.svg';
import statementOfSolidarity from '../static/images/Team Keep AAPI Solidarity Statement.pdf';

const iconSize = 20;
class Home extends Component<{}, {}> {
  render() {
    return (
      <div>
        <Helmet>
          <title>Welcome</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="bg-secondary-yellow-dark pb-5 w-sm-100 w-md-100 w-100">
          <div className="container text-center py-2">
            <p>
              We have received official 501(c)(3) nonprofit tax-exempt status from the IRS!
              Join our fundraiser May 5 - 12 to celebrate. Click the Donate button up top,
              or click here
              <a href="https://www.facebook.com/events/2908815029385369" target="_blank" rel="noreferrer"> here </a>
              to learn more.
            </p>
          </div>
        </div>
        <div className="bg-gray viewport-height-100">
          <div className="container">
            <div className="row py-5 viewport-height-100 negative-margin-top">
              <div className="col-lg-6 custom-vertical-center pt-5">
                <div>
                  <h1 className="hero-header pb-4">
                    Combatting homelessness in the digital age
                  </h1>
                  <AnchorLink offset="200" href="#info">
                    <button type="button" className="btn btn-primary btn-lg">
                      Learn more
                      <img
                        className="ml-1 svg-white"
                        width={iconSize}
                        height={iconSize}
                        src={ArrowDown}
                        alt="arrow down"
                      />
                    </button>
                  </AnchorLink>
                </div>
              </div>
              <div className="col-lg-6 custom-vertical-center">
                <img
                  className="hero-image w-100"
                  src={HeroImage}
                  alt="Personal Identification Cards"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row viewport-height-50">
            <div className="col-md-10 custom-vertical-center mx-auto text-center">
              <div id="info">
                <img
                  className="svg-purple mb-5"
                  src={RectangleSVG}
                  alt="rectangle"
                />
                <h3 className="hero-subtext text-grey pb-3">
                  Lacking formal identification is a prevalent issue among
                  homeless individuals that bars them from accessing many basic
                  social and financial services in the United States.
                </h3>
                <h3 className="hero-subtext text-black font-weight-medium">
                  We are dedicated to empowering those who are experiencing
                  homelessness to obtain, secure, and utilize identification.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="bg-secondary-dark w-sm-100 w-md-100 w-75 viewport-height-100 partial-background toggle-hide" />
          <div className="container">
            <span className="overlay-text">
              <div className="row viewport-height-100 custom-vertical-center">
                <div className="col-md-7 pr-4 toggle-display-dark py-2 my-3">
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
                    {/* <button
                      type="button"
                      className="mt-4 btn btn-lg btn-outline-white"
                    >
                      More about the Issue
                    </button> */}
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
          <div className="bg-secondary-yellow-dark w-75 viewport-height-100 partial-background right toggle-hide" />
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
                <div className="col-md-8 toggle-display-dark-yellow py-2 my-3">
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
                    <Link to="/about-us">
                      <button
                        type="button"
                        className="mt-4 btn btn-lg btn-outline-black"
                      >
                        What we are doing
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>

        <div className="container py-5">
          <div className="row viewport-height-50">
            <div className="col-md-10 custom-vertical-center mx-auto text-center">
              <div id="info">
                <img
                  className="svg-purple mb-5"
                  src={RectangleSVG}
                  alt="rectangle"
                />
                <h3 className="hero-subtext text-grey pb-3">
                  Lacking formal identification is a prevalent issue among
                  homeless individuals that bars them from accessing many basic
                  social and financial services in the United States.
                </h3>
                <h3 className="hero-subtext text-black font-weight-medium">
                  We are dedicated to empowering those who are experiencing
                  homelessness to obtain, secure, and utilize identification.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="bg-secondary-dark w-100 viewport-height-100 partial-background toggle-hide" />
          <div className="container">
            <span className="overlay-text">
              <div className="row viewport-height-100 custom-vertical-center">
                <div className="col-md-12 text-center">
                  <div>
                    <img src={fireworks} height="90" width="100" className="float-left" alt="confetti" />
                    <img src={fireworks} height="90" width="100" className="float-right" alt="confetti" />
                    <h3 className="hero-header text-light-grey pb-3">
                      Our 2020 Annual Report
                    </h3>
                    <a href={AnnualReport}>
                      <button type="button" className="btn btn-lg btn-primary">
                        View PDF
                      </button>
                    </a>
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
                <img className="w-100" src={Partners} alt="Partners" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-gray">
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
                <div className="align-bottom mt-auto">
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-primary"
                  >
                    Read more
                  </button>
                </div>
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
                <div className="align-bottom mt-auto">
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-primary"
                  >
                    Read more
                  </button>
                </div>
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
                <div className="align-bottom mt-auto">
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-primary"
                  >
                    Read more
                  </button>
                </div>
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
        </div> */}
        <div className="row bordered-background viewport-height-100 w-100 mx-0">
          <div className="container my-auto text-center">
            <div className="custom-vertical-center align-items-center">
              <div>
                <h1 className="hero-header pb-4 text-black text-center">
                  Let’s build a safety net for our most vulnerable citizens.
                </h1>
                <a href="https://www.paypal.com/donate/?hosted_button_id=UZ3C7N5LSXQQC">
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

export default withAlert()(Home);

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withAlert } from 'react-alert';
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
import OurPartners from '../static/images/ourPartners.png';

const iconSize = 20;
class Home extends Component<{}, {}> {
  render() {
    return (
      <div>
        <Helmet>
          <title>Welcome</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="bg-gray viewport-height-100">
          <div className="container">
            <div className="row viewport-height-100">
              <div className="col-md-6 custom-vertical-center">
                <div>
                  <h1 className="hero-header pb-4">Combatting homelessness in the digital age</h1>
                  <AnchorLink offset="200" href="#info">
                    <button type="button" className="btn btn-primary btn-lg">
                      Learn more
                      <img className="ml-1 svg-white" width={iconSize} height={iconSize} src={ArrowDown} alt="arrow down" />
                    </button>
                  </AnchorLink>
                </div>
              </div>
              <div className="col-md-6 custom-vertical-center">
                <img className="hero-image w-100" src={HeroImage} alt="Personal Identification Cards" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row viewport-height-50">
            <div className="col-md-10 custom-vertical-center mx-auto text-center">
              <div id="info">
                <img className="svg-purple mb-5" src={RectangleSVG} alt="rectangle" />
                <h3 className="hero-subtext text-grey pb-3">
                  Lacking formal identification is a prevalent issue among homeless individuals that bars them from accessing many basic social and financial services in the United States.
                </h3>
                <h3 className="hero-subtext text-black font-weight-medium">
                  We are dedicated to empowering those who are experiencing homelessness to obtain, secure, and utilize identification.
                </h3>
                <button type="button" className="mt-4 btn btn-lg btn-outline-primary">
                  Unclear where this button goes?
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary-dark mb-5">
          <div className="container">
            <div className="row viewport-height-100 custom-vertical-center">
              <div className="col-md-8">
                <div>
                  <h3 className="hero-header text-light-grey pb-3">
                    Identification is key
                  </h3>
                  <p className="text-light-grey home-container-text">
                    Homelessness falls at the intersection of many social issues: income inequality, substance abuse, unaffordable healthcare, and more.
                  </p>
                  <p className="text-light-grey home-container-text">
                    Obtaining identification helps individuals access essential services and escape the cycle of homelessness.
                  </p>
                  <button type="button" className="mt-4 btn btn-lg btn-outline-primary">
                    More about the Issue
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <img src={HomeImg1} className="w-100" alt="Homeless person 1" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary-yellow-dark">
          <div className="container">
            <div className="row viewport-height-100 custom-vertical-center">
              <div className="col-md-4">
                <img src={HomeImg2} className="w-100" alt="Homeless person 2" />
              </div>
              <div className="col-md-8">
                <div>
                  <h3 className="hero-header pb-3">
                    We use technology to empower a vulnerable population.
                  </h3>
                  <p className="home-container-text">
                    We build long-term partnerships with homeless services and bring them on to our cloud platform, Keep.id.
                  </p>
                  <p className="home-container-text">
                    Keep.id assists individuals experiencing homelessness in the acquisition, storage, and application of identification to gain access to aid and employment opportunities.
                  </p>
                  <button type="button" className="mt-4 btn btn-lg btn-outline-primary">
                    What we are doing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row viewport-height-50">
            <div className="col-md-10 custom-vertical-center mx-auto text-center">
              <div className="w-100">
                <img className="svg-light-grey mb-5" src={RectangleSVG} alt="divider rectangle" />
                <h3 className="hero-header text-grey pb-4">
                  Our partnerships
                </h3>
                <img className="w-100" src={OurPartners} alt="Our partners" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert()(Home);

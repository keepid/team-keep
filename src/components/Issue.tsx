import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withAlert } from 'react-alert';

// image imports
import RectangleSVG from '../static/images/rectangle.svg';

const iconSize = 20;
class AboutUs extends Component<{}, {}> {
  render() {
    return (
      <div>
        <Helmet>
          <title>Welcome</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="bg-issue-home1-img viewport-height-100 negative-margin-top">
          <div className="container">
            <div className="viewport-height-100 custom-vertical-center">
              <div>
                <h1 className="hero-header pb-4 text-white">
                  Lack of identification
                  {' '}
                  <br />
                  {' '}
                  is a serious struggle
                  {' '}
                  <br />
                  {' '}
                  for the homeless
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
                <p className="hero-subtext text-grey">
                  Unsheltered homelessness has risen by 22% since 2015, and the recent pandemic has only exacerbated this problem.
                </p>
                <p className="hero-subtext text-black ">
                  Lacking identification documents perpetuates this cycle of homelessness by barring access to essential services. It is a chronic problem that needs to be addressed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bordered-background1 viewport-height-100">
          <div className="container my-auto text-center">
            <div className="py-5 my-4 custom-vertical-center align-items-center align-center">
              <div className="row">
                <div className="mx-auto col-md-12">
                  <h3 className="hero-header1 font-weight-bold pb-4">
                    Homelessness in the US
                  </h3>
                </div>
                <div className="mx-auto col-md-8">
                  <p className="text-purple">
                    552,820 people
                  </p>
                  <p className="text-light-black home-container-text">
                    The size of the population experiencing
                    homelessness on a single night in 2019
                  </p>
                  <p className="text-purple ">
                    5,800 people
                  </p>
                  <p className="text-light-black home-container-text">
                    The number of chronically homeless
                    individuals in Philadelphia
                  </p>
                  <p className="text-purple ">
                    6,583 people
                  </p>
                  <p className="text-light-black home-container-text">
                    The number of youth experiencing
                    homelessness in Philadelphia
                  </p>
                  <p className="text-purple1">
                    Source: Annual Homelessness Assessment Report of 2019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bordered-background2 ">
          <div className=" my-auto text-center miniborder-background ">
            <div className=" container custom-vertical-center align-items-center viewport-height-100">
              <div className="py-5 my-3">
                <div className="mx-auto">
                  <h3 className="hero-header2 font-weight-bold pb-3">
                    What happens when you don&apos;t have identification?
                  </h3>
                  <div className="row my-4 custom-vertical-center">
                    <div className="col-md-3 mx-auto hero-header2 pb-3 pb-md-2">
                      54%
                    </div>
                    <div className="col-md-9 text-left my-auto">
                      <p className="home-container-text text-white-issue text-center text-md-left">
                        of homeless individuals report being denied
                        {' '}
                        <br />
                        access to shelters or adequate housing services
                      </p>
                    </div>
                  </div>

                  <div className="row my-4 custom-vertical-center">
                    <div className="col-md-3 mx-auto hero-header2 pb-3 pb-md-2">
                      53%
                    </div>
                    <div className="col-md-9 text-left my-auto">
                      <p className="home-container-text text-white-issue text-center text-md-left">
                        of homeless individuals report being denied
                        {' '}
                        <br />
                        {' '}
                        access to foodstamps
                      </p>
                    </div>
                  </div>

                  <div className="row my-4 custom-vertical-center">
                    <div className="col-md-3 mx-auto hero-header2 pb-3 pb-md-2">
                      45%
                    </div>
                    <div className="col-md-9 text-left my-auto">
                      <p className="home-container-text text-white-issue text-center text-md-left">
                        of homeless individuals report being denied access
                        {' '}
                        <br />
                        {' '}
                        to Medicaid or other medical services
                      </p>
                    </div>
                  </div>
                  <p className="text-purple1">
                    Source: Annual Homelessness Assessment Report of 2019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-issue-bgseclast-img  viewport-height-50">
          <div className="container">
            <div className="viewport-height-50 custom-vertical-center">
              <div>
                <h1 className="hero-header pb-4 text-black custom-horizontal-center">
                  There can be many barriers
                  {' '}
                  <br />
                  to obtaining identification
                </h1>
                <button
                  type="button"
                  className="btn btn-lg btn-primary"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row bordered-background viewport-height-50 ">
            <div className="container my-auto text-center">
              <div className="custom-vertical-center align-items-center">
                <div className="mx-auto">
                  <h1 className="hero-header text-black align-items-center ">
                    We are here to help!
                  </h1>
                  <a href="https://teamkeep.nationbuilder.com/donate">
                    <button type="button" className="btn btn-lg btn-secondary">
                      Donate Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withAlert()(AboutUs);

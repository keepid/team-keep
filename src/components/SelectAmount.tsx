import React, { Component, ReactElement } from 'react';
import Card from 'react-bootstrap/Card';
import braintree from 'braintree-web';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import ManWithBeard from '../static/images/front-view-homeless-man-with-beard.png';
import getServerURL from '../serverOverride';

interface State {
  matches: boolean;
}
interface Props {}

class SelectAmount extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      matches: window.matchMedia('(min-width: 600px)').matches,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const handler = (e) => this.setState({ matches: e.matches });
    window
      .matchMedia('(min-width: 1000px)')
      .addEventListener('change', handler);
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: 'white',
          }}
        >
          <Helmet>
            <title>Welcome </title>
            <meta name="description" content="Keep.id" />
          </Helmet>

          <div>
            {this.state.matches && (
              <div className="d-flex">
                <div className="container my-5">
                  <div
                    className="row align-items-start"
                    style={{ backgroundColor: '#445FEB' }}
                  >
                    <div className="col-sm img-container Thank-you-box">
                      <div>
                        <h1
                          className="pl-5 pb-5 pt-3 intro-msg"
                          style={{ color: 'white' }}
                        >
                          <b>Your donation makes a difference.</b>
                        </h1>
                        <h3
                          className="pl-5 pb-3 intro-msg2"
                          style={{ color: 'white', fontWeight: 'lighter' }}
                        >
                          54% of homeless individuals
                          {' '}
                          <br />
                          without ID report being denied
                          {' '}
                          <br />
                          access to shelters.
                        </h3>
                        <h3
                          className="pl-5 pb-5 intro-msg"
                          style={{ color: 'white', fontWeight: 'bolder' }}
                        >
                          <b>
                            Let’s make sure that never
                            {' '}
                            <br />
                            happens.
                          </b>
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-6 px-0 py-0 custom-vertical-center px-4">
                      <img
                        alt="Create an account image"
                        className="home-form-svg text-left"
                        src={ManWithBeard}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!this.state.matches && (
              <div>
                <div className="container px-0 mx-0 py-0 my-0">
                  <img
                    alt="Create an account image"
                    className="home-form-svg text-left"
                    src={ManWithBeard}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="container">
                  <h1
                    className="pl-1 pb-3 pt-5"
                    style={{
                      color: 'black',
                      fontWeight: 'lighter',
                      textAlign: 'center',
                    }}
                  >
                    54% of homeless individuals without ID report being denied
                    access to shelters.
                  </h1>

                  <h1
                    className="pl-1 pb-5 pt-3"
                    style={{
                      color: 'black',
                      fontWeight: 'bolder',
                      textAlign: 'center',
                    }}
                  >
                    <b>
                      Let’s make sure that never
                      {' '}
                      <br />
                      happens.
                    </b>
                  </h1>
                </div>
              </div>
            )}
            {this.state.matches && (
              <div>
                <div className="d-flex container px-2 mt-2 pt-2">
                  <div className="d-flex justify-content-center">
                    <div
                      style={{
                        backgroundColor: 'white',
                        borderBlockColor: 'white',
                      }}
                    >
                      <div className="mx-auto p-5 ">
                        <h3 style={{ fontWeight: 'bolder' }}>
                          1. Select Amount
                        </h3>
                        <div className="container custom-vertical-center">
                          <button
                            type="button"
                            className="btn btn-outline-primary mt-3 px-4 mx-3"
                          >
                            $10
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-primary mt-3 px-4 mx-3"
                          >
                            $20
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-primary mt-3 px-4 mx-3"
                          >
                            $30
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-primary mt-3 px-4 mx-3"
                          >
                            $40
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-primary mt-3 px-4 mx-3"
                          >
                            $50
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-primary mt-3 px-4 mx-3"
                          >
                            $60
                          </button>
                          <button
                            className="btn btn-outline-primary mt-3 px-5"
                            placeholder="$"
                          >
                            <input id="option7" placeholder="$" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container py-3 px-2 mb-0 ">
                  <div className=" d-flex justify-content-center">
                    <div style={{ backgroundColor: 'white' }}>
                      <Link
                        className="nav-link text-white mx-2"
                        to="/information"
                      >
                        <button
                          type="button"
                          className="btn btn-lg btn-secondary"
                          style={{
                            backgroundColor: '#445FEB',
                            color: 'white',
                            borderColor: '#445FEB',
                          }}
                        >
                          Donate
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!this.state.matches && (
              <div>
                <div className="bordered-background">
                  <div
                    style={{
                      backgroundColor: 'white',
                      borderBlockColor: '#445FEB',
                    }}
                  >
                    <div className="mx-auto pt-3">
                      <div className="mx ml-3">
                        <h3 style={{ fontWeight: 'bolder' }}>
                          <b>1. Select Amount</b>
                        </h3>
                      </div>
                      <div className="container ">
                        <div className="row">
                          <div className="col">
                            <button
                              type="button"
                              className="btn btn-outline-primary mt-3 px-4 mx-3"
                            >
                              $10
                            </button>
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="btn btn-outline-primary mt-3 px-4 mx-3"
                            >
                              $20
                            </button>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <button
                              type="button"
                              className="btn btn-outline-primary mt-3 px-4 mx-3"
                            >
                              $30
                            </button>
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="btn btn-outline-primary mt-3 px-4 mx-3"
                            >
                              $40
                            </button>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <button
                              type="button"
                              className="btn btn-outline-primary mt-3 px-4 mx-3"
                            >
                              $50
                            </button>
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="btn btn-outline-primary mt-3 px-4 mx-3"
                            >
                              $60
                            </button>
                          </div>
                        </div>
                        <div className="row">
                          <button
                            className="btn btn-outline-primary mt-3 px-5"
                            placeholder="$"
                          >
                            <input id="option7" placeholder="$" />
                          </button>

                          <div className="container py-3 px-2 mb-0 ">
                            <div className="d-flex justify-content-center">
                              <Link
                                className="inline-block nav-link text-white mx-2"
                                to="/select-amount"
                              >
                                <button
                                  type="button"
                                  className="btn btn-lg btn-secondary"
                                  style={{
                                    backgroundColor: 'white',
                                    color: '#445FEB',
                                    borderColor: '#445FEB',
                                  }}
                                >
                                  Back
                                </button>
                              </Link>
                              <Link
                                className="inline-block nav-link text-white mx-2"
                                to="/select-amount"
                              >
                                <button
                                  type="button"
                                  className="btn btn-lg btn-secondary"
                                  style={{
                                    backgroundColor: '#445FEB',
                                    color: 'white',
                                    borderColor: '#445FEB',
                                  }}
                                >
                                  Next
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectAmount;

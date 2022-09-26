import React, { useState, useEffect } from 'react';
import braintree from 'braintree-web';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';
import ReCAPTCHA from 'react-google-recaptcha';
import { withAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import creditcardImg from '../static/images/creditcardImg.png';
import creditcardsImg from '../static/images/credit-cardsImg.png';
import getServerURL from '../serverOverride';

const Donation = () => {
  const [clientToken, setClientToken] = useState();
  const [amount, setAmount] = useState('');
  const [number, setNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [postalCode, setPostalCode] = useState('');

  useEffect(() => {
    fetch(`${getServerURL()}/donation-generate-client-token`, {
      method: 'GET',
    }).then((response) => {
      if (response.status !== 200) {
        console.log('Unable to fetch client token from server.');
      } else {
        response.json().then((data) => {
          setClientToken(data.message);
        });
      }
    });
  }, []);

  const payment = () => {
    // Creates the braintree client
    braintree.client.create(
      {
        authorization: clientToken,
      },
      (error, client) => {
        // Creates the nonce token
        client.request(
          {
            endpoint: 'payment_methods/credit_cards',
            method: 'post',
            data: {
              creditCard: {
                number,
                expirationDate,
                cvv,
                billingAddress: {
                  postalCode,
                },
              },
            },
          },
          (err, response) => {
            // send the nonce and the payment amount to the server.
            fetch(`${getServerURL()}/donation-checkout`, {
              method: 'POST',
              body: JSON.stringify({
                payment_method_nonce: response.creditCards[0].nonce,
                amount,
              }),
            }).then((resp) => {
              resp.json().then((data) => {
                console.log(data.status);
              });
            });
          },
        );
      },
    );
  };

  return (
    <div className="bordered-background-payment">
      <div className="container my-5 py-4 text-center">
        <h1 className="hero-header-payment-method mb-1">
          {' '}
          3. Payment Details
          {' '}
        </h1>
        <div className="row pb-2 mb-2 mx-2">
          <div className="col-md-8 mx-auto">
            <div className="credit-card-box">
              <Form>
                <div className="top-card">
                  <Row>
                    <Col className="col-6 col-lg-6 col-sm-2">
                      <div className="credit-card-Img">
                        <img
                          src={creditcardImg}
                          alt="credit-card"
                          className="img-fluid"
                        />
                        <div className="heading-card">Pay with Card</div>
                      </div>
                      <div className="creditcardsImg">
                        <img src={creditcardsImg} alt="credit-card" />
                      </div>
                    </Col>
                  </Row>
                </div>

                <hr className="credit-card-box-line" />
                <Row>
                  <Col>
                    <Form.Label className="headinginfo">Amount</Form.Label>
                    <Form.Control
                      className="headinginfo"
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="$  "
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label className="headinginfo">Card Number</Form.Label>
                    <Form.Control
                      className="headinginfo"
                      onChange={(e) => setNumber(e.target.value)}
                      placeholder="XXXX XXXX XXXX XXXX"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="headinginfo">
                      Expiration Date
                    </Form.Label>
                    <Form.Control
                      className="headinginfo"
                      onChange={(e) => setExpirationDate(e.target.value)}
                      placeholder="MM/YY"
                    />
                  </Col>
                  <Col>
                    <Form.Label className="headinginfo">CVV</Form.Label>
                    <Form.Control
                      className="headinginfo"
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="CVV"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="headinginfo">Postal Code</Form.Label>
                    <Form.Control
                      className="headinginfo"
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="Postal Code"
                    />
                  </Col>
                  <Col />
                </Row>
              </Form>
              <div className="d-flex justify-content-center">
                <Link
                  className="inline-block nav-link text-white mx-2"
                  to="/information"
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
                <Link className="nav-link text-white mx-2" to="/ThankYouDonate">
                  <button
                    type="button"
                    className="btn btn-lg btn-secondary"
                    style={{
                      backgroundColor: '#445FEB',
                      color: 'white',
                      borderColor: '#445FEB',
                    }}
                    onClick={payment}
                  >
                    Done
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;

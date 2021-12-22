import React, { useState, useEffect } from 'react';
import braintree from 'braintree-web';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    braintree.client.create({
      authorization: clientToken,
    }, (error, client) => {
      // Creates the nonce token
      client.request({
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
      }, (err, response) => {
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
      });
    });
  };

  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Label className="text-center">Amount</Form.Label>
            <Form.Control
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label className="text-center">Card Number</Form.Label>
            <Form.Control
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Card Number"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label className="text-center">Expiration Date</Form.Label>
            <Form.Control
              onChange={(e) => setExpirationDate(e.target.value)}
              placeholder="Expiration Date"
            />
          </Col>
          <Col>
            <Form.Label className="text-center">CVV</Form.Label>
            <Form.Control
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label className="text-center">Postal Code</Form.Label>
            <Form.Control
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Postal Code"
            />
          </Col>
          <Col />
        </Row>
      </Form>
      <Button onClick={payment}>Pay</Button>
    </div>
  );
};

export default Donation;

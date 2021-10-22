import React from 'react';
import DropIn from 'braintree-web-drop-in-react';
import { Helmet } from 'react-helmet';
import { Braintree, HostedField } from 'react-braintree-fields';
import getServerURL from '../serverOverride';

import RectangleSVG from '../static/images/story2.png';
import handsSVG from '../static/images/valuesHero.png';

class Donate extends React.Component<{}, {clientToken: string, amount: string, processing: number, pageNum:number}> {
    instance;

    constructor(props) {
      super(props);
      this.state = {
        clientToken: '', amount: '5', processing: 0, pageNum: 1,
      };
    }

    componentDidMount() {
    // Get a client token for authorization from your server
      fetch(`${getServerURL()}/generate-client-token`, { method: 'GET' })
        .then((response) => response.text()).then((responseJSON) => {
          // console.log(responseJSON);
          this.setState({ clientToken: responseJSON });
        });
    }

    async buy() {
    // Send the nonce to your server
      this.setState({ processing: 1 });
      const { nonce } = await this.instance.requestPaymentMethod();
      fetch(`${getServerURL()}/checkout-donation`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          payment_method_nonce: nonce,
          amount: this.state.amount,
        }),
      })
        .then((response) => response.json())
        .then((responseJSON) => {
          if (responseJSON.status === 'SUCCESS') {
            console.log('yay'); // this doesn't happen
          }
        });
      this.setState({ pageNum: 4 });
    }

    render() {
      let dropInComponent;
      let buyButton;
      let hostedFieldsPage;
      let output;

      if (this.state.processing === 0) {
        buyButton = <button className="btn btn-outline-dark m-3" type="button" onClick={this.buy.bind(this)}>Confirm Payment</button>;
      } else if (this.state.processing === 1) {
        buyButton = (
          <button type="button" className="btn-primary" disabled>
            <div className="Spinner sm status true" />
            Loading...
          </button>
        );
      }

      if (!this.state.clientToken) {
        dropInComponent = (
          <div>
            <h1>Loading...</h1>
          </div>
        );
      } else {
        dropInComponent = (
          <div className="col sm-6 justify-content-center">
            <DropIn
              options={{ authorization: this.state.clientToken }}
              onInstance={(instance) => (this.instance = instance)}
            />
            {buyButton}
          </div>
        );
      }

      const welcomePage = (
        <div>
          <div className="justify-content-center">
            <header className="m-2 h3">Your donation makes a difference</header>
            <div className="row justify-content-center">
              <div className="col-sm-3 m-3">
                <div className="card">
                  <img className="card-img-top" src={RectangleSVG} alt="" />
                </div>
              </div>
              <div className="col-sm-3 m-3">
                <div className="card">
                  <img className="card-img-top" src={RectangleSVG} alt="" />
                </div>
              </div>
              <div className="col-sm-3 m-3">
                <div className="card">
                  <img className="card-img-top" src={RectangleSVG} alt="" />
                </div>
              </div>
            </div>
            <header className="m-2 h4"> 1. Select Amount</header>
            <div className="row justify-content-center">
              <button className="col-sm-1 btn btn-primary m-2" type="button" onClick={() => this.setState({ amount: '10' })}>10</button>
              <button className="col-sm-1 btn btn-primary m-2" type="button" onClick={() => this.setState({ amount: '20' })}>20</button>
              <button className="col-sm-1 btn btn-primary m-2" type="button" onClick={() => this.setState({ amount: '30' })}>30</button>
              <button className="col-sm-1 btn btn-primary m-2" type="button" onClick={() => this.setState({ amount: '40' })}>40</button>
              <button className="col-sm-1 btn btn-primary m-2" type="button" onClick={() => this.setState({ amount: '50' })}>50</button>
              <div className="col-sm-4 input-group m-1">
                <input type="text" className="form-control" value={this.state.amount} />
              </div>
            </div>
            <button className="btn btn-outline-secondary m-3" type="button" id="button-addon2" onClick={() => this.setState({ pageNum: 3 })}>Donate!</button>
          </div>
        </div>
      );

      const thankYouPage = (
        <div>
          <header className="h3">Thank you for your donation</header>
          <a>Extra text about where the donation goes</a>
          <div className="row justify-content-center">
            <img className="col-sm-10 m-4" height="250px" object-fit="cover" src={handsSVG} alt="" />
          </div>
        </div>
      );

      if (this.state.pageNum === 1) {
        output = welcomePage;
      } else if (this.state.pageNum === 2) {
        output = hostedFieldsPage;
      } else if (this.state.pageNum === 3) {
        output = (
          <div>
            <div className="row justify-content-center">
              <div className="col-sm-10">
                <DropIn
                  options={{ authorization: this.state.clientToken }}
                  onInstance={(instance) => (this.instance = instance)}
                />
              </div>
            </div>
            <div className="row justify-content-center">{buyButton}</div>
          </div>
        );
        // doing {dropInComponent} doesn't work?
      } else if (this.state.pageNum === 4) {
        output = thankYouPage;
      }

      return (
        <div className="container">
          <Helmet>
            <title>Welcome</title>
            <meta name="description" content="Keep.id" />
          </Helmet>
          {output}
        </div>
      );
    }
}

// card: 4111 1111 1111 1111, year: 01/24

export default (Donate);

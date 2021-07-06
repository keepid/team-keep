import React from 'react';
import DropIn from 'braintree-web-drop-in-react';
import { Helmet } from 'react-helmet';
import getServerURL from '../serverOverride';

class Donate extends React.Component<{}, {clientToken: string, amount: string, showDropin: boolean}> {
    instance;

    constructor(props) {
      super(props);
      this.state = { clientToken: '', amount: '5', showDropin: false };
    }

    componentDidMount() {
    // Get a client token for authorization from your server
      fetch(`${getServerURL()}/generate-client-token`, { method: 'GET' })
        .then((response) => response.text()).then((responseJSON) => {
          console.log(responseJSON);
          this.setState({ clientToken: responseJSON });
        });
    }

    async buy() {
    // Send the nonce to your server
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
            console.log('yay');
          }
        });
    }

    render() {
      let dropInComponent;
      if (!this.state.showDropin) {
        dropInComponent = <div />;
      } else if (!this.state.clientToken) {
        dropInComponent = (
          <div>
            <h1>Loading...</h1>
          </div>
        );
      } else {
        dropInComponent = (
          <div>
            <DropIn
              options={{ authorization: this.state.clientToken }}
              onInstance={(instance) => (this.instance = instance)}
            />
            <button className="btn btn-primary m-1" type="button" onClick={this.buy.bind(this)}>Buy</button>
          </div>
        );
        console.log(this.state.showDropin);
      }

      return (
        <div className="container">
          <div>
            <Helmet>
              <title>Welcome</title>
              <meta name="description" content="Keep.id" />
            </Helmet>
            <div className="justify-content-center">
              <header className="m-2 h4">Hello! Click a button or put in your own amount</header>
              <div className="btn-group" role="group">
                <button className="btn btn-primary m-1" type="button" onClick={() => this.setState({ amount: '5' })}>5</button>
                <button className="btn btn-primary m-1" type="button" onClick={() => this.setState({ amount: '10' })}>10</button>
                <button className="btn btn-primary m-1" type="button" onClick={() => this.setState({ amount: '15' })}>15</button>
                <button className="btn btn-primary m-1" type="button" onClick={() => this.setState({ amount: '20' })}>20</button>
                <div className="input-group m-1">
                  <input type="text" className="form-control" value={this.state.amount} />
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.setState({ showDropin: true })}>Donate!</button>
                </div>
              </div>
            </div>
          </div>
          {dropInComponent}
        </div>
      );
    }
}

// card: 4111 1111 1111 1111, year: 01/24

export default (Donate);

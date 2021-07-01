import React from 'react';
import DropIn from 'braintree-web-drop-in-react';
import getServerURL from '../serverOverride';

class Store extends React.Component<{}, {clientToken: string, amount: string}> {
    instance;

    constructor(props) {
      super(props);
      this.state = { clientToken: '', amount: '5' };
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
      if (!this.state.clientToken) {
        return (
          <div>
            <h1>Loading...</h1>
          </div>
        );
      }
      return (
        <div>
          <DropIn
            options={{ authorization: this.state.clientToken }}
            onInstance={(instance) => (this.instance = instance)}
          />
          <button type="button" onClick={this.buy.bind(this)}>Buy</button>
        </div>
      );
    }
}

export default Store;

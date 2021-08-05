// import { any } from 'prop-types';
// import React from 'react';
// import { Braintree, HostedField } from 'react-braintree-fields';

// class Donate2 extends React.PureComponent<{},{token:any, amount:string}>{
//     instance;
//     braintree: any;
//     numberField: any;

//     constructor(props) {
//         super(props);
//         this.braintree = React.createRef();
//         this.numberField = React.createRef();
//         this.state = {
//             token: null,
//             amount: '5',
//         }
//     }

//     //cannot use this since the braintree uses the token not as a string
//     // componentDidMount() {
//     //     // Get a client token for authorization from your server
//     //     console.log('got here');
//     //       fetch(`${getServerURL()}/generate-client-token`, { method: 'GET' })
//     //         .then((response) => response.text()).then((responseJSON) => {
//     //           // console.log(responseJSON);
//     //           this.setState({ clientToken: responseJSON });
//     //         });
//     //     console.log(this.state.clientToken);
//     //     }

//     //this compiles, sets the token as an object instead of a string

//     // componentDidMount(){
//     //     fetch('${getServerURL()}/generate-client-token', {method:'GET'})
//     //         .then((response) => {
//     //             this.setState({token:response});
//     //         });
//     //     console.log('got a token');
//     // }

//     async buy() {
//     // Send the nonce to your server
//         const { nonce } = await this.instance.requestPaymentMethod();
//         fetch(`${getServerURL()}/checkout-donation`, {
//         method: 'POST',
//         credentials: 'include',
//         body: JSON.stringify({
//             payment_method_nonce: nonce,
//             amount: this.state.amount,
//         }),
//         })
//         .then((response) => response.json())
//         .then((responseJSON) => {
//             if (responseJSON.status === 'SUCCESS') {
//             console.log('yay'); // this doesn't happen
//             }
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Braintree Hosted Fields Demo</h1>

//                 <Braintree
//                     ref={this.braintree}
//                     // expects function instead of object
//                     getTokenRef={ref => this.state.token}
//                     authorization = 'sandbox_gpr679yy_tj4vmtfr3qqmc9yb'
//                     styles={{
//                         input: {
//                             'font-size': '14px',
//                             'font-family': 'helvetica, tahoma, calibri, sans-serif',
//                             color: '#7d6b6b',
//                         },
//                         ':focus': {
//                             color: 'black',
//                         },
//                     }}
//                 >
//                     <div className="fields">
//                     <HostedField type="number" ref={ccNum => (this.ccNum = ccNum)} />
//                     <HostedField type="expirationDate" />
//                     <HostedField type="cvv" />
//                 </div>
//                 </Braintree>
//                 <div>
//                     <button className="btn btn-outline-dark m-3" type="button" onClick={this.buy.bind(this)}>Confirm Payment</button>
//                 </div>
//             </div>
//         );
//     }

// }

// export default (Donate2);

import React from 'react';
import { Braintree, HostedField } from 'react-braintree-fields';
import getServerURL from '../serverOverride';

const Donate2 = () => {
  const [tokenize, setTokenizeFunc] = React.useState();
  const [cardType, setCardType] = React.useState('');
  const [error, setError] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [focusedFieldName, setFocusedField] = React.useState('');
  const numberField = React.useRef();
  const cvvField = React.useRef();
  const cardholderNameField = React.useRef();

  const handleError = (newError) => {
    setError(newError.message || String(newError));
  };

  const onFieldBlur = (field, event) => setFocusedField('');
  const onFieldFocus = (field, event) => setFocusedField(event.emittedBy);

  const getAuthorization = () => {
    fetch(`${getServerURL()}/generate-client-token`, { method: 'GET' })
      .then((response) => response.text()).then((responseJSON) => {
        console.log(responseJSON);
        return responseJSON;
      });
  };

  const getToken = () => {
    // @ts-ignore: Object is possibly 'null'.
    tokenize()
      .then(setToken)
      .catch(handleError);
  };

  const renderResult = (title, obj) => {
    if (!obj) { return null; }
    return (
      <div>
        <b>
          {title}
          :
        </b>
        <pre>{JSON.stringify(obj, null, 4)}</pre>
      </div>
    );
  };

  return (
    <div>
      <Braintree
        className="demo"
                // authorization='sandbox_g42y39zw_348pk9cgf3bgyw2b' (given token)
                // WHY ISNT THIS WORKING
        authorization={getAuthorization()}
        getTokenRef={(ref) => setTokenizeFunc(() => ref)}
        styles={{
          input: {
            'font-size': 'inherit',
          },
          ':focus': {
            color: 'blue',
          },
        }}
      >
        {renderResult('Error', error)}
        {renderResult('Token', token)}

        <div>
          Number:
          <HostedField
            type="number"
            className={focusedFieldName === 'number' ? 'focused' : ''}
            onBlur={onFieldBlur}
            onFocus={onFieldFocus}
            prefill="4111 1111 1111 1111"
            ref={numberField}
          />
          <p>
            Card type:
            {cardType}
          </p>
          Name:
          <HostedField
            type="cardholderName"
            className={focusedFieldName === 'cardholderName' ? 'focused' : ''}
            onBlur={onFieldBlur}
            onFocus={onFieldFocus}
                        // placeholder="Name on Card"
            prefill="John Doe"
            ref={cardholderNameField}
          />
          Date:
          <HostedField
            type="expirationDate"
            onBlur={onFieldBlur}
            onFocus={onFieldFocus}
            className={focusedFieldName === 'expirationDate' ? 'focused' : ''}
            prefill="08/24"
          />
          CVV:
          <HostedField type="cvv" placeholder="CVV" ref={cvvField} prefill="400" />
          Zip:
          <HostedField type="postalCode" prefill="40000" />
        </div>

      </Braintree>
      <div className="footer">
        <button className="button-primary" type="button" onClick={getToken}>Get nonce token</button>
      </div>
    </div>
  );
};

export default Donate2;

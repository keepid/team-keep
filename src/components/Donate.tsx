import React from 'react';
import { Braintree, HostedField } from 'react-braintree-fields';

// The client side donation component takes in the user's payment information
// and generates a nonce token. This nonce token is sent to the server, where
// the actual transaction is attempted.

// TODO: Need a client token or tokenization key in order to generate the nonce token.

const Donate = () => {
  const [tokenize, setTokenizeFunc]: any = React.useState();
  const [cardType, setCardType] = React.useState('');
  const [error, setError] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [focusedFieldName, setFocusedField] = React.useState('');
  const numberField: any = React.useRef();
  const cvvField: any = React.useRef();
  const cardholderNameField = React.useRef();

  const onAuthorizationSuccess = () => {
    numberField.current.focus();
  };

  const onDataCollectorInstanceReady = (collector) => {
    // DO SOMETHING with Braintree collector as needed
  };

  const handleError = (newError) => {
    setError(newError.message || String(newError));
  };

  const onFieldBlur = (field, event) => setFocusedField('');
  const onFieldFocus = (field, event) => setFocusedField(event.emittedBy);

  const onCardTypeChange = ({ cards }) => {
    if (cards.length === 1) {
      const [card] = cards;

      setCardType(card.type);

      if (card.code && card.code.name) {
        cvvField.current.setPlaceholder(card.code.name);
      } else {
        cvvField.current.setPlaceholder('CVV');
      }
    } else {
      setCardType('');
      cvvField.current.setPlaceholder('CVV');
    }
  };

  const getToken = () => {
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
        authorization="sandbox_g42y39zw_348pk9cgf3bgyw2b"
        onAuthorizationSuccess={onAuthorizationSuccess}
        onDataCollectorInstanceReady={onDataCollectorInstanceReady}
        onError={handleError}
        onCardTypeChange={onCardTypeChange}
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
            placeholder="Name on Card"
            ref={cardholderNameField}
          />
          Date:
          <HostedField
            type="expirationDate"
            onBlur={onFieldBlur}
            onFocus={onFieldFocus}
            className={focusedFieldName === 'expirationDate' ? 'focused' : ''}
          />
          Month:
          <HostedField type="expirationMonth" />
          Year:
          <HostedField type="expirationYear" />
          CVV:
          <HostedField type="cvv" placeholder="CVV" ref={cvvField} />
          Zip:
          <HostedField type="postalCode" />
        </div>

      </Braintree>
      <div className="footer">
        <button type="button" onClick={getToken}>Get nonce token</button>
      </div>
    </div>
  );
};

export default Donate;

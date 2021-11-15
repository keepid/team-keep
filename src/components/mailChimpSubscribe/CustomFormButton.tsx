import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const CustomFormButton = ({
  status, onValidated, message, email, submitButtonListener,
}) => {
  const submit = () => (email
        && email.indexOf('@') > -1
        && onValidated({
          EMAIL: email,
        }));
  useEffect(() => {
    submit();
  }, [submitButtonListener]);

  return (
    <div className="mx-auto">
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          className="mx-center"
          style={{ color: 'red' }}
        >
          <li className="mx-center">
            { ReactHtmlParser(message) }
            {' '}
          </li>
        </div>
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
        >
          <li className="mx-center">{ ReactHtmlParser(message) }</li>
        </div>
      )}
    </div>
  );
};

CustomFormButton.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  onValidated: PropTypes.func,
  email: PropTypes.string,
  submitButtonListener: PropTypes.bool,
};

CustomFormButton.defaultProps = {
  status: '',
  message: '',
  onValidated: () => {},
  email: '',
  submitButtonListener: false,
};

export default (CustomFormButton);

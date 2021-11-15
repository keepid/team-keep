import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const CustomForm = ({
  status, message, onValidated, name, email, submitButtonListener,
}) => {
  const firstName = name.substr(0, name.indexOf(' '));
  const lastName = name.substr(name.indexOf(' ') + 1).trim();
  const submit = () => (email
        && firstName
        && lastName
        && email.indexOf('@') > -1
        && onValidated({
          EMAIL: email,
          FNAME: firstName,
          LNAME: lastName,
        }));
  useEffect(() => {
    submit();
  }, [submitButtonListener]);

  return (
    <div className="mx-auto text center">
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
        >
          { ReactHtmlParser(message) }
        </div>
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
        >
          { ReactHtmlParser(message) }
        </div>
      )}
    </div>
  );
};

CustomForm.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  onValidated: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  submitButtonListener: PropTypes.bool,
};

CustomForm.defaultProps = {
  status: '',
  message: '',
  onValidated: () => {},
  name: '',
  email: '',
  submitButtonListener: false,
};

export default (CustomForm);

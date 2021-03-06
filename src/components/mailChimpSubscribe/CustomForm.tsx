import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const CustomForm = ({
  status, message, onValidated, name, email, submitButtonListener,
}) => {
  const nameArr = name.split(' ');
  const firstName = nameArr[0];
  const lastName = nameArr[1];
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
    <div
      style={{
        background: '#ffffff',
        borderRadius: 2,
        padding: 10,
        display: 'inline-block',
      }}
    >
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
      {/* <button style={{ fontSize: '2em', padding: 5 }} onClick={(e)=>submit(e)}>
              Submit
            </button> */}
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

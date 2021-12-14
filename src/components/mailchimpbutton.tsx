import React, { Component, ReactElement } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { withAlert } from 'react-alert';
import getServerURL from '../serverOverride';
import { isValidEmail } from '../lib/Validations/Validations';
import CustomFormButton from './mailChimpSubscribe/CustomFormButton';

interface Props {
  alert: any;
}

interface State {
  email: string;
  buttonState: string;
  emailValidator: string;
  submitButtonListener: boolean;
}

class Mailchimpbutton extends Component<Props, State, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      buttonState: '',
      emailValidator: '',
      submitButtonListener: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  clearInput = (): void => {
    this.setState({
      email: '',
      buttonState: '',
      emailValidator: '',
    });
  };

  validateEmail = async (): Promise<void> => {
    const { email } = this.state;
    if (isValidEmail(email)) {
      await new Promise((resolve) => this.setState({ emailValidator: 'true' }, resolve));
    } else {
      await new Promise((resolve) => this.setState({ emailValidator: 'false' }, resolve));
    }
  };

  emailMessage = (): ReactElement<{}> => {
    const { emailValidator } = this.state;
    if (emailValidator === 'true') {
      return <div className="valid-feedback" />;
    }
    if (emailValidator === 'false') {
      return (
        <div className="invalid-feedback text-left">
          Please enter a valid email address
        </div>
      );
    }
    return <div />;
  };

  colorToggle = (inputString: string): string => {
    if (inputString === 'true') {
      return 'is-valid';
    }
    if (inputString === 'false') {
      return 'is-invalid';
    }
    return '';
  };

  handleSubmitWithRecaptcha = async (event: any) => {
    event.preventDefault();
    this.setState({ buttonState: 'running' });
    const { alert } = this.props;
    await Promise.all([
      this.validateEmail(),
    ]);
    const {
      email,
      emailValidator,
    } = this.state;
    if (emailValidator === 'true') {
      this.setState((prevState) => ({ submitButtonListener: !prevState.submitButtonListener }));
    }
    fetch(`${getServerURL()}/submit-issue`, {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        const { status } = responseJSON;
        if (status === 'SUCCESS') {
          alert.show(
            'Thank you for your interest! We will get back to you promptly.',
          );
          this.clearInput();
        } else {
          alert.show('Please enter a valid email address');
          this.setState({ buttonState: '' });
        }
      })
      .catch(() => {
        this.setState({ buttonState: '' });
      });
  };

  handleChangeEmail = (event: any) => {
    this.setState({ email: event.target.value });
  };

  render() {
    const {
      email,
      buttonState,
      emailValidator,
      submitButtonListener,
    } = this.state;
    const url = 'https://keep.us7.list-manage.com/subscribe/post?u=9896e51b9ee0605d5e6745f82&amp;id=f16b440eb5';
    return (
      <div>
        <div className="signup-heading">
          <div className="text-center font-weight-bold">Sign up for our monthly email newsletter</div>
        </div>
        <form>
          <div className="form-group input-group d-flex justify-content-center ">
            <label
              htmlFor="email"
            >
              <div>
                <input
                  type="email"
                  className={`form-control w-100 mailchimp-email-input-button ${this.colorToggle(
                    emailValidator,
                  )}`}
                  id="email"
                  placeholder="Your email"
                  value={email}
                  onChange={this.handleChangeEmail}
                  onBlur={this.validateEmail}
                  required
                />
              </div>
              <div>
                {this.emailMessage()}
              </div>
            </label>
            <div id="custom-button-container" style={{ height: 50 }}>
              <div>
                <button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className={`form-control ld-ext-right btn-primary signupbutton-size ${buttonState}`}
                  onClick={this.handleSubmitWithRecaptcha}
                >
                  <span id="mc-embedded-subscribe">Sign Up</span>
                  <div className="ld ld-ring ld-spin" />
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="form-row ">
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomFormButton
                status={status}
                message={message}
                email={email}
                submitButtonListener={submitButtonListener}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default withAlert()(Mailchimpbutton);

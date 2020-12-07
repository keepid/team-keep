import React, { Component, ReactElement } from 'react';

import { Helmet } from 'react-helmet';
import ReCAPTCHA from 'react-google-recaptcha';
import { withAlert } from 'react-alert';
import getServerURL from '../serverOverride';
import { reCaptchaKey } from '../configVars';
import { isValidEmail } from '../lib/Validations/Validations';
import RectangleSVG from '../static/images/rectangle.svg';

interface Props {
  alert: any;
}

interface State {
  name: string;
  nonprofit: string;
  description: string;
  email: string;
  buttonState: string;
  nameValidator: string;
  nonprofitValidator: string;
  emailValidator: string;
  descriptionValidator: string;
  recaptchaPayload: string;
}

const recaptchaRef: React.RefObject<ReCAPTCHA> = React.createRef();

class ContactUs extends Component<Props, State, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      nonprofit: '',
      description: '',
      email: '',
      buttonState: '',
      nameValidator: '',
      nonprofitValidator: '',
      emailValidator: '',
      descriptionValidator: '',
      recaptchaPayload: '',
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  clearInput = (): void => {
    this.setState({
      name: '',
      nonprofit: '',
      description: '',
      email: '',
      buttonState: '',
      nameValidator: '',
      nonprofitValidator: '',
      emailValidator: '',
      descriptionValidator: '',
      recaptchaPayload: '',
    });
    this.resetRecaptcha();
  };

  resetRecaptcha = () => {
    if (recaptchaRef !== null && recaptchaRef.current !== null) {
      recaptchaRef.current.reset();
    }
    this.setState({ recaptchaPayload: '' });
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

  validateName = async (): Promise<void> => {
    const { name } = this.state;
    if (name !== '') {
      await new Promise((resolve) => this.setState({ nameValidator: 'true' }, resolve));
    } else {
      await new Promise((resolve) => this.setState({ nameValidator: 'false' }, resolve));
    }
  };

  nameMessage = (): ReactElement<{}> => {
    const { nameValidator } = this.state;
    if (nameValidator === 'true') {
      return <div className="valid-feedback" />;
    }
    if (nameValidator === 'false') {
      return (
        <div className="invalid-feedback text-left">
          Please enter a valid name.
        </div>
      );
    }
    return <div />;
  };

  validateNonprofit = async (): Promise<void> => {
    await new Promise((resolve) => this.setState({ nonprofitValidator: 'true' }, resolve));
  };

  nonprofitMessage = (): ReactElement<{}> => {
    const { nonprofitValidator } = this.state;
    if (nonprofitValidator === 'true') {
      return <div className="valid-feedback"> </div>;
    }
    if (nonprofitValidator === 'false') {
      return (
        <div className="invalid-feedback text-left">
          Please provide additional details.
        </div>
      );
    }
    return <div />;
  };

  validateDescription = async (): Promise<void> => {
    await new Promise((resolve) => this.setState({ descriptionValidator: 'true' }, resolve));
  };

  descriptionMessage = (): ReactElement<{}> => {
    const { descriptionValidator } = this.state;
    if (descriptionValidator === 'true') {
      return <div className="valid-feedback"> </div>;
    }
    if (descriptionValidator === 'false') {
      return (
        <div className="invalid-feedback text-left">
          Please provide additional details.
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
      this.validateNonprofit(),
      this.validateName(),
      this.validateDescription(),
    ]);
    const {
      email,
      name,
      nonprofit,
      emailValidator,
      nameValidator,
      nonprofitValidator,
      descriptionValidator,
    } = this.state;
    let { description, recaptchaPayload } = this.state;
    if (
      emailValidator !== 'true'
      || nameValidator !== 'true'
      || nonprofitValidator !== 'true'
      || descriptionValidator !== 'true'
    ) {
      alert.show('Please fill out all fields correctly.');
      this.resetRecaptcha();
      this.setState({ buttonState: '' });
      return;
    }
    if (recaptchaRef !== null && recaptchaRef.current !== null) {
      recaptchaPayload = await recaptchaRef.current.executeAsync();
      this.setState({ recaptchaPayload });
    } else return;
    const title = `${name} - ${nonprofit}`;
    if (description.trim() === '') {
      description = 'blank note';
    }
    fetch(`${getServerURL()}/submit-issue`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        title,
        description,
        recaptchaPayload,
      }),
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        const responseObject = JSON.parse(responseJSON);
        const { status } = responseObject;
        if (status === 'SUCCESS') {
          alert.show(
            'Thank you for your interest! We will get back to you promptly.',
          );
          this.clearInput();
        } else {
          alert.show('Failed to submit. Please fill out all fields correctly.');
          this.setState({ buttonState: '' });
          this.resetRecaptcha();
        }
      })
      .catch(() => {
        alert.show('Failed to submit. Please try again.');
        this.setState({ buttonState: '' });
        this.resetRecaptcha();
      });
  };

  handleChangeName = (event: any) => {
    this.setState({ name: event.target.value });
  };

  handleChangeNonprofit = (event: any) => {
    this.setState({ nonprofit: event.target.value });
  };

  handleChangeDescription = (event: any) => {
    this.setState({ description: event.target.value });
  };

  handleChangeEmail = (event: any) => {
    this.setState({ email: event.target.value });
  };

  render() {
    const {
      email,
      name,
      nonprofit,
      description,
      buttonState,
      nameValidator,
      nonprofitValidator,
      emailValidator,
      descriptionValidator,
    } = this.state;
    return (
      <div>
        <Helmet>
          <title>Contact Us</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="bg-contact-us-hero-img viewport-height-100 negative-margin-top">
          <div className="container">
            <div className="viewport-height-100 custom-vertical-center">
              <div>
                <h1 className="hero-header pb-4 text-white">Contact us</h1>
                <img
                  className="svg-white mb-5"
                  src={RectangleSVG}
                  alt="rectangle"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bordered-background">
          <div className="container my-5 py-4 text-center">
            <div className="row pb-2 mb-2 mx-2">
              <div className="col-md-8 mx-auto">
                <img
                  className="svg-purple mb-5"
                  src={RectangleSVG}
                  alt="rectangle"
                />
                <h1 className="hero-header mb-1">Get in touch</h1>
                <p className="text-grey home-container-text py-3">
                  If you’re interested in learning more or forming a partnership
                  with us, you can email us at contact@keep.id or fill out this
                  contact form.
                </p>
                <form onSubmit={this.handleSubmitWithRecaptcha}>
                  <div className="form-row form-group d-flex align-content-start pb-3">
                    <label
                      htmlFor="name"
                      className="text-left w-100 font-weight-bold pr-3"
                    >
                      Your Name
                      <input
                        type="text"
                        className={`w-100 form-control form-purple ${this.colorToggle(
                          nameValidator,
                        )}`}
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={this.handleChangeName}
                        onBlur={this.validateName}
                        required
                      />
                      {this.nameMessage()}
                    </label>
                  </div>
                  <div className="form-row form-group d-flex align-content-start pb-3">
                    <label
                      htmlFor="nonprofit"
                      className="w-100 text-left font-weight-bold pr-3"
                    >
                      Name of nonprofit (if applicable)
                      <input
                        type="text"
                        className={`w-100 form-control form-purple ${this.colorToggle(
                          nonprofitValidator,
                        )}`}
                        id="nonprofit"
                        placeholder="Nonprofit name"
                        value={nonprofit}
                        onChange={this.handleChangeNonprofit}
                        onBlur={this.validateNonprofit}
                      />
                      {this.nonprofitMessage()}
                    </label>
                  </div>
                  <div className="form-row form-group d-flex align-content-start pb-3">
                    <label
                      htmlFor="email"
                      className="text-left w-100 font-weight-bold pr-3"
                    >
                      Email address
                      <input
                        type="text"
                        className={`w-100 form-control form-purple ${this.colorToggle(
                          emailValidator,
                        )}`}
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={this.handleChangeEmail}
                        onBlur={this.validateEmail}
                        required
                      />
                      {this.emailMessage()}
                    </label>
                  </div>
                  <div className="form-row form-group d-flex align-content-start">
                    <label
                      htmlFor="description"
                      className="text-left w-100 font-weight-bold pr-3"
                    >
                      Send us a note
                      <textarea
                        className={`w-100 form-control form-purple text-area-custom ${this.colorToggle(
                          descriptionValidator,
                        )}`}
                        id="description"
                        placeholder="If you would like to tell us a bit about yourself"
                        value={description}
                        onChange={this.handleChangeDescription}
                        onBlur={this.validateDescription}
                      />
                      {this.descriptionMessage()}
                    </label>
                  </div>
                  <div className="form-row mt-2">
                    <div className="d-flex text-center">
                      <span className="text-muted recaptcha-login-text">
                        This page is protected by reCAPTCHA, and subject to the
                        Google
                        {' '}
                        <a href="https://www.google.com/policies/privacy/">
                          Privacy Policy
                          {' '}
                        </a>
                        and
                        {' '}
                        <a href="https://www.google.com/policies/terms/">
                          Terms of Service
                        </a>
                        .
                      </span>
                    </div>
                  </div>
                  <div className="form-row my-4">
                    <div className="d-flex pt-3 mx-auto">
                      <button
                        type="submit"
                        onClick={this.handleSubmitWithRecaptcha}
                        className={`btn ld-ext-right btn-primary btn-lg ${buttonState}`}
                      >
                        Submit
                        <div className="ld ld-ring ld-spin" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ReCAPTCHA
            theme="dark"
            size="invisible"
            ref={recaptchaRef}
            sitekey={reCaptchaKey}
          />
        </div>
      </div>
    );
  }
}

export default withAlert()(ContactUs);

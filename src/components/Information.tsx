import React, { Component, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import ReCAPTCHA from 'react-google-recaptcha';
import { withAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import { reCaptchaKey } from '../configVars';
import { isValidEmail } from '../lib/Validations/Validations';

interface State {
  name: string;
  email: string;
  AddressNum1: string;
  AddressNum2: string;
  city: string;
  state: string;
  country: string;
  PostalCode: string;
  nameValidator: string;
  emailValidator: string;
  recaptchaPayload: string;
  checked: boolean;
}

interface Props {
  alert: any;
}

const recaptchaRef: React.RefObject<ReCAPTCHA> = React.createRef();

class Information extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      AddressNum1: '',
      AddressNum2: '',
      city: '',
      state: '',
      country: '',
      PostalCode: '',
      nameValidator: '',
      emailValidator: '',
      recaptchaPayload: '',
      checked: true,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  clearInput = (): void => {
    this.setState({
      name: '',
      email: '',
      AddressNum1: '',
      AddressNum2: '',
      city: '',
      state: '',
      country: '',
      PostalCode: '',
      nameValidator: '',
      emailValidator: '',
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
      await new Promise((resolve) => this.setState({ emailValidator: 'true' }));
    } else {
      await new Promise((resolve) => this.setState({ emailValidator: 'false' }));
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
    const { name, checked } = this.state;
    if (checked === true) {
      const firstName = name.substr(0, name.indexOf(' '));
      const lastName = name.substr(name.indexOf(' ') + 1).trim();
      if (firstName && lastName) {
        await new Promise((resolve) => this.setState({ nameValidator: 'true' }));
      } else {
        await new Promise((resolve) => this.setState({ nameValidator: 'false' }));
      }
    } else if (name !== '') {
      await new Promise((resolve) => this.setState({ nameValidator: 'true' }));
    } else {
      await new Promise((resolve) => this.setState({ nameValidator: 'false' }));
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
    const { alert } = this.props;
    await Promise.all([this.validateEmail(), this.validateName()]);
    const {
      name,
      email,
      AddressNum1,
      AddressNum2,
      city,
      state,
      country,
      PostalCode,
      nameValidator,
      emailValidator,
    } = this.state;
    const { recaptchaPayload } = this.state;
    if (emailValidator !== 'true' || nameValidator !== 'true') {
      alert.show('Please fill out all fields correctly.');
      this.resetRecaptcha();
    }
  };

  handleChangeName = (event: any) => {
    this.setState({ name: event.target.value });
  };

  handleChangeEmail = (event: any) => {
    this.setState({ email: event.target.value });
  };

  handleChangeAddress1 = (event: any) => {
    this.setState({ AddressNum1: event.target.value });
  };

  handleChangeAddress2 = (event: any) => {
    this.setState({ AddressNum2: event.target.value });
  };

  handleChangeState = (event: any) => {
    this.setState({ state: event.target.value });
  };

  handleChangePostal = (event: any) => {
    this.setState({ PostalCode: event.target.value });
  };

  handleChangeCountry = (event: any) => {
    this.setState({ country: event.target.value });
  };

  handleChangeCity = (event: any) => {
    this.setState({ city: event.target.value });
  };

  render() {
    const {
      name,
      email,
      AddressNum1,
      AddressNum2,
      city,
      state,
      country,
      PostalCode,
      nameValidator,
      emailValidator,
    } = this.state;
    const url = 'https://keep.us7.list-manage.com/subscribe/post?u=9896e51b9ee0605d5e6745f82&amp;id=f16b440eb5';
    return (
      <div>
        <div
          style={{
            borderBlockColor: '#445FEB',
          }}
        >
          <Helmet>
            <title>Information</title>
            <meta name="description" content="Keep.id" />
          </Helmet>

          <div
            className="bordered-background my-3 py-4"
            style={{ borderColor: '#445FEB' }}
          >
            <div className="row pb-2 mb-2 mx-2">
              <div className="col-md-8 mx-auto">
                <div className="mx-0 px-0 font-weight-boldx">
                  <h3 className="mb-5">
                    <b>2. Enter your information</b>
                  </h3>
                </div>

                {/* onSubmit={this.handleSubmitWithRecaptcha} */}
                <form>
                  <input
                    type="hidden"
                    name="u"
                    value="9896e51b9ee0605d5e6745f82"
                  />
                  <input type="hidden" name="id" value="f16b440eb5" />
                  <input type="hidden" name="c" value="?" />
                  <div className="form-row form-group d-flex align-content-start pb-3">
                    <label
                      htmlFor="name"
                      className="w-100 text-left font-weight-bold pr-3"
                    >
                      Full Name *
                      <input
                        type="text"
                        className={`w-100 form-control form-purple ${this.colorToggle(
                          nameValidator,
                        )}`}
                        id="name"
                        onChange={this.handleChangeName}
                        value={name}
                        onBlur={this.validateName}
                        required
                      />
                      {this.nameMessage()}
                    </label>
                  </div>
                  <div className="form-row form-group d-flex align-content-start pb-3">
                    <label
                      htmlFor="email"
                      className="text-left w-100 font-weight-bold pr-3"
                    >
                      Email address *
                      <input
                        type="email"
                        className={`w-100 form-control form-purple ${this.colorToggle(
                          emailValidator,
                        )}`}
                        id="email"
                        value={email}
                        onChange={this.handleChangeEmail}
                        onBlur={this.validateEmail}
                        required
                      />
                      {this.emailMessage()}
                    </label>
                  </div>
                  <div className="form-row form-group d-flex align-content-start pb-3">
                    <label
                      htmlFor="AddressNum1"
                      className="text-left w-100 font-weight-bold pr-3"
                    >
                      Address line 1
                      <input
                        type="text"
                        className="w-100 form-control form-purple"
                        id="AddressNum1"
                        value={AddressNum1}
                        onChange={this.handleChangeAddress1}
                        required
                      />
                    </label>
                  </div>
                  <div className="form-row form-group d-flex align-content-start pb-3">
                    <label
                      htmlFor="AddressNum1"
                      className="text-left w-100 font-weight-bold pr-3"
                    >
                      Address line 2 (optional)
                      <input
                        type="text"
                        className="w-100 form-control form-purple"
                        id="addressNum2"
                        value={AddressNum2}
                        onChange={this.handleChangeAddress2}
                      />
                    </label>
                  </div>
                  <div className="form-row form-group d-flex align-content-start pb-3">
                    <div className="col">
                      <label
                        htmlFor="city"
                        className="text-left w-100 font-weight-bold pr-3"
                      >
                        City
                        <input
                          type="text"
                          className="w-100 form-control form-purple"
                          id="city"
                          value={city}
                          onChange={this.handleChangeCity}
                        />
                      </label>
                    </div>
                    <div className="col">
                      <label
                        htmlFor="state"
                        className="text-left w-100 font-weight-bold pr-3"
                      >
                        State
                        <input
                          type="text"
                          className="w-100 form-control form-purple"
                          id="state"
                          value={state}
                          onChange={this.handleChangeState}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="form-row form-group d-flex align-content-start pb-3">
                    <div className="col">
                      <label
                        htmlFor="postal"
                        className="text-left w-100 font-weight-bold pr-3"
                      >
                        Postal code
                        <input
                          type="text"
                          className="w-100 form-control form-purple"
                          id="PostalCode"
                          value={PostalCode}
                          onChange={this.handleChangePostal}
                        />
                      </label>
                    </div>
                    <div className="col">
                      <label
                        htmlFor="postal"
                        className="text-left w-100 font-weight-bold pr-3"
                      >
                        Country
                        <input
                          type="text"
                          className="w-100 form-control form-purple"
                          id="country"
                          value={country}
                          onChange={this.handleChangeCountry}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <Link
                      className="inline-block nav-link text-white mx-2"
                      to="/selectamount"
                    >
                      <button
                        type="button"
                        className="btn btn-lg btn-secondary"
                        style={{
                          backgroundColor: 'white',
                          color: '#445FEB',
                          borderColor: '#445FEB',
                        }}
                      >
                        Back
                      </button>
                    </Link>
                    <Link className="nav-link text-white mx-2" to="/donate">
                      <button
                        type="button"
                        className="btn btn-lg btn-secondary"
                        style={{
                          backgroundColor: '#445FEB',
                          color: 'white',
                          borderColor: '#445FEB',
                        }}
                      >
                        Next
                      </button>
                    </Link>
                  </div>
                </form>
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
      </div>
    );
  }
}

export default withAlert()(Information);

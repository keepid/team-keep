import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../static/images/logo.svg';
import Email from '../static/images/email-icon.svg';
import FacebookLogo from '../static/images/facebook.svg';
import LinkedInLogo from '../static/images/linkedin.svg';
import TwitterLogo from '../static/images/twitter.svg';
import GithubLogo from '../static/images/github.svg';
import InstagramLogo from '../static/images/instagram.svg';
import CustomForm from './mailChimpSubscribe/CustomForm';
import CustomFormButton from './mailChimpSubscribe/CustomFormButton';
import ContactUs from './ContactUs';
import Mailchimpbutton from './MailchimpButton';

class Footer extends Component<{}, {}> {
  render() {
    return (
      <footer className="footer custom-footer-color py-4">
        <div className="container">
          <div className="d-flex justify-content-center flex-row bd-highlight py-8 py-md-11 flex-wrap pb-4 pt-2">
            <Link className="nav-link text-white mx-2" to="/">
              The Issue
            </Link>
            <Link className="nav-link text-white mx-2" to="/about-us">
              About Us
            </Link>
            <a className="nav-link text-white mx-2" href="https://keep.id/">
              Keep.id
            </a>
            <Link className="nav-link text-white mx-2" to="/stories">
              Stories
            </Link>
            {/* <Link className="nav-link text-white mx-2 footer-keep" to="/">
              Team Keep
            </Link> */}
            <Link className="nav-link text-white mx-2" to="/contact-us">
              Contact Us
            </Link>
            <Link className="nav-link text-white mx-2" to="/home">
              Donate
            </Link>
            {/* <Link className="nav-link text-white mx-2" to="/">
              Privacy
            </Link>
            <Link className="nav-link text-white mx-2" to="/">
              Legal
            </Link> */}
          </div>
          <hr />
          <Mailchimpbutton />
          <div className="d-flex justify-content-center flex-row bd-highlight py-8 py-md-11 flex-wrap py-4">
            {/* <img src={Email} alt="email" className="px-2" /> */}
            <a href="https://github.com/keepid/keepid_client">
              <img src={GithubLogo} alt="github-logo" className="mx-2" />
            </a>
            <a href="https://www.facebook.com/keepidphilly">
              <img src={FacebookLogo} alt="facebook-logo" className="mx-2" />
            </a>
            <a href="https://www.instagram.com/keepidphilly/">
              <img src={InstagramLogo} alt="instagram-logo" className="mx-2" />
            </a>
            <a href="https://www.linkedin.com/company/keep-id-philly/">
              <img src={LinkedInLogo} alt="linkedin-logo" className="mx-2" />
            </a>
            <a href="https://twitter.com/keepidphilly">
              <img src={TwitterLogo} alt="twitter-logo" className="mx-2" />
            </a>
          </div>
          <div className="d-flex justify-content-center pt-4">
            <p>&copy; 2020 Team Keep</p>
          </div>
          <div className="d-flex justify-content-center pb-4">
            <p>Team Keep is a nonprofit corporation exempt from federal income tax under Section 501(c)(3) of the Internal Revenue Code.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

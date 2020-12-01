import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../static/images/logoColor.svg';

const logoSize = 40;
class Header extends Component<{}, {}, {}> {
  // eslint-disable-next-line
  state = {
    isTop: true,
  };

  componentDidMount() {
    if (
      window.location.pathname === '/'
      || window.location.pathname === '/home'
    ) {
      document.addEventListener('scroll', () => {
        const isTop = window.scrollY < 200;
        if (isTop !== this.state.isTop) {
          this.setState({ isTop });
        }
      });
    } else {
      this.setState({ isTop: false });
    }
  }

  render() {
    const { isTop } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light sticky-top navbar-grey ${
          !isTop ? 'navbar-white' : ''
        }`}
      >
        <div className="container px-0">
          <Link className="pr-3" to="/home">
            <img
              alt="Logo"
              src={Logo}
              width={logoSize}
              height={logoSize}
              className="d-inline-block"
            />
          </Link>
          <Link className="navbar-brand" to="/home">
            Team Keep
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggle"
            aria-controls="navbarToggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarToggle">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item my-1 mr-2 ml-2">
                <Link className="nav-link" to="/Issue">
                  The Issue
                </Link>
              </li>
              <li className="nav-item my-1 mr-2 ml-2">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item my-1 mr-2 ml-2">
                <a className="nav-link" href="https://keep.id/">
                  Keep.id
                </a>
              </li>
              {/* <li className="nav-item my-1 mr-2 ml-2">
                <Link className="nav-link" to="/">
                  Stories
                </Link>
              </li> */}
              <li className="nav-item my-1 mr-5 ml-2">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item my-1 mr-3 ml-2">
                <a href="https://www.paypal.com/donate?hosted_button_id=6MC72JSU6KA7E">
                  <button type="submit" className="btn btn-secondary w-40 mr-2">
                    Donate
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

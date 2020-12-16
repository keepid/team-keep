import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import RectangleSVG from '../static/images/rectangle.svg';
import calligraphy from '../static/images/calligraphy.png';
import chess from '../static/images/chess.png';
import csConsultation from '../static/images/csConsultation.png';
import designConsultation from '../static/images/designConsultation.png';
import eCard from '../static/images/eCard.png';
import embroidery from '../static/images/embroidery.png';
import painting from '../static/images/painting.png';
import poem from '../static/images/poem.png';
import shoutOut from '../static/images/shoutOut.png';
import vectorArt from '../static/images/vectorArt.png';

class HolidayGiftingExchange extends Component<{}, {}> {
  render() {
    return (
      <div>
        <div className="holiday-hero-img viewport-height-100 negative-margin-top">
          <div className="container">
            <div className="viewport-height-100 custom-vertical-center">
              <div>
                <h1 className="hero-header pb-0 text-white mb-4 font-weight-bold">
                  Holiday Gift
                  {' '}
                  <br />
                  {' '}
                  Exchange
                </h1>
                <img
                  className="svg-white mb-4"
                  src={RectangleSVG}
                  alt="rectangle"
                />
                <p className="text-white w-75">
                  Donate to receive a gift from Team Keep or a gift for a loved one!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="row viewport-height-50">
            <div className="col-md-11 custom-vertical-center mx-auto text-center">
              <div id="info px-5">
                <img
                  className="svg-purple mb-5 pt-5"
                  src={RectangleSVG}
                  alt="rectangle"
                />
                <h3 className="hero-header text-black pb-4 font-weight-bold">
                  Donations for the holidays
                </h3>
                <p className="hero-subtext text-grey pb-4">
                  To donate and receive the gift, you must donate the minimum
                  amount for that gift. There may be a limited number of gifts
                  (noted in the photo description), so donate before it runs out
                  in order to receive the gift or send it to a loved one! This event
                  will run from December 16, and up until midnight December 19
                  ET. Donating and claiming a gift is a two-step process:
                </p>
                <div className="row pb-2">
                  <h2 className="col-1 hero-subtext text-black font-weight-bold">
                    1.
                  </h2>
                  <p className="col-11 hero-subtext text-black font-weight-medium text-left">
                    Donate through our donation link (paypal) and make sure to include your email and phone.
                  </p>
                </div>
                <div className="row pb-4">
                  <h2 className="col-1 hero-subtext text-black font-weight-bold">
                    2.
                  </h2>
                  <p className="col-11 hero-subtext text-black font-weight-medium text-left">
                    Fill out our form using the corresponding email or phone number for contact. Specify which gift you would like in return, and we will contact you on December 20th for further details.
                  </p>
                </div>
                <div className="row pb-5">
                  <div className="col text-center">
                    <a href="https://www.paypal.com/donate/?hosted_button_id=UZ3C7N5LSXQQC">
                      <button type="button" className="btn btn-primary mr-4">
                        Donate
                      </button>
                    </a>
                    <a href="https://forms.gle/MbukPzq6hvhxTCzB8">
                      <button type="button" className="btn btn-outline-primary ml-4">
                        Claim a Gift
                      </button>
                    </a>
                  </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide w-75 container mb-5" data-ride="carousel">
                  <ol className="carousel-indicators" style={{ bottom: -55 }}>
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="3" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="4" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="5" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="6" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="7" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="8" />
                    <li data-target="#carouselExampleIndicators" data-slide-to="9" />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={eCard} className="d-block w-100" alt="A personal E-Card: Every donor giving a donation of $10 or more will receive a digital thank you card" />
                    </div>
                    <div className="carousel-item">
                      <img src={poem} className="d-block w-100" alt="Comissioned Poem: $200 minimum. 2 available. Receive a crafted poem with a requested theme." />
                    </div>
                    <div className="carousel-item">
                      <img src={calligraphy} className="d-block w-100" alt="Custom Calligraphy Quote: $60 donation minimum. 2 available. Requested quote written on thick card paper, mailed to donor or recipient of choice" />
                    </div>
                    <div className="carousel-item">
                      <img src={painting} className="d-block w-100" alt="A miniature painting: $40 donation minimum. 3 available. Painting will be mailed to the donor or recipient of choice" />
                    </div>
                    <div className="carousel-item">
                      <img src={vectorArt} className="d-block w-100" alt="2D vector art. $350 donation minimum. 2 available. " />
                    </div>
                    <div className="carousel-item">
                      <img src={chess} className="d-block w-100" alt="Chess Lesson: $120 minimum. 1 available. 0.5-1 hour virtual session with Woman International Master, Jackie Peng. " />
                    </div>
                    <div className="carousel-item">
                      <img src={embroidery} className="d-block w-100" alt="Hand-crafted Holiday Embroidery: $75 minimum. 1 available." />
                    </div>
                    <div className="carousel-item">
                      <img src={csConsultation} className="d-block w-100" alt="1 Hour Private CS Career Consultation: $500 minimum. Virtual session with a member of our Keep.id Engineering Team." />
                    </div>
                    <div className="carousel-item">
                      <img src={designConsultation} className="d-block w-100" alt="Consult with our design team: $500 minimum. Virtual session with members of Team Keep's design team." />
                    </div>
                    <div className="carousel-item">
                      <img src={shoutOut} className="d-block w-100" alt="Shoutout a cause on our website: $1,000 minimum, 1 available. Logo and info about donor's choice cause will be posted on our website for 6 months and once on social media." />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row bordered-background w-100 py-5 px-3 mx-auto">
          <div className="container my-auto">
            <h3 className="text-grey text-left font-small-mobile mx-md-5 mx-0">
              We thank you for your support this holiday season. All proceeds go to support Team Keep’s mission of providing those experiencing homeless with legal identification documentation and storage resources that open access to critical resources.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert()(HolidayGiftingExchange);

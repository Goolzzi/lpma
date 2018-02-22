import React from "react";
import PropTypes from "prop-types";
import LPMALink from "../../utils/LPMALink";
import YouTube from "react-youtube";
import {Icon} from "react-fa";
import "./styles.scss";

import lpmaImage1 from "../../assets/images/LPMA2018Speakerle.png";
import lpmaImage2 from "../../assets/images/LPMA2018Speakerle-201x300.png";
import lpmaImage3 from "../../assets/images/LPMA2018Speakerle-687x1024.png";
import lpmaImage4 from "../../assets/images/LPMA2018Speakerle-768x1145.png";

import speakerImage from "../../assets/images/Kerry-Fitzgibbon.png"; //TEMP
import awardsGif from "../../assets/images/awards.gif";

import venueImg from "../../assets/images/55901ffa92b053940fe2d9863e34b6e4-gold-coast-australia-queensland-australia-e1510790872924.jpg";
import venueImgSmall from "../../assets/images/55901ffa92b053940fe2d9863e34b6e4-gold-coast-australia-queensland-australia-e1510790872924-300x162.jpg";

const opts = {
  height: "10000",
  width: "100%",
  playerVars: {
    autoplay: 1,
    controls: 0,
    disablekb: 0,
    fs: 0,
    iv_load_policy: 3,
    loop: 1,
    playlist: "pZ_tHrWzdT4",
    modestbranding: 1,
    showinfo: 0,
    enablejsapi: 1,
  },
};

const imgsSrc = [];
[8, 3, 2, 6, 5, 4].forEach(imgNum =>
  imgsSrc.push({
    src: require(`../../assets/images/${imgNum}.png`),
    tmb1: require(`../../assets/images/${imgNum}-300x200.png`),
    tmb2: require(`../../assets/images/${imgNum}-768x512.png`),
    tmb3: require(`../../assets/images/${imgNum}-1024x682.png`),
  }),
);

const propTypes = {
  data: PropTypes.object.isRequired,
};

const LPMA2018Page = () => (
  <React.Fragment>
    <section className="section lpma2018-top-jumbotron">
      <div className="video-cont is-hidden-mobile">
        <YouTube videoId={"pZ_tHrWzdT4"} opts={opts} className="video-frame" />
      </div>
      <div
        className="video-cont-cover is-hidden-mobile"
        onClick={event => event.stopPropagation()}
      />
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <div className="has-text-centered video-cont-data">
              <h2>Leading Property Managers Association Presents:</h2>

              <img
                src={require("../../assets/images/LPMA2018_Conference_Logo_white-600x200.png")}
              />

              <strong>
                A Conference Dedicated to Excellence in Property Management
              </strong>
              <strong>9-11 May, 2018 The Star, Gold Coast, QLD</strong>

              <button className="btn secondary with-radius-5 smaller-text">
                Purchase Ticket &nbsp;
                <Icon name="calendar" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section lpma2018-graph">
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <div className="has-text-centered">
              <h1>500+</h1>
              <p>Stellar Attendees</p>
            </div>
          </div>
          <div className="column is-3">
            <div className="has-text-centered">
              <h1>50+</h1>
              <p>Latest PM Product Exhibitors</p>
            </div>
          </div>
          <div className="column is-3">
            <div className="has-text-centered">
              <h1>20+</h1>
              <p>Industry Leading Speakers</p>
            </div>
          </div>
          <div className="column is-3">
            <div className="has-text-centered">
              <h1>1</h1>
              <p>Epic Awards Night Gala Dinner</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section lpma2018-info">
      <div className="container">
        <div className="columns">
          <div className="column is-6 left-side">
            <p className="header">
              Facilitating excellence in property management for professionals
              at every level.
            </p>

            <p className="text">
              LPMA’s Property management conference was created to be the best
              event to obtain real-world knowledge from leaders around the
              world. LPMA 2018 is ready to continue a trend of excellence,
              promoting thought-leadership, sharing best practice and providing
              ample networking opportunities.
            </p>
            <p className="text">
              With industry specific practitioners and a genuine two-way
              consultative dialogue, LPMA 2018 is not simply an excuse to be
              away from the office.
            </p>
            <p className="text">
              LPMA 2018 is a property management event presented BY property
              management practitioners, FOR property management practitioners!
            </p>

            <button className="btn secondary with-radius-5 smaller-text">
              Purchase Ticket &nbsp;
              <Icon name="calendar" />
            </button>
          </div>
          <div className="column is-6 right-side">
            <img
              className="left-side-image"
              src={lpmaImage1}
              srcSet={`${lpmaImage1} 2012w, ${lpmaImage2} 201w, ${lpmaImage3} 768w, ${lpmaImage4} 687w`}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section lpma2018-columns">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <h3>LPMA Premium Connection</h3>
            <p className="meta">Wednesday 9 May</p>
            <p>
              The LPMA Premium Connection is an intimate, member-only seminar
              focused on growth and issues in our industry. During this seminar,
              we will hone in on the key topics covered in the conference and
              deeply discuss topics to help grow your business.
            </p>
            <p>
              Learn more about the benefits of an LPMA membership today on:
              <LPMALink>www.lpma.com/why-join</LPMALink>
            </p>
          </div>
          <div className="column is-4">
            <h3>Day One</h3>
            <p className="meta">Thursday 10 May</p>
            <p>
              The first day of the conference will see two keynote sessions
              along with various specialist breakout sessions geared for Agency
              Principals, BDMs and Property Management personnel. Following the
              day’s sessions, we will have our LPMA Awards Gala Dinner. This
              Gala will pay tribute to the hard work and dedication our LPMA
              members have undertaken over the course of the year. (All Gala
              fees are included in the Conference Registration Fee).
            </p>
          </div>
          <div className="column is-4">
            <h3>Day Two</h3>
            <p className="meta">Friday 11 May</p>
            <p>
              Day two of the conference will focus on some motivating keynote
              sessions for all delegates. These sessions will be extremely
              rewarding and we are excited to attend!{" "}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section lpma2018-agenda">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="has-text-centered">
              <h2>Agenda</h2>

              <p>
                Three content-rich days packed with ideas, solutions and
                insights from leading industry professionals.
              </p>

              <div className="event-types">
                <span className="event-type">All Events</span>
                <span className="event-type">Agency Principals</span>
                <span className="event-type">Property Managers</span>
                <span className="event-type">BDMs</span>
              </div>

              <div className="event-dates">
                <button className="btn outlined smaller">9th May 2018</button>
                <button className="btn primary smaller">10th May 2018</button>
                <button className="btn outlined smaller">11th May 2018</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container events-list">
        <div className="columns event-item">
          <div className="column is-3">
            <p className="event-time has-text-centered-mobile">
              9:15am - 10:30pm
            </p>
          </div>
          <div className="column is-9">
            <p className="event-desc has-text-centered-mobile">
              <span className="green">Keynote</span>
              &nbsp;–&nbsp;
              <span className="bold">Useful Belief - Useful Action!</span>
              &nbsp; Chris Helder
            </p>
          </div>
        </div>

        <div className="columns  event-item">
          <div className="column is-3">
            <p className="event-time has-text-centered-mobile">
              11:00am - 11:45am
            </p>
          </div>
          <div className="column is-9">
            <p className="event-desc has-text-centered-mobile">
              <span className="green">Principal Breakout</span>
              &nbsp;–&nbsp;
              <span className="bold">Building a Business Worth Owning</span>
              &nbsp; Manos & Maria Findikakis
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section lpma2018-our-speakers">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-12">
            <div className="has-text-centered">
              <h2>Our speakers</h2>
              <p>
                We have lined up the best presenters from around Australia and
                the world to bring to you the latest innovation and ideas.
              </p>
            </div>
          </div>
        </div>

        <div className="columns is-multiline">
          <div className="column is-4 speaker">
            <div className="columns">
              <div className="column is-6">
                <div className="has-text-centered-mobile">
                  <img src={speakerImage} />
                </div>
              </div>
              <div className="column is-6">
                <div className="has-text-centered-mobile">
                  <h4>Kerry Fitzgibbon</h4>
                  <h3>The Social Media Guru</h3>
                  <p>
                    Former radio host, TV journalist and now, a leader in
                    Facebook marketing for busiess, Kerry has the knoweldge
                    which can set your agency’s social presence apart.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-4 speaker">
            <div className="columns">
              <div className="column is-6">
                <div className="has-text-centered-mobile">
                  <img src={speakerImage} />
                </div>
              </div>
              <div className="column is-6">
                <div className="has-text-centered-mobile">
                  <h4>Kerry Fitzgibbon</h4>
                  <h3>The Social Media Guru</h3>
                  <p>
                    Former radio host, TV journalist and now, a leader in
                    Facebook marketing for busiess, Kerry has the knoweldge
                    which can set your agency’s social presence apart.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-4 speaker">
            <div className="columns">
              <div className="column is-6">
                <div className="has-text-centered-mobile">
                  <img src={speakerImage} />
                </div>
              </div>
              <div className="column is-6">
                <div className="has-text-centered-mobile">
                  <h4>Kerry Fitzgibbon</h4>
                  <h3>The Social Media Guru</h3>
                  <p>
                    Former radio host, TV journalist and now, a leader in
                    Facebook marketing for busiess, Kerry has the knoweldge
                    which can set your agency’s social presence apart.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-4 speaker">
            <div className="columns">
              <div className="column is-6">
                <div className="has-text-centered-mobile">
                  <img src={speakerImage} />
                </div>
              </div>
              <div className="column is-6">
                <div className="has-text-centered-mobile">
                  <h4>Kerry Fitzgibbon</h4>
                  <h3>The Social Media Guru</h3>
                  <p>
                    Former radio host, TV journalist and now, a leader in
                    Facebook marketing for busiess, Kerry has the knoweldge
                    which can set your agency’s social presence apart.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-4 speaker">
            <div className="columns">
              <div className="column is-6">
                <div className="has-text-centered-mobile">
                  <img src={speakerImage} />
                </div>
              </div>
              <div className="column is-6">
                <div className="has-text-centered-mobile">
                  <h4>Kerry Fitzgibbon</h4>
                  <h3>The Social Media Guru</h3>
                  <p>
                    Former radio host, TV journalist and now, a leader in
                    Facebook marketing for busiess, Kerry has the knoweldge
                    which can set your agency’s social presence apart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-12">
            <div className="has-text-centered">
              <button className="btn secondary with-radius-5 smaller-text">
                See More Speakers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section lpma2018-purchase">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="has-text-centered">
              <h2>PURCHASE YOUR TICKETS NOW</h2>
              <p>
                Become an LPMA member today to save on events and gain access to
                our extensive suite of tools & resources to benefit your agency.
              </p>
              <p>
                NOTE: LPMA Members receive 1 free ticket to the exclusive,
                member-only Premium Connection Day on Wednesday 9 May.
              </p>
              <p>
                Find out more about a membership here:{" "}
                <LPMALink>lpma.com/why-join/</LPMALink>
              </p>
              <br />
              <br />
              <button className="btn secondary smaller-text onequarterwidth centered">
                LPMA Member
              </button>
              <button className="btn outlined smaller-text onequarterwidth centered">
                Non-LPMA Member
              </button>
            </div>
          </div>
        </div>
        <div className="columns tickets">
          <div className="column is-4">
            <div className="ticket-item">
              <div className="ticket-cont">
                <Icon name="paper-plane-o" />

                <h2>Pre-Release</h2>
                <p className="price">SOLD OUT</p>
                <p className="text">
                  Only 100 Tickets<br />Available
                </p>

                <hr />

                <p className="text">Ended: 7th February 2018</p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="ticket-item primary">
              <div className="ticket-cont">
                <Icon name="ticket" />

                <h2>Regular Sale</h2>
                <p className="price">$840</p>
                <p className="text">
                  First in, first<br />served
                </p>

                <hr />

                <p className="text">Ends: 30th April 2018</p>

                <button className="btn secondary smallest onequarterwidth centered">
                  Purchase Tickets
                </button>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="ticket-item">
              <div className="ticket-cont">
                <Icon name="hourglass-o" />

                <h2>Late Entry</h2>
                <p className="price">$940</p>
                <p className="text">
                  Last Chance<br />For Tickets!
                </p>

                <hr />

                <p className="text">Ends: 10th May 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section lpma2018-awards">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="has-text-centered">
              <h2>LPMA 2018 Awards Gala</h2>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6">
            <p>
              We are pleased to announce that we will be hosting the 11th Annual
              Awards for Excellence in Property Management the night of
              Thursday, May 10th. Get ready to celebrate in style as we pull out
              all the stops, roll out the red carpet and provide honours to the
              industry’s elite performers across Australia.
            </p>
            <p>
              These Awards aim to encourage, recognise and promote excellence,
              innovation and best practice in the property management industry.
            </p>
          </div>
          <div className="column is-6">
            <img src={awardsGif} />
          </div>
        </div>
      </div>
    </section>

    <section className="section lpma2018-venue">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="has-text-centered">
              <h2>Venue</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container venue-cont">
        <div className="columns">
          <div className="column is-6">
            <div className="has-text-centered">
              <img
                src={venueImg}
                srcSet={`${venueImg} 723w, ${venueImgSmall} 300w`}
              />
            </div>
          </div>
          <div className="column is-6">
            <h4>LPMA 2018 will be held at:</h4>
            <p>
              <LPMALink>The Star</LPMALink>, Gold Coast, Broadbeach, Queensland
            </p>
            <p>
              We are pleased to announce The Star Gold Coast has discounted
              rates for LPMA 2018 Attendees. Save on accommodation without
              missing out on luxury!
            </p>
            <p>
              Either book with reservation code: LPM030518 on{" "}
              <LPMALink>www.star.com.au/goldcoast/booking</LPMALink> or contact
              reservations direct on (07) 5592 8130 or 1800 074 344 and state
              that you are attending the LPMA 2018 Conference.
            </p>

            <div className="has-text-centered">
              <button className="btn centered with-radius-5 smaller-text">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section lpma2018-gallery">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="has-text-centered">
              <h2>Gallery</h2>
              <p>
                Over the years, LPMA conferences have proven to be a highlight
                on the property management professional development calendar.
                Our LPMA Gala Dinner is an event not to be missed.
              </p>
            </div>
          </div>
        </div>
        <div className="columns is-multiline">
          {imgsSrc.map((img, index) => (
            <div key={index} className="column is-4">
              <img
                src={img.src}
                srcSet={`${img.src} 1280w, ${img.tmb1} 300w, ${
                  img.tmb2
                } 768w, ${img.tmb3} 1024w`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </React.Fragment>
);

LPMA2018Page.propTypes = propTypes;

export default LPMA2018Page;

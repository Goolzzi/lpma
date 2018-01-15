import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  info: PropTypes.array.isRequired,
};

const Resources = ({info}) => {
  const {
    childContentfulColumnTextRemarkContentTextNode: {childMarkdownRemark},
  } = info[0];

  return (
    <section className="section resources">
      <p
        className="top-p"
        dangerouslySetInnerHTML={{__html: childMarkdownRemark.html}}
      />
      <div className="columns is-multiline">
        <div className="column is-4-desktop is-6-tablet is-12-mobile resource-item">
          <h3>Free Window Stickers</h3>
          <p>
            Our popular, attention-grabbing stickers can help denote your agency
            as an LPMA member to your patrons. Contact us below to set up a
            delivery.
          </p>
          <div className="image is-16by9">
            <img src={require("./../../assets/images/resource-1.png")} />
          </div>
          <button className="btn secondary halfwidth">Order</button>
        </div>
        <div className="column is-4-desktop is-6-tablet is-12-mobile resource-item">
          <h3>Printer Ready Member Badge</h3>
          <p>
            Proudly display your LPMA difference. Insert LPMA branding on your
            stationery and business cards to elevate your point of difference.
          </p>
          <div className="image is-16by9">
            <img src={require("./../../assets/images/resource-2.png")} />
          </div>
          <button className="btn secondary halfwidth">Download</button>
        </div>
        <div className="column is-4-desktop is-6-tablet is-12-mobile resource-item">
          <h3>Digital Member Badge</h3>
          <p>
            Add your LPMA membership distinction to your emails, social media
            pages and website with our digital LPMA member badges.
          </p>
          <div className="image is-16by9">
            <img src={require("./../../assets/images/resource-3.png")} />
          </div>
          <button className="btn secondary halfwidth">Download</button>
        </div>
        <div className="column is-4-desktop is-6-tablet is-12-mobile resource-item">
          <h3>Listing Kit Insert</h3>
          <p>
            Our popular, attention-grabbing stickers can help denote your agency
            as an LPMA member to your patrons. Contact us below to set up a
            delivery.
          </p>
          <div className="image is-16by9">
            <img src={require("./../../assets/images/resource-4.png")} />
          </div>
          <button className="btn secondary halfwidth">Order</button>
        </div>
        <div className="column is-4-desktop is-6-tablet is-12-mobile resource-item">
          <h3>How to use the LPMA brand</h3>
          <p>
            Thinking of implementing the LPMA logo on your site, social media or
            letterhead? Follow this quick guide for proper use cases.
          </p>
          <div className="image is-16by9">
            <img src={require("./../../assets/images/resource-5.png")} />
          </div>
          <button className="btn secondary halfwidth">Order</button>
        </div>
        <div className="column is-4-desktop is-6-tablet is-12-mobile resource-item">
          <h3>Need Further Help?</h3>
          <p>
            If you have any questions about this brand kit or how to use the
            LPMA member badge please contact us.
          </p>
          <button className="btn secondary halfwidth">Contact Us</button>
        </div>
      </div>*/}
    </section>
  );
};

Resources.propTypes = propTypes;

export default Resources;

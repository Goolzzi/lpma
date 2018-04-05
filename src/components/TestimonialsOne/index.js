import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  testimonial: PropTypes.array.isRequired,
};

const Testimonials = ({testimonial}) => (
  <section className="section testimonials">
    <div className="columns is-gapless is-multiline">
      {testimonial.map(
        ({
          id,
          authorName,
          childContentfulTestimonial1ContentTextNode: {childMarkdownRemark},
          authorPhoto: {sizes},
        }) => (
          <div key={id} className="column is-6 is-12-mobile testimonial-item">
            <div className="text-cont">
              <div
                className="text-p"
                dangerouslySetInnerHTML={{
                  __html: childMarkdownRemark.html,
                }}
              />
              <p className="name-p">{authorName}</p>
            </div>
            <div className="img-cont">
              <Img sizes={sizes} />
            </div>
          </div>
        ),
      )}
    </div>
  </section>
);

Testimonials.propTypes = propTypes;

export default Testimonials;

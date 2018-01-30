import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  title: PropTypes.string.isRequired,
  testimonial: PropTypes.array.isRequired,
};

const Testimonials = ({title, testimonial}) => (
  <section className="section testimonials">
    <div className="columns is-gapless is-multiline">
      {testimonial.map(
        ({
          id,
          authorName,
          childContentfulTestimonial1ContentTextNode: {childMarkdownRemark},
          authorPhoto: {responsiveResolution: {src, srcSet}},
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
              <img src={src} srcSet={srcSet} alt={authorName} />
            </div>
          </div>
        ),
      )}
    </div>
  </section>
);

Testimonials.propTypes = propTypes;

export default Testimonials;

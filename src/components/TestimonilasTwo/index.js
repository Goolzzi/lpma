import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  testimonial: PropTypes.array.isRequired,
  forUS: PropTypes.bool,
};

//FIXME:
const Testimonials = ({testimonial, forUS}) => (
  <section className="hero exhibits">
    <div className="columns is-gapless">
      {testimonial.map(
        ({
          id,
          image: {responsiveResolution: {src, srcSet}},
          childContentfulTestimonial2ContentTextNode: {childMarkdownRemark},
        }) => (
          <div key={id} className="column is-4 is-12-mobile exhibit-item">
            <div className="image is-3by2">
              <img srcSet={srcSet} src={src} alt="exhibit" />
            </div>
            {!forUS ? (
              <span
                className="content"
                dangerouslySetInnerHTML={{
                  __html: childMarkdownRemark.html,
                }}
              />
            ) : (
              ""
            )}
          </div>
        ),
      )}
    </div>
  </section>
);

Testimonials.propTypes = propTypes;

export default Testimonials;

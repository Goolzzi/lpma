import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  title: PropTypes.string.isRequired,
  testimonial1: PropTypes.array.isRequired,
  testimonial2: PropTypes.array.isRequired,
};

const Testimonials = ({title, testimonial1, testimonial2}) => (
  <React.Fragment>
    <section className="section testimonials">
      <h3>{title}</h3>
      <div className="columns is-multiline">
        {testimonial1.map(({id, authorName, body, authorPhoto}) => (
          <div key={id} className="column is-6 is-12-mobile testimonial-item">
            <div className="text-cont">
              <p
                className="text-p"
                dangerouslySetInnerHTML={{
                  __html: body.childMarkdownRemark.html,
                }}
              />
              <p className="name-p">{authorName}</p>
            </div>
            <div className="img-cont">
              <img src={authorPhoto.file.url} alt={authorName} />
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="hero exhibits">
      <div className="columns is-gapless">
        {testimonial2.map(({id, image, body}) => (
          <div key={id} className="column is-4 is-12-mobile exhibit-item">
            <div className="image is-16by9">
              <img src={image.file.url} alt="exhibit" />
            </div>
            <p
              dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}
            />
          </div>
        ))}
      </div>
    </section>
  </React.Fragment>
);

Testimonials.propTypes = propTypes;

export default Testimonials;

import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  title: PropTypes.string.isRequired,
  memberBenefitItems: PropTypes.array.isRequired,
};

const MemberBenefits = ({title, memberBenefitItems}) => (
  <section className="section member-benefits">
    <h3>{title}</h3>
    <div className="columns is-multiline">
      {memberBenefitItems.map(({id, title, body, checkBoxIcon: {file}}) => (
        <div key={id} className="column is-6 is-12-mobile benefit-item">
          <img src={file.url} alt={file.fileName} />
          <div className="cont">
            <h4 className="text-title">{title}</h4>
            <p className="text">{body.body}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

MemberBenefits.propTypes = propTypes;

export default MemberBenefits;

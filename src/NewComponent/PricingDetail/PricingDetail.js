import React from "react";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";
import icTick from "../../assets/images/NewDesign/ic-tick.png";

const propTypes = {
  startAni: PropTypes.bool,
  onSubmit: PropTypes.func,
};
const PricingDetail = ({startAni, onSubmit}) => (
  <CSSTransition
    in={startAni}
    timeout={1000}
    classNames="pricing"
    unmountOnExit>
    <div className="pricing-wrapper">
      <h1>Flat Monthly Pricing</h1>
      <div className="pricing-detail">
        <div className="pricing-text">
          <div className="price">
            <span>$</span>249
          </div>
          <div className="desc">
            <span>AUD</span>
            <span>Per month</span>
          </div>
        </div>
        <p>
          For those who are looking for the full suite of tools to grow and
          evolve their business
        </p>
        <div className="terms-container">
          <div>
            <div className="terms-item">
              <img src={icTick} alt="check" />
              <p>
                Unlimited access to letters, checklists, forms and procedure
                templates
              </p>
            </div>
            <div className="terms-item">
              <img src={icTick} alt="check" />
              <p>
                Access to LPMA Foundry, our information hub comprised of
                resources, articles and case studies
              </p>
            </div>
            <div className="terms-item">
              <img src={icTick} alt="check" />
              <p>
                Free copies of Building Blocks, Connecting the Dots and Numbers
                Game{" "}
              </p>
            </div>
            <div className="terms-item">
              <img src={icTick} alt="check" />
              <p>Invitation to the LPMA Group Forum</p>
            </div>
            <div className="terms-item">
              <img src={icTick} alt="check" />
              <p>
                Free tickets to the LPMA Premium Connection Day and LPMA Round
                Table
              </p>
            </div>
            <div className="terms-item">
              <img src={icTick} alt="check" />
              <p>A 40% discount to all LPMA Events</p>
            </div>
            <div className="terms-item">
              <img src={icTick} alt="check" />
              <p>Access to the LPMA Research Lab</p>
            </div>
            <div className="terms-item">
              <img src={icTick} alt="check" />
              <p>Access to our digital consulting tools and frameworks</p>
            </div>
          </div>
        </div>
        {
          // eslint-disable-next-line
          <a className="submit-btn" onClick={onSubmit}>
            JOIN LPMA
          </a>
        }
      </div>
    </div>
  </CSSTransition>
);
PricingDetail.propTypes = propTypes;
PricingDetail.defaultProps = {
  startAni: false,
  // eslint-disable-next-line
  onSubmit: () => console.log("-- submit clicked --"),
};
export default PricingDetail;

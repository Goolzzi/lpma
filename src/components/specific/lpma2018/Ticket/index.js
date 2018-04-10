import React from "react";
import PropTypes from "prop-types";
import Icon from "react-fa";
import classNames from "classnames";
import moment from "moment";
import "./styles.scss";

const PurchaseTicketButton = ({purchaseLink}) => (
  <a href={purchaseLink}>
    <button className="btn secondary smallest onequarterwidth centered">
      Purchase Tickets
    </button>
  </a>
);

const renderPurchaseButton = (endDate, sold, purchaseLink) => {
  const now = moment.now();
  const end = moment(endDate);
  return now <= end && !sold ? (
    <PurchaseTicketButton purchaseLink={purchaseLink} />
  ) : (
    <React.Fragment />
  );
};

const renderTicketDate = endDate => {
  const now = moment.now();
  const end = moment(endDate);
  const date = end.format("D MMMM YYYY");
  const prefix = now <= end ? "Ends: " : "Ended: ";
  return `${prefix}${date}`;
};

const renderPrice = (sold, lpmaMember, priceMember, priceNonMember) =>
  sold ? "SOLD OUT" : lpmaMember ? `$${priceMember}` : `$${priceNonMember}`;

const propTypes = {
  ticket: PropTypes.object.isRequired,
  lpmaMember: PropTypes.bool.isRequired,
};

const Ticket = ({
  ticket: {
    title,
    purchaseLink,
    priceMember,
    priceNonMember,
    endDate,
    status,
    iconName,
    sold,
  },
  lpmaMember,
}) => (
  <div className="column is-4">
    <div className={classNames({"ticket-item": true, primary: !sold})}>
      <div className="ticket-cont">
        <Icon name={iconName} />
        <h2>{title}</h2>
        <p className="price">
          {renderPrice(sold, lpmaMember, priceMember, priceNonMember)}
        </p>
        <div
          dangerouslySetInnerHTML={{__html: status.childMarkdownRemark.html}}
        />

        <hr />

        <p className="text">{renderTicketDate(endDate)}</p>
        {renderPurchaseButton(endDate, sold, purchaseLink)}
      </div>
    </div>
  </div>
);

Ticket.propTypes = propTypes;

export default Ticket;

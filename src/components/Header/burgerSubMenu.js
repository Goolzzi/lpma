import React from "react";
import classNames from "classnames";

//todo FIXME: This is just markup, need to improve!
const BurgerSubMenu = ({isActiveMenu}) => {
  return (
    <div
      className={classNames("desctop-menu", {
        active: isActiveMenu,
      })}>
      <div className="columns">
        <div className="column is-9 desctop-menu-left">
          <div className="columns is-multiline">
            <div className="column is-4 desctop-menu-item">
              <a href="#" className="title-link">
                About
              </a>
              <a href="#">Blog</a>
              <a href="#">Team</a>
              <a href="#">Members</a>
              <a href="#">Contact</a>
            </div>
            <div className="column is-4 desctop-menu-item">
              <a href="#" className="title-link">
                Membership
              </a>
              <a href="#">Something</a>
              <a href="#">Something</a>
              <a href="#">Something</a>
              <a href="#">Something</a>
            </div>
            <div className="column is-4 desctop-menu-item">
              <a href="#" className="title-link">
                Resources
              </a>
              <a href="#">Something</a>
              <a href="#">Something</a>
              <a href="#">Something</a>
              <a href="#">Something</a>
            </div>
            <div className="column is-4 desctop-menu-item">
              <a href="#" className="title-link">
                Events
              </a>
              <a href="#">Something</a>
              <a href="#">Something</a>
              <a href="#">Something</a>
              <a href="#">Something</a>
            </div>
            <div className="column is-4 desctop-menu-item">
              <a href="#" className="title-link">
                Foundry
              </a>
              <a href="#">Something</a>
              <a href="#">Something</a>
              <a href="#">Something</a>
              <a href="#">Something</a>
            </div>
            <div className="column is-4 desctop-menu-item">
              <a href="#" className="title-link">
                Something
              </a>
              <a href="#">Something</a>
              <a href="#">Something</a>
              <a href="#">Something</a>
              <a href="#">Something</a>
            </div>
          </div>
        </div>
        <div className="column is-3 desctop-menu-right">
          <h3>Become a Member</h3>
          <p>
            Build your career with the knowledge, tools and people you need to
            support you.
          </p>
          <button className="btn primary threequarterwidth">Join Today</button>
        </div>
      </div>
    </div>
  );
};

export default BurgerSubMenu;

import React from "react";

const BreadCrumb = () => {
  return (
    <div className="container breadcrumb-wrapper">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">Bulma Test</a>
          </li>
          <li>
            <a href="#">Documentation test</a>
          </li>
          <li>
            <a href="#">Components test</a>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              Breadcrumb
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumb;

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const propTypes = {
  metaImage1200x630: PropTypes.string.isRequired,
  metaImage1024x512: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

import ogImage from "../assets/images/og_image.jpg";

const MetaHead = ({metaImage1200x630, metaImage1024x512, title}) => {
  return (
    <Helmet title={title}>
      <meta
        name="description"
        content="Leading Property Managers Association is a community of real estate professionals who seek to be extraordinary."
      />
      <meta name="image" content={ogImage} />
      <meta itemProp="name" content="Leading Property Managers Association" />
      <meta
        itemProp="description"
        content="Leading Property Managers Association is a community of real estate professionals who seek to be extraordinary."
      />
      <meta itemProp="image" content={ogImage} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Leading Property Managers Association"
      />
      <meta
        name="twitter:description"
        content="Leading Property Managers Association is a community of real estate professionals who seek to be extraordinary."
      />
      <meta name="twitter:site" content="@lpmassoc" />
      <meta name="twitter:image:src" content={ogImage} />
      <meta name="og:title" content="Leading Property Managers Association" />
      <meta
        name="og:description"
        content="Leading Property Managers Association is a community of real estate professionals who seek to be extraordinary."
      />
      <meta name="og:image" content={ogImage} />
      <meta name="og:url" content="http://www.lpma.com/" />
      <meta
        name="og:site_name"
        content="Leading Property Managers Association"
      />
      <meta name="fb:admins" content="100010256862926" />
      <meta name="og:type" content="website" />
    </Helmet>
  );
};

MetaHead.propTypes = propTypes;

export default MetaHead;

import React from "react";
import Helmet from "react-helmet";

const MetaHead = () => {
  return (
    <Helmet title="Leading Property Managers Association">
      <meta
        name="description"
        content="Leading Property Managers Association is a community of real estate professionals who seek to be extraordinary."
      />
      <meta
        name="image"
        content="http://www.lpma.com/wp-content/uploads/2017/10/LPMA-Meta-1200x630.png"
      />
      <meta itemProp="name" content="Leading Property Managers Association" />
      <meta
        itemProp="description"
        content="Leading Property Managers Association is a community of real estate professionals who seek to be extraordinary."
      />
      <meta
        itemProp="image"
        content="http://www.lpma.com/wp-content/uploads/2017/10/LPMA-Meta-1200x630.png"
      />
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
      <meta
        name="twitter:image:src"
        content="http://www.lpma.com/wp-content/uploads/2017/10/LPMA-Meta-1024x512.png"
      />
      <meta name="og:title" content="Leading Property Managers Association" />
      <meta
        name="og:description"
        content="Leading Property Managers Association is a community of real estate professionals who seek to be extraordinary."
      />
      <meta
        name="og:image"
        content="http://www.lpma.com/wp-content/uploads/2017/10/LPMA-Meta-1200x630.png"
      />
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

export default MetaHead;

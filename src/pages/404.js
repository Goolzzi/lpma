import React from "react";

const styles = {
  container: {
    marginTop: 40,
    marginBottom: 67,
    padding: 20,
    display: "block",
    maxWidth: 1348,
    marginLeft: "auto",
    marginRight: "auto",
  },
};

const NotFoundPage = () => (
  <div style={styles.container}>
    <h1>404</h1>
    <h1>{"Houston we have a problem..."}</h1>
    <p>{"We can't seem to find the page you are looking for."}</p>
  </div>
);

export default NotFoundPage;

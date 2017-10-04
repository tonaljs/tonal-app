import React from "react";
import API from "./API";

export const Layout = ({ modules, children }) => (
  <div className="row">
    <div className="column column-67">{children}</div>
    <div className="column column-67">
      <API modules={modules} />
    </div>
  </div>
);

export const withLayout = (modules, Component) => props => (
  <Layout modules={modules}>
    <Component {...props} />
  </Layout>
);

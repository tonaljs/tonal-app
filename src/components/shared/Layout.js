import React from "react";
import API from "./API";

export const Layout = ({ module, children }) => (
  <div className="row">
    <div className="column column-67">{children}</div>
    <div className="column column-67">
      <API module={module} />
    </div>
  </div>
);

export const withLayout = (module, Component) => props => (
  <Layout module={module}>
    <Component {...props} />
  </Layout>
);

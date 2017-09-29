import React from "react";
import { withLayout } from "../shared/Layout";

export default withLayout("key", ({ keyName }) => (
  <div className="Keys">
    <h4>key</h4>
    <h1>{keyName}</h1>
  </div>
));

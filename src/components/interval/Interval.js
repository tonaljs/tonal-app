import React from "react";
import tonal from "tonal";
import { withLayout } from "../shared/Layout";
import Code, { json } from "../shared/Code";

export default withLayout("interval", ({ interval }) => {
  const props = tonal.interval.props(interval);
  return (
    <div className="Interval">
      <h6>Interval</h6>
      <h1 className="big">{interval}</h1>
      <h3>Properties</h3>
      <Code
        lines={[`tonal.interval.props("${interval}") // => ${json(props)}`]}
      />
    </div>
  );
});

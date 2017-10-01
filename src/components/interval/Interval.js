import React from "react";
import tonal from "tonal";
import IntervalProps from "./IntervalProps";
import IntervalSelector from "./IntervalSelector";
import { withLayout } from "../shared/Layout";
import Code, { json } from "../shared/Code";
import "./Interval.css";

export default withLayout("interval", ({ interval }) => {
  const props = tonal.interval.props(interval);
  return (
    <div className="Interval">
      <h6>Interval</h6>
      <h1 className="big">{interval}</h1>
      <IntervalProps props={props} />
      <IntervalSelector props={props} />
      <h3>Properties</h3>
      <Code
        lines={[`tonal.interval.props("${interval}") // => ${json(props)}`]}
      />
    </div>
  );
});

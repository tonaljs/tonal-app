import React from "react";
import { Interval } from "tonal";

export default ({ props }) => (
  <div className="IntervalProps">
    <div className="row">
      <div className="column column-50">
        <label>Simplified:</label>
        {Interval.simplify(props.name)}
        <label>Inversion:</label>
        {Interval.invert(props.name)}
      </div>
      <div className="column column-50">
        <label>Semitones:</label>
        {props.semitones}
        <label>Interval class:</label>
        {Interval.ic(props.name)}
      </div>
    </div>
  </div>
);

import React from "react";
import tonal from "tonal";

export default ({ props }) => (
  <div className="IntervalProps">
    <div className="row">
      <div className="column column-50">
        <label>Simplified:</label>
        {tonal.interval.simplify(props.name)}
        <label>Inversion:</label>
        {tonal.interval.invert(props.name)}
      </div>
      <div className="column column-50">
        <label>Semitones:</label>
        {props.semitones}
        <label>Interval class:</label>
        {props.ic}
      </div>
    </div>
  </div>
);

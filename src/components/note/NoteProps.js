import React from "react";
import tonal from "tonal";
import Code, { json } from "../shared/Code";

export default ({ note }) => {
  const props = tonal.note.props(note);
  return (
    <div>
      {props.freq && (
        <h3>
          Midi: {props.midi}
          <br />
          Frequency: {props.freq.toFixed(2) + "Hz"}
        </h3>
      )}
      <Code lines={[`tonal.note.props("${note}") // => ${json(props)}`]} />;
    </div>
  );
};

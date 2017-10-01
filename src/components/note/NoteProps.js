import React from "react";
import tonal from "tonal";
import player from "../../player";

export default ({ props }) => (
  <div className="NoteProps">
    <div className="row">
      <div className="column column-50">
        <label>Simplified:</label>
        {tonal.note.simplify(props.name)}
        <label>Enharmonic:</label>
        {tonal.note.enharmonic(props.name)}
      </div>
      <div className="column column-50">
        <label>Midi:</label>
        {props.midi}
        <label>Frequency:</label>
        {props.freq ? props.freq.toFixed(2) + "Hz" : ""}
      </div>
    </div>
    {props.midi && (
      <p>
        <br />
        <button onClick={() => player(props.name)}>Play</button>
      </p>
    )}
  </div>
);

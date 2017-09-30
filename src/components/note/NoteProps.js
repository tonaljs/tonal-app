import React from "react";
import tonal from "tonal";
import Code, { json } from "../shared/Code";

export default ({ note }) => {
  const props = tonal.note.props(note);
  return [
    <div class="row">
      <div class="column column-50">
        <label>Name:</label>
        {props.name}
        <label>Pitch class:</label>
        {props.pc}
        <label>Accidentals:</label>
        {props.acc}
      </div>
      <div class="column column-50">
        <label>Octave:</label>
        {props.oct}
        <label>Midi:</label>
        {props.midi}
        <label>Frequency:</label>
        {props.freq ? props.freq.toFixed(2) + "Hz" : ""}
      </div>
    </div>,
    <Code lines={[`tonal.note.props("${note}") // => ${json(props)}`]} />
  ];
};

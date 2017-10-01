import React from "react";
import Selector from "../shared/Selector";

const NOTES = ["C", "D", "E", "F", "G", "A", "B"];
const ACCS = ["bbb", "bb", "b", "(none)", "#", "##", "###"];
const OCTS = [1, 2, 3, 4, 5, 6, 7];

export default ({ props }) => (
  <div className="NoteSelector">
    <h3>Change current note</h3>
    <Selector
      label="Change letter:"
      items={NOTES}
      route={l => ["note", l + props.acc + props.octStr]}
    />
    <Selector
      label="Change accidentals:"
      items={ACCS}
      route={acc => [
        "note",
        props.letter + (acc === "(none)" ? "" : acc) + props.octStr
      ]}
    />
    <Selector
      label="Change octave:"
      items={OCTS}
      route={o => ["note", props.letter + props.acc + o]}
    />
  </div>
);

import React from "react";
import tonal from "tonal";
import NoteProps from "./NoteProps";
import { withLayout } from "../shared/Layout";
import Code, { json } from "../shared/Code";
import Selector from "../shared/Selector";
import "./Note.css";

const NOTES = ["C", "D", "E", "F", "G", "A", "B"];
const ACCS = ["bbb", "bb", "b", "(none)", "#", "##", "###"];
const OCTS = [1, 2, 3, 4, 5, 6, 7];

const NoteSelector = ({ props }) => (
  <div className="NoteSelector">
    <h3>Change note</h3>
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
export default withLayout("note", ({ note }) => {
  const props = tonal.note.props(note);
  return (
    <div className="Note">
      <h6>Note</h6>
      <h1 className="big">{note}</h1>
      <NoteProps props={props} />
      <NoteSelector props={props} />
      <h3>Code examples</h3>
      <Code
        lines={[
          `import tonal from "tonal"`,
          `tonal.note.props("${note}") // => ${json(props)}`,
          `tonal.note.simplify("${note}") // => "${tonal.note.simplify(note)}"`,
          `tonal.note.enharmonic("${note}") // => "${tonal.note.enharmonic(
            note
          )}"`
        ]}
      />
    </div>
  );
});

import React from "react";
import { Note, PcSet } from "tonal";
import * as Abc from "tonal-abc-notation";
import NoteProps from "./NoteProps";
import NoteSelector from "./NoteSelector";
import { withLayout } from "../shared/Layout";
import Code, { json } from "../shared/Code";
import PianoKeyboard from "../viz/PianoKeyboard";
import "./Note.css";

const MODULES = { note: Note, "abc-notation": Abc };
export default withLayout(MODULES, ({ note }) => {
  const props = Note.props(note);
  return (
    <div className="Note">
      <h6>Note</h6>
      <h1 className="big">{note}</h1>
      <PianoKeyboard chroma={PcSet.chroma([note])} />
      <p>&nbsp;</p>
      <NoteSelector props={props} />
      <h3>Properties</h3>
      <NoteProps props={props} />
      <h3>Code examples</h3>
      <Code
        lines={[
          `import tonal from "tonal"`,
          `tonal.note.props("${note}") // => ${json(props)}`,
          `tonal.note.simplify("${note}") // => "${Note.simplify(note)}"`,
          `tonal.note.enharmonic("${note}") // => "${Note.enharmonic(note)}"`
        ]}
      />
    </div>
  );
});

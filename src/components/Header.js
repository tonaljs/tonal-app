import React from "react";
import { Note } from "tonal";
import PianoKeyboard from "./viz/PianoKeyboard";
import { routeToHash as to } from "../router";

const Navigation = ({ route }) => (
  <div className="Navigation">
    <a href="#/">Tonal</a>
    <a href={to(route.note, "note")}>Notes</a>
    <a href={to(route.note, "intervals")}>Intervals</a>
    <a href={to(route.note, "scales")}>Scales</a>
    <a href={to(route.note, "chords")}>Chords</a>
    <a href={to(route.note, "key")}>Keys</a>
  </div>
);

const TonicSelector = ({ current, onChange }) => {
  return (
    <PianoKeyboard
      minOct={1}
      note={Note.midi(current)}
      notes={[current]}
      onClick={onChange}
    />
  );
};
export default ({ route, onTonicChange }) => (
  <div className="Header row">
    <div className="column column-100">
      <Navigation route={route} />
      <TonicSelector current={route.note} onChange={onTonicChange} />
    </div>
  </div>
);

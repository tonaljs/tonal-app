import React from "react";
import tonal from "tonal";
import { withLayout } from "../shared/Layout";
import Selector from "../shared/Selector";
import NameList from "./NameList";

const NAMES = tonal.chord
  .names()
  .sort(
    (a, b) => tonal.chord.intervals(a).length - tonal.chord.intervals(b).length
  );

export default withLayout("chord", ({ tonic, name }) => (
  <div className="Chords">
    <h1>{tonic ? tonic + " Chords" : "Chords"}</h1>
    <Selector
      label={tonic ? "Change tonic:" : "Choose tonic:"}
      items={tonal.note.names()}
      route={i => ["chords", i]}
    />
    <NameList
      type="chord"
      tonic={tonic}
      names={NAMES}
      route={(tonic, name) => ["chord", tonic ? tonic + name : name]}
    />
  </div>
));

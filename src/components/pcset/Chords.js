import React from "react";
import tonal from "tonal";
import { withLayout } from "../shared/Layout";
import Selector from "../shared/Selector";
import SearchList from "./SearchList";

const NAMES = tonal.chord
  .names()
  .sort(
    (a, b) => tonal.chord.intervals(a).length - tonal.chord.intervals(b).length
  );

const filter = term =>
  term === "" ? NAMES : NAMES.filter(name => name.toLowerCase().includes(term));

export default withLayout("chord", ({ tonic, name }) => (
  <div className="Chords">
    <h1>{tonic ? tonic + " Chords" : "Chords"}</h1>
    <Selector
      label={tonic ? "Change tonic:" : "Choose tonic:"}
      items={tonal.note.namesEnh()}
      route={i => ["chords", i]}
    />
    <SearchList
      title="Chords"
      type="chord"
      tonic={tonic}
      filter={filter}
      route={(tonic, name) => ["chord", tonic ? tonic + name : name]}
    />
  </div>
));

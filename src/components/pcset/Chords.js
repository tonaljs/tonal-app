import React from "react";
import { Chord, Note } from "tonal";
import { withLayout } from "../shared/Layout";
import Selector from "../shared/Selector";
import SearchList from "./SearchList";
import "./PcSet.css";

const NAMES = Chord.names().sort(
  (a, b) => Chord.intervals(a).length - Chord.intervals(b).length
);

const filter = term =>
  term === "" ? NAMES : NAMES.filter(name => name.includes(term));

export default withLayout({ chord: Chord }, ({ tonic, name }) => (
  <div className="List Chords">
    <h1>{tonic ? tonic + " Chords" : "Chords"}</h1>
    <Selector
      label={tonic ? "Change tonic:" : "Choose tonic:"}
      items={Note.names()}
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

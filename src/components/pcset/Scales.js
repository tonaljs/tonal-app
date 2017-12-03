import React from "react";
import { withLayout } from "../shared/Layout";
import Selector from "../shared/Selector";
import SearchList from "./SearchList";
import NameList from "./NameList";
import { Scale, Note } from "tonal";
import "./PcSet.css";

const NAMES = Scale.names().sort(
  (a, b) => Scale.intervals(a).length - Scale.intervals(b).length
);
const COMMON = [
  "major",
  "minor",
  "harmonic minor",
  "melodic minor",
  "major pentatonic",
  "minor pentatonic",
  "dorian",
  "whole tone"
];

const filter = term => {
  term = term.toLowerCase();
  return term === ""
    ? []
    : NAMES.filter(name => name.toLowerCase().includes(term));
};

const API = { scale: Scale };

export default withLayout(API, ({ note }) => {
  const tonic = Note.pc(note);
  return (
    <div className="List Scales">
      <h1>Scales {tonic && " in " + tonic}</h1>
      <SearchList
        title="Scales"
        type="scale"
        tonic={tonic}
        filter={filter}
        route={(t, name) => [note, "scale", name]}
      />
      <h3>Common scales</h3>
      <NameList
        type="scale"
        route={(_, name) => [note, "scale", name]}
        tonic={tonic}
        names={COMMON}
      />
    </div>
  );
});

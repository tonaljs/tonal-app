import React from "react";
import { Chord, Note } from "tonal";
import { withLayout } from "../shared/Layout";
import Selector from "../shared/Selector";
import SearchList from "./SearchList";
import NameList from "./NameList";
import { routeToHash as to } from "../../router";
import "./PcSet.css";

const NAMES = Chord.names();

const byNotes = num =>
  Chord.names()
    .filter(name => Chord.intervals(name).length === num)
    .sort();
const TRIADS = byNotes(3);
const CUATRIADS = byNotes(4);

const filter = term =>
  term === "" ? [] : NAMES.filter(name => name.includes(term));

const ChordList = ({ note, names }) => (
  <div className="Selector">
    {names.map(name => (
      <a key={name} href={to(note, "chord", name)}>
        {name}
      </a>
    ))}
  </div>
);

const API = { chord: Chord };
export default withLayout(API, ({ note }) => {
  const tonic = Note.pc(note);
  return (
    <div className="List Chords">
      <h1>{tonic ? tonic + " Chords" : "Chords"}</h1>
      <h3>Search chords</h3>
      <SearchList
        title="Chords"
        type="chord"
        tonic={tonic}
        filter={filter}
        route={(tonic, name) => [tonic, "chord", name]}
      />
      <h3>Three note chords</h3>
      <NameList
        type="chord"
        route={(_, name) => [note, "chord", name]}
        tonic={tonic}
        names={TRIADS}
      />
      <h3>Four note chords</h3>
      <NameList
        type="chord"
        route={(_, name) => [note, "chord", name]}
        tonic={tonic}
        names={CUATRIADS}
      />
    </div>
  );
});

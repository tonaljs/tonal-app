import React from "react";
import Props from "./shared/Props";
import { withLayout } from "./shared/Layout";
import tonal from "tonal";

export default withLayout("note", ({ note }) => {
  const { pc, oct, chroma, midi, freq } = tonal.note.props(note);
  const fq = freq ? freq.toFixed(2) + "Hz" : "";
  const md = freq ? midi : "";
  return (
    <div className="Note">
      <h1>{note}</h1>
      <Props
        names={["Pitch Class", "Octave", "Chroma", "Frequency", "Midi"]}
        values={[pc, oct, chroma, fq, md]}
      />
    </div>
  );
});

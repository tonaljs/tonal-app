import React from "react";
import { PcSet, Scale, Chord, Note, transpose } from "tonal";
import CircleSet from "../viz/CircleSet";
import PianoKeyboard from "../viz/PianoKeyboard";
import Score from "../viz/Score";
import player from "../../player";

const center = pc =>
  pc ? (pc[0] === "A" || pc[0] === "B" ? pc + 3 : pc + 4) : null;

export default ({ tonic, name, type }) => {
  const Set = type === "scale" ? Scale : Chord;
  const intervals = Set.intervals(name);
  const pc = Note.pc(tonic);
  const pcset = intervals.map(transpose(pc));
  const notes = intervals.map(transpose(center(pc)));
  const offset = Note.chroma(tonic) || 0;

  return (
    <div className="PitchSetInfo">
      <div className="row">
        <div className="column column-50">
          <CircleSet
            size={160}
            offset={offset}
            chroma={PcSet.chroma(intervals)}
          />
        </div>
        <div className="column column-50">
          <label>Intervals</label>
          {intervals.join(" ")}
          <label>Notes</label>
          {tonic ? pcset.join(" ") : "no tonic"}
        </div>
      </div>
      {tonic && <Score notes={notes} />}
      {tonic && type === "chrod" ? (
        <PianoKeyboard notes={notes} />
      ) : (
        <PianoKeyboard
          setTonic={Note.chroma(tonic)}
          setChroma={PcSet.chroma(notes)}
        />
      )}
      {tonic && (
        <p>
          <button onClick={() => player(tonic, intervals, type)}>Play</button>
        </p>
      )}
    </div>
  );
};

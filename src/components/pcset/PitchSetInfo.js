import React from "react";
import tonal from "tonal";
import CircleSet from "../shared/CircleSet";
import Score from "../shared/Score";
import player from "../../player";

const center = pc =>
  pc ? (pc[0] === "A" || pc[0] === "B" ? pc + 3 : pc + 4) : null;

export default ({ tonic, name, type }) => {
  const intervals = tonal[type].intervals(name);
  const pc = tonal.note.pc(tonic);
  const pcset = intervals.map(tonal.distance.transpose(pc));
  const notes = intervals.map(tonal.distance.transpose(center(pc)));
  const offset = tonal.note.chroma(tonic) || 0;

  return (
    <div className="PitchSetInfo">
      <div class="row">
        <div class="column column-50">
          <CircleSet
            size={160}
            offset={offset}
            chroma={tonal.pcset.chroma(intervals)}
          />
        </div>
        <div class="column column-50">
          <label>Intervals</label>
          {intervals.join(" ")}
          <label>Notes</label>
          {tonic ? pcset.join(" ") : "no tonic"}
        </div>
      </div>
      {tonic && <Score notes={notes} />}
      {tonic && (
        <p>
          <button onClick={() => player(tonic, intervals, type)}>Play</button>
        </p>
      )}
    </div>
  );
};

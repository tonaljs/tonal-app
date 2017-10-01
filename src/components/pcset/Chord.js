import React from "react";
import tonal from "tonal";
import { withLayout } from "../shared/Layout";
import PitchSetInfo from "./PitchSetInfo";
import Related from "./Related";
import Selector from "../shared/Selector";

export default withLayout("chord", ({ name }) => {
  const [tonic, type] = tonal.chord.tokenize(name);
  return (
    <div className="Chord">
      <Selector
        items={tonal.note.namesEnh()}
        route={t => ["chord", t + name]}
      />
      <h4>chord</h4>
      <h1>{tonic ? tonic + type : type}</h1>
      <PitchSetInfo type="chord" tonic={tonic} name={name} />
      <Related type="chord" tonic={tonic} name={name} />
    </div>
  );
});

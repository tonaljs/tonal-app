import React from "react";
import tonal from "tonal";
import { withLayout } from "../shared/Layout";
import PitchSetInfo from "./PitchSetInfo";
import Related from "./Related";
import Selector from "../shared/Selector";
import Code, { arr, json } from "../shared/Code";

export default withLayout("chord", ({ name }) => {
  const tokens = tonal.chord.tokenize(name);
  const [tonic, type] = tokens;
  const props = tonal.chord.props(type);
  return (
    <div className="Chord">
      <Selector items={tonal.note.names()} route={t => ["chord", t + type]} />
      <h4>chord</h4>
      <h1>{tonic ? tonic + type : type}</h1>
      <PitchSetInfo type="chord" tonic={tonic} name={type} />
      <Related type="chord" tonic={tonic} name={type} />
      <h3>Code examples</h3>
      <Code
        lines={[
          `tonal.chord.tokenize("${name}") // => ${arr(tokens)}`,
          `tonal.chord.props("${type}") // => ${json(props)}`
        ]}
      />
    </div>
  );
});

import React from "react";
import { Note, Chord } from "tonal";
import { withLayout } from "../shared/Layout";
import PitchSetInfo from "./PitchSetInfo";
import Related from "./Related";
import Selector from "../shared/Selector";
import Code, { arr, json } from "../shared/Code";

export default withLayout({ chord: Chord }, ({ name }) => {
  const tokens = Chord.tokenize(name);
  const [tonic, type] = tokens;
  const props = Chord.props(type);
  return (
    <div className="Chord">
      <Selector items={Note.names()} route={t => ["chord", t + type]} />
      <h4>chord</h4>
      <h1>{tonic ? tonic + type : type}</h1>
      <PitchSetInfo type="chord" tonic={tonic} name={type} />
      <Related type="chord" tonic={tonic} name={type} />
      <h3>Code examples</h3>
      <Code
        lines={[
          `Tonal.Chord.tokenize("${name}") // => ${arr(tokens)}`,
          `Tonal.Chord.props("${type}") // => ${json(props)}`
        ]}
      />
    </div>
  );
});

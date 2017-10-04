import React from "react";
import { Scale } from "tonal";
import NameList from "./NameList";
import Code, { arr } from "../shared/Code";
import Collapsable from "../shared/Collapsable";

export default ({ tonic, name }) => {
  const chords = Scale.chords(name);
  return (
    <div className="ScaleChords">
      <h3>Chords</h3>
      <p>All chords that fits this scale</p>
      <Code lines={[`Tonal.Scale.chords("${name}") // => ${arr(chords, 3)}`]} />
      <Collapsable collapsed={true} title={`chord list (${chords.length})`}>
        <NameList
          type="chord"
          tonic={tonic}
          names={chords}
          route={(t, name) => ["chord", name]}
        />
      </Collapsable>
    </div>
  );
};

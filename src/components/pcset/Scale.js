import React from "react";
import tonal from "tonal";
import PitchSetInfo from "./PitchSetInfo";
import NameList from "./NameList";
import { withLayout } from "../shared/Layout";
import Selector, { TONICS } from "../shared/Selector";
import Code, { arr } from "../shared/Code";
import Collapsable from "../shared/Collapsable";

const ScaleChords = ({ tonic, name }) => {
  const chords = tonal.scale.chords(name);
  return (
    <div>
      <h3>Chords</h3>
      <p>All chords that fits this scale</p>
      <Code lines={[`tonal.scale.chords("${name}") // => ${arr(chords, 3)}`]} />
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

const Extensions = ({ tonic, name }) => {
  const extensions = tonal.scale.extensions(name);

  return (
    <div>
      <h3>Scale extensions</h3>
      <p>
        All the scales that includes all the notes of '{name}' and add more
        notes.
      </p>
      <Code
        lines={[
          `tonal.scale.extensions("${name}") // => ${arr(extensions, 3)}`
        ]}
      />
      <Collapsable
        collapsed={true}
        title={`extension list (${extensions.length})`}
      >
        <NameList
          type="scale"
          tonic={tonic}
          names={extensions}
          route={(t, name) => ["scale", name, tonic ? tonic : ""]}
        />
      </Collapsable>
    </div>
  );
};

export default withLayout("scale", ({ tonic, name }) => {
  return (
    <div className="Scale">
      <Selector items={TONICS} route={i => ["scale", name, i]} />
      <h6>
        <a href={tonic ? "#/scales/" + tonic : "#/scales"}>Scales</a>
      </h6>
      <h1>
        {tonic} {name}
      </h1>
      <PitchSetInfo type="scale" tonic={tonic} name={name} />
      <ScaleChords tonic={tonic} name={name} />
      <Extensions tonic={tonic} name={name} />
    </div>
  );
});

import React from "react";
import { withLayout } from "../shared/Layout";
import Selector from "../shared/Selector";
import NameList from "./NameList";
import tonal from "tonal";

const NAMES = tonal.scale
  .names()
  .sort(
    (a, b) => tonal.scale.intervals(a).length - tonal.scale.intervals(b).length
  );

export default withLayout("scale", ({ tonic }) => (
  <div className="Scales">
    <Selector items={tonal.note.names()} route={i => ["scales", i]} />
    <h1>Scales {tonic && " in " + tonic}</h1>
    <NameList
      title="Scales"
      type="scale"
      tonic={tonic}
      names={NAMES}
      route={(tonic, name) => ["scale", name, tonic]}
    />
  </div>
));

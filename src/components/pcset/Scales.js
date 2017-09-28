import React from "react";
import { withLayout } from "../shared/Layout";
import NameList from "./NameList";
import tonal from "tonal";

const NAMES = tonal.scale
  .names()
  .sort(
    (a, b) => tonal.scale.intervals(a).length - tonal.scale.intervals(b).length
  );

export default withLayout("scale", ({ tonic }) => (
  <div className="Scales">
    <h2>Scales</h2>
    <NameList title="Scales" type="scale" tonic={tonic} names={NAMES} />
  </div>
));

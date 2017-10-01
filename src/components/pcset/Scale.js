import React from "react";
import tonal from "tonal";
import PitchSetInfo from "./PitchSetInfo";
import Related from "./Related";
import ScaleChords from "./ScaleChords";
import ScaleModes from "./ScaleModes";
import { withLayout } from "../shared/Layout";
import Selector from "../shared/Selector";

export default withLayout("scale", ({ tonic, name }) => {
  const tonics = tonal.note.namesEnh();
  return (
    <div className="Scale">
      <Selector items={tonics} route={i => ["scale", name, i]} />
      <h6>
        <a href={tonic ? "#/scales/" + tonic : "#/scales"}>Scales</a>
      </h6>
      <h1>
        {tonic} {name}
      </h1>
      <PitchSetInfo type="scale" tonic={tonic} name={name} />
      <ScaleChords tonic={tonic} name={name} />
      <ScaleModes tonic={tonic} name={name} />
      <Related type="scale" tonic={tonic} name={name} />
    </div>
  );
});

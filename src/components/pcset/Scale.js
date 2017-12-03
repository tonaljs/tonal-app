import React from "react";
import { Note, Scale } from "tonal";
import PitchSetInfo from "./PitchSetInfo";
import Related from "./Related";
import ScaleChords from "./ScaleChords";
import ScaleModes from "./ScaleModes";
import { withLayout } from "../shared/Layout";

export default withLayout({ scale: Scale }, ({ note, name }) => {
  const tonic = Note.pc(note);
  const tonics = Note.names();
  return (
    <div className="Scale">
      <h6>Scale</h6>
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

import React from "react";
import { withLayout } from "../shared/Layout";

export default withLayout("chord", ({ tonic, name }) => {
  return (
    <div className="Chord">
      <h4>chord</h4>
      <h1>{tonic ? tonic + name : name}</h1>
    </div>
  );
});

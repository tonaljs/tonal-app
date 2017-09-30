import React from "react";
import tonal from "tonal";
import Code, { arr } from "../shared/Code";
import Collapsable from "../shared/Collapsable";
import NameList from "./NameList";

export default ({ tonic, name }) => {
  const scaleName = tonic ? tonic + " " + name : name;
  const modes = tonal.scale.modeNames(scaleName);
  const tonics = modes.map(m => m[0]);
  const names = modes.map(m => m[1]);
  return (
    <div className="ScaleModes">
      <h3>Scale modes</h3>
      <Code
        lines={[`tonal.scale.modeNames("${scaleName}") // => ${arr(modes, 3)}`]}
      />
      <Collapsable collapsed={true} title={`modes (${modes.length})`}>
        <NameList
          type="scale"
          tonics={tonics}
          names={names}
          route={(t, name) => ["scale", name, t ? t : ""]}
        />
      </Collapsable>
    </div>
  );
};

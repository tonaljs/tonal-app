import React from "react";
import { Chord, Scale } from "tonal";
import NameList from "./NameList";
import Code, { arr } from "../shared/Code";
import Collapsable from "../shared/Collapsable";

export const Set = ({ title, type, tonic, name, fnName }) => {
  const Set = type === "scale" ? Scale : Chord;
  const names = Set[fnName](name);

  return (
    <div>
      <h4>{title}</h4>
      <p>
        All the {type}s that includes all the notes of '{name}' and more
      </p>
      <Code
        lines={[`tonal.${type}.${fnName}("${name}") // => ${arr(names, 3)}`]}
      />
      <Collapsable collapsed={true} title={`list (${names.length})`}>
        <NameList
          type={type}
          tonic={tonic}
          names={names}
          route={(t, name) => ["scale", name, tonic ? tonic : ""]}
        />
      </Collapsable>
    </div>
  );
};

export default props => [
  <h3>Related {props.type}s</h3>,
  <Set {...props} title="Supersets (extensions)" fnName="supersets" />,
  <Set {...props} title="Subsets (reductions)" fnName="subsets" />
];

import React from "react";
import tonal from "tonal";
import CircleSet from "../shared/CircleSet";

const player = () => null;

const Row = ({ tonic, name, type, sep, size }) => {
  const intervals = tonal[type].intervals(name);
  const setchroma = tonal.pcset.chroma(intervals);
  const notes = tonal[type].notes(tonic, name);
  return (
    <tr>
      <td>
        <CircleSet
          size={size}
          chroma={setchroma}
          offset={tonal.note.chroma(tonic)}
        />
      </td>
      <td>
        <a href={"#/" + type + "/" + name + "/" + tonic}>
          {tonic ? tonic + sep + name : name}
        </a>
      </td>
      <td>{(tonic ? notes : intervals).join(" ")}</td>
      <td>
        {tonic ? (
          <button
            class="button button-clear small"
            onclick={() => player(tonic, intervals, type)}
          >
            Play
          </button>
        ) : null}
      </td>
    </tr>
  );
};

export default ({ type, names, tonic, size = 40, sep = " " }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </thead>
      <tbody>
        {names.map(name => (
          <Row type={type} tonic={tonic} name={name} size={size} sep={sep} />
        ))}
      </tbody>
    </table>
  );
};

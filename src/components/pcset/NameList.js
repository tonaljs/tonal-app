import React from "react";
import tonal from "tonal";
import Link from "../shared/Link";
import CircleSet from "../shared/CircleSet";
import player from "../../player";

const SIZE = 40;

const Row = ({ tonic, name, type, route, sep }) => {
  const intervals = tonal[type].intervals(name);
  const setchroma = tonal.pcset.chroma(intervals);
  const notes = tonal[type].notes(tonic, name);
  return (
    <tr>
      <td>
        <CircleSet
          size={SIZE}
          chroma={setchroma}
          offset={tonal.note.chroma(tonic)}
        />
      </td>
      <td>
        <Link to={route(tonic, name)}>{tonic ? tonic + sep + name : name}</Link>
      </td>
      <td>{(tonic ? notes : intervals).join(" ")}</td>
      <td>
        {tonic ? (
          <button
            className="button button-clear small"
            onClick={() => player(tonic, intervals, type)}
          >
            Play
          </button>
        ) : null}
      </td>
    </tr>
  );
};

/**
 * Props:
 * - names
 * - type
 * - tonic
 * - router
 */
export default props => {
  const sep = props.type === "chord" ? "" : " ";
  return (
    <table>
      <tbody>
        {props.names.map((name, i) => (
          <Row
            {...props}
            tonic={props.tonics ? props.tonics[i] : props.tonic}
            key={i}
            name={name}
            sep={sep}
          />
        ))}
      </tbody>
    </table>
  );
};

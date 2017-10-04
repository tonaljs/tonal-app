import React from "react";
import { PcSet, Chord, Scale, Note } from "tonal";
import Link from "../shared/Link";
import CircleSet from "../shared/CircleSet";
import player from "../../player";

const SIZE = 40;

const Row = ({ tonic, name, type, route, sep }) => {
  const Set = type === "scale" ? Scale : Chord;
  const intervals = Set.intervals(name);
  const setchroma = PcSet.chroma(intervals);
  const notes = Set.notes(tonic, name);
  return (
    <tr>
      <td>
        <CircleSet size={SIZE} chroma={setchroma} offset={Note.chroma(tonic)} />
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
 * - route
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

import React from "react";
import { PcSet, Chord, Scale, Note } from "tonal";
import Link from "../shared/Link";
import CircleSet from "../viz/CircleSet";
import PianoKeyboard from "../viz/PianoKeyboard";
import player from "../../player";

const SIZE = 40;

const Row = ({ tonic, name, type, route, sep }) => {
  const Set = type === "scale" ? Scale : Chord;
  const intervals = Set.intervals(name);
  const setchroma = PcSet.chroma(intervals);
  const notes = Set.notes(tonic, name);
  const chroma = PcSet.chroma(notes);
  return (
    <tr>
      <td>
        <CircleSet size={SIZE} chroma={setchroma} offset={Note.chroma(tonic)} />
      </td>
      <td>
        {tonic && (
          <PianoKeyboard
            width="100px"
            setTonic={Note.chroma(tonic)}
            setChroma={chroma}
            minOct={4}
            maxOct={4}
            notes={notes}
          />
        )}
      </td>
      <td>
        <Link to={route(tonic, name)}>{tonic ? tonic + sep + name : name}</Link>
      </td>
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

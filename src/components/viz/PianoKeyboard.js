import React from "react";
import { Array, Note } from "tonal";
import "./PianoKeyboard.css";
import wrap from "classwrap";

const WHITES = [0, 2, 4, 5, 7, 9, 11];
const BLACKS = [1, 3, 6, 8, 10];
const BPOS = [1, 2, 4, 5, 6];
const WHITE_WIDTH = 40;
const WHITE_HEIGHT = 150;
const BLACK_WIDTH = 22;
const BLACK_HEIGHT = 90;

const Octave = ({ xOffset, oct, setTonic, setChroma, noteIndex }) => {
  return (
    <g id={"octave-" + oct}>
      {WHITES.map((note, i) => {
        const midi = (oct + 1) * 12 + note;
        const name = noteIndex[midi];
        const className = wrap([
          "piano-key",
          {
            white: true,
            active: name !== undefined || setChroma[note] === "1",
            tonic: setTonic === note
          }
        ]);
        return (
          <rect
            key={"note-" + midi}
            id={"note-" + midi}
            className={className}
            width={WHITE_WIDTH}
            height={WHITE_HEIGHT}
            x={xOffset + i * WHITE_WIDTH}
            name={noteIndex[midi]}
          />
        );
      })}
      {BLACKS.map((note, i) => {
        const midi = (oct + 1) * 12 + note;
        const name = noteIndex[midi];
        const className = wrap([
          "piano-key",
          {
            black: true,
            active: name !== undefined || setChroma[note] === "1",
            tonic: setTonic === note
          }
        ]);
        return (
          <rect
            key={"note-" + midi}
            id={"note-" + midi}
            className={className}
            width={BLACK_WIDTH}
            height={BLACK_HEIGHT}
            x={xOffset + (WHITE_WIDTH * BPOS[i] - BLACK_WIDTH / 2)}
          />
        );
      })}
    </g>
  );
};

export default ({
  className,
  setChroma,
  setTonic,
  width,
  notes,
  minOct = 3,
  maxOct = 6
}) => {
  setChroma = setChroma || "";
  notes = notes || [];
  const noteIndex = notes.reduce((index, note) => {
    index[Note.midi(note)] = note;
    return index;
  }, {});
  const octs = Array.range(minOct, maxOct);
  // const viewWidth = 1120
  const viewWidth = octs.length * 7 * WHITE_WIDTH;
  width = width || "100%";
  return (
    <div className={"Piano " + className}>
      <svg
        width={width}
        viewBox={`0 0 ${viewWidth} ${WHITE_HEIGHT}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {octs.map((o, i) => (
            <Octave
              key={"oct-" + o}
              oct={o}
              setChroma={setChroma}
              setTonic={setTonic}
              xOffset={i * 7 * WHITE_WIDTH}
              noteIndex={noteIndex}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

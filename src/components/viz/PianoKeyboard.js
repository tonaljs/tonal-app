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

const getKeyTypes = (type, midi, pcset, notes) => {
  const chroma = midi % 12;
  return wrap([
    "piano-key",
    type,
    {
      active: pcset.chroma[chroma] === "1" || notes.names[midi] !== undefined,
      tonic: pcset.tonic === chroma || notes.tonic === midi
    }
  ]);
};

const Key = ({ type, chroma, i, oct, pcset, notes, x, onClick }) => {
  const isWhite = type === "white";
  const midi = (oct + 1) * 12 + chroma;
  const offset = isWhite
    ? i * WHITE_WIDTH
    : WHITE_WIDTH * BPOS[i] - BLACK_WIDTH / 2;

  const handleClick = e => {
    e.preventDefault();
    onClick(midi, notes.names[midi]);
  };

  return (
    <rect
      key={"note-" + midi}
      id={"note-" + midi}
      className={getKeyTypes(type, midi, pcset, notes)}
      width={isWhite ? WHITE_WIDTH : BLACK_WIDTH}
      height={isWhite ? WHITE_HEIGHT : BLACK_HEIGHT}
      x={x + offset}
      name={notes.names[midi]}
      onClick={handleClick}
    />
  );
};

const Octave = props => {
  return (
    <g id={"octave-" + props.oct}>
      {WHITES.map((chroma, i) => (
        <Key key={chroma} type="white" chroma={chroma} i={i} {...props} />
      ))}
      {BLACKS.map((chroma, i) => (
        <Key key={chroma} type="black" chroma={chroma} i={i} {...props} />
      ))}
    </g>
  );
};

export default ({
  className,
  setChroma,
  setTonic,
  width,
  tonic,
  notes,
  onClick,
  minOct = 3,
  maxOct = 6
}) => {
  const pcset = { tonic: setTonic, chroma: setChroma || "" };
  const newnotes = {
    tonic: tonic,
    names: (notes || []).reduce((index, note) => {
      index[Note.midi(note)] = note;
      return index;
    }, {})
  };
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
              x={i * 7 * WHITE_WIDTH}
              pcset={pcset}
              notes={newnotes}
              onClick={onClick || (() => {})}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

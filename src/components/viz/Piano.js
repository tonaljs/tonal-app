import React from "react";
import "./Piano.css";

const WHITES = "C D E F G A B".split(" ");
const BLACKS = "Db Eb Gb Ab Bb".split(" ");
const BPOS = [1, 2, 4, 5, 6];

export const Octave = ({ oct, width, height }) => {
  const bwidth = Math.floor(0.55 * width);
  const hbwidth = Math.floor(0.5 * bwidth);
  const bheight = Math.floor(height * 0.65);
  return (
    <g id={"octave-" + oct}>
      {WHITES.map((note, i) => (
        <rect
          id={note}
          className="piano-key white"
          width={width}
          height={height}
          x={i * width}
        />
      ))}
      {BLACKS.map((note, i) => (
        <rect
          id={note}
          className="piano-key black"
          width={bwidth}
          height={bheight}
          x={width * BPOS[i] - hbwidth}
        />
      ))}
    </g>
  );
};

export default ({ className, width = 40, height = 150 }) => {
  return (
    <div className={"Piano " + className}>
      <svg
        width="100%"
        viewBox={"0 0 1120 " + height}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <Octave oct={3} width={width} height={height} />
        </g>
      </svg>
    </div>
  );
};

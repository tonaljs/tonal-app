import React from "react";
import Tonal from "./Tonal";
import Notes from "./note/Notes";
import Note from "./note/Note";
import Intervals from "./interval/Intervals";
import Interval from "./interval/Interval";
import PcSets from "./pcset/PcSets";
import Scales from "./pcset/Scales";
import Scale from "./pcset/Scale";
import Chords from "./pcset/Chords";
import Chord from "./pcset/Chord";
import Keys from "./key/Keys";
import Key from "./key/Key";

const decode = str => str.replace(/_/g, " ");

export default ({ path }) => {
  const route = path.split("/");
  switch (route[0]) {
    case "notes":
      return <Notes />;
    case "note":
      return <Note note={route[1]} />;
    case "intervals":
      return <Intervals />;
    case "interval":
      return <Interval interval={route[1]} />;
    case "scales":
      return <Scales tonic={route[1]} />;
    case "scale":
      return <Scale name={decode(route[1])} tonic={route[2]} />;
    case "chords":
      return <Chords tonic={route[1]} />;
    case "chord":
      return <Chord name={decode(route[1])} />;
    case "keys":
      return <Keys />;
    case "key":
      return <Key keyName={decode(route[1])} />;
    case "pcsets":
      return <PcSets />;
    default:
      return <Tonal />;
  }
};

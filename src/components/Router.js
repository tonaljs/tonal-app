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

export default ({ route }) => {
  if (!route.note) return <span>{JSON.stringify(route)}</span>;
  switch (route.path) {
    case "scales":
      return <Scales note={route.note} />;
    case "scale":
      return <Scale note={route.note} name={route.id} />;
    case "chords":
      return <Chords note={route.note} />;
    case "chord":
      return <Chord note={route.note} id={route.id} />;
    case "key":
      return <Key note={route.note} id={route.id} />;
    default:
      return <Note note={route.note} />;
  }
};

export const old = ({ path, route }) => {
  const [zero, one, two] = path.split("/");
  switch (zero) {
    case "notes":
      return <Notes />;
    case "note":
      return <Note note={one} />;
    case "intervals":
      return <Intervals />;
    case "interval":
      return <Interval interval={one} />;
    case "keys":
      return <Keys />;
    case "key":
      return <Key keyName={decode(one)} />;
    case "pcsets":
      return <PcSets />;
    default:
      return <Tonal />;
  }
};

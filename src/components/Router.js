import React from "react";
import Tonal from "./Tonal";
import Notes from "./note/Notes";
import Note from "./note/Note";
import Intervals from "./interval/Intervals";
import Interval from "./interval/Interval";
import Keys from "./key/Keys";
import Chords from "./pcset/Chords";
import Scales from "./pcset/Scales";

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
      return <Scales />;
    case "chords":
      return <Chords />;
    case "keys":
      return <Keys />;
    default:
      return <Tonal />;
  }
};

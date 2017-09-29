import React from "react";
import NoteProps from "./NoteProps";
import { withLayout } from "../shared/Layout";

export default withLayout("note", ({ note }) => {
  return (
    <div className="Note">
      <h1 className="big">{note}</h1>
      <NoteProps note={note} />
    </div>
  );
});

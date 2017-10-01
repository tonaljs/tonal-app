import React from "react";
import tonal from "tonal";
import Score from "../shared/Score";
import KeyChords from "./KeyChords";
import RelatedKeys from "./RelatedKeys";
import Selector from "../shared/Selector";
import Code, { json } from "../shared/Code";
import { withLayout } from "../shared/Layout";
import "./Key.css";

const center = pc =>
  pc ? (pc[0] === "A" || pc[0] === "B" ? pc + 3 : pc + 4) : null;

export default withLayout("key", ({ keyName }) => {
  const props = tonal.key.props(keyName);
  const tonic = props.tonic;
  const major = tonal.key.relative("major", keyName);
  const notes = props.intervals.map(tonal.distance.transpose(center(tonic)));
  return (
    <div className="Key">
      <Selector
        className="tonics"
        items={tonal.note.names()}
        route={i => ["key", i + " " + props.mode]}
      />
      <h6>key</h6>
      <h1>{keyName}</h1>

      <div className="row">
        <div className="column column-5">
          <p>
            <label>Accidentals:</label>
            {props.acc}&nbsp;
            <label>Altered notes:</label>
            {tonal.key.alteredNotes(keyName).join(" ")}
          </p>
        </div>
        <div className="column column-5">
          <p>
            <label>Intervals:</label>
            {props.intervals.join(" ")}
            <label>Scale:</label>
            {props.scale.join(" ")}
          </p>
        </div>
      </div>

      <div className="KeyScale">
        <h3>Scale</h3>
        <Score keyTonic={tonal.key.props(major).tonic} notes={notes} />
      </div>
      <RelatedKeys keyName={keyName} />
      <KeyChords keyName={keyName} />

      <h3>Code examples</h3>
      <Code lines={[`tonal.scale.props("${keyName}") // => ${json(props)}`]} />
    </div>
  );
});

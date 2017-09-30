import React from "react";
import tonal from "tonal";
import Score from "../shared/Score";
import Selector from "../shared/Selector";
import Code, { json } from "../shared/Code";
import { withLayout } from "../shared/Layout";

const center = pc =>
  pc ? (pc[0] === "A" || pc[0] === "B" ? pc + 3 : pc + 4) : null;

const KeyChords = ({ keyName }) => (
  <div>
    <h3>Chords</h3>
    <table>
      <thead>
        <tr>
          <td>Degrees</td>
          {tonal.key
            .degrees(keyName)
            .map(degree => <td key={degree}>{degree}</td>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chords</td>
          {tonal.key.chords(keyName).map(chord => <td key={chord}>{chord}</td>)}
        </tr>
        <tr>
          <td>V7</td>
          {tonal.key
            .secDomChords(keyName)
            .map(chord => <td key={chord}>{chord}</td>)}
        </tr>
      </tbody>
    </table>
  </div>
);

const RelatedKeys = ({ keyName }) => {
  const tonic = tonal.key.props(keyName).tonic;
  const relatives = tonal.key
    .modeNames()
    .map(name => tonal.key.relative(name, keyName));
  const paralells = tonal.key.modeNames().map(name => tonic + " " + name);

  return (
    <div>
      <h3>Related keys</h3>
      <label>Relative modes:</label>
      <Selector items={relatives} route={k => ["key", k]} />
      <label>Parallel modes:</label>
      <Selector items={paralells} route={k => ["key", k]} />
    </div>
  );
};

export default withLayout("key", ({ keyName }) => {
  const props = tonal.key.props(keyName);
  const tonic = props.tonic;
  const major = tonal.key.relative("major", keyName);
  const notes = props.intervals.map(tonal.distance.transpose(center(tonic)));
  return (
    <div className="Keys">
      <Selector
        items={tonal.note.names()}
        route={i => ["key", i + " " + props.mode]}
      />
      <h6>key</h6>
      <h1>{keyName}</h1>

      <div className="row">
        <div className="column column-5">
          <p>
            <label>Accidentals:</label>
            {props.accidentals}
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

      <h3>Scale</h3>
      <Score keyTonic={tonal.key.props(major).tonic} notes={notes} />
      <RelatedKeys keyName={keyName} />
      <KeyChords keyName={keyName} />

      <Code lines={[`tonal.scale.props("${keyName}") // => ${json(props)}`]} />
    </div>
  );
});

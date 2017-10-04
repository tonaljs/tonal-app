import React from "react";
import * as Key from "tonal-key";

export default ({ keyName }) => (
  <div className="KeyChords">
    <h3>Chords</h3>
    <table>
      <thead>
        <tr>
          <td>Degrees</td>
          {Key.degrees(keyName).map(degree => <td key={degree}>{degree}</td>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chords</td>
          {Key.chords(keyName).map(chord => <td key={chord}>{chord}</td>)}
        </tr>
        <tr>
          <td>V7</td>
          {Key.secDomChords(keyName).map(chord => <td key={chord}>{chord}</td>)}
        </tr>
      </tbody>
    </table>
  </div>
);

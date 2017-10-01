import React from "react";
import tonal from "tonal";

export default ({ keyName }) => (
  <div className="KeyChords">
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

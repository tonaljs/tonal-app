import React from "react";
import { Array } from "tonal";
import * as Key from "tonal-key";
import Link from "../shared/Link";
import { withLayout } from "../shared/Layout";

const ALTS = Array.range(-5, 5);

const KeyRow = ({ keyName }) => {
  const minor = Key.relative("minor", keyName);
  return (
    <tr>
      <td>{Key.props(keyName).acc}</td>
      <td>
        <Link to={["key", keyName]}>{keyName}</Link>
      </td>
      <td>
        <Link to={["key", minor]}>{minor}</Link>
      </td>
    </tr>
  );
};

export default withLayout({ key: Key }, () => (
  <div className="Keys">
    <h1>Keys</h1>
    <table>
      <thead>
        <tr>
          <td>Accidentals</td>
          <td>Major</td>
          <td>Minor</td>
        </tr>
      </thead>
      <tbody>
        {ALTS.map(alt => <KeyRow kaye={alt} keyName={Key.fromAlter(alt)} />)}
      </tbody>
    </table>
  </div>
));

import React from "react";
import tonal from "tonal";
import Link from "../shared/Link";
import { withLayout } from "../shared/Layout";

const ALTS = tonal.array.range(-5, 5);

const KeyRow = ({ keyName }) => {
  const minor = tonal.key.relative("minor", keyName);
  return (
    <tr>
      <td>{tonal.key.props(keyName).acc}</td>
      <td>
        <Link to={["key", keyName]}>{keyName}</Link>
      </td>
      <td>
        <Link to={["key", minor]}>{minor}</Link>
      </td>
    </tr>
  );
};

export default withLayout("key", () => (
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
        {ALTS.map(alt => (
          <KeyRow kaye={alt} keyName={tonal.key.fromAlter(alt)} />
        ))}
      </tbody>
    </table>
  </div>
));

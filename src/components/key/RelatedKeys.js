import React from "react";
import * as Key from "tonal-key";
import Selector from "../shared/Selector";

export default ({ keyName }) => {
  const tonic = Key.props(keyName).tonic;
  const relatives = Key.modeNames().map(name => Key.relative(name, keyName));
  const paralells = Key.modeNames().map(name => tonic + " " + name);

  return (
    <div className="RelatedKeys">
      <h3>Related keys</h3>
      <label>Relative modes:</label>
      <Selector items={relatives} route={k => ["key", k]} />
      <label>Parallel modes:</label>
      <Selector items={paralells} route={k => ["key", k]} />
    </div>
  );
};

import React from "react";
import tonal from "tonal";
import Selector from "../shared/Selector";

export default ({ keyName }) => {
  const tonic = tonal.key.props(keyName).tonic;
  const relatives = tonal.key
    .modeNames()
    .map(name => tonal.key.relative(name, keyName));
  const paralells = tonal.key.modeNames().map(name => tonic + " " + name);

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

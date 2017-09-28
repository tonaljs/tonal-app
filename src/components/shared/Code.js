import React from "react";

export const json = p => JSON.stringify(p, null, 2);

export default ({ lines }) => (
  <pre>
    <code>{lines.join("\n")}</code>
  </pre>
);

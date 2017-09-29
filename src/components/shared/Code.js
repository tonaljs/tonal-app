import React from "react";

export const json = p => JSON.stringify(p, null, 2);

export const val = t =>
  t === undefined
    ? "undefined"
    : t === null ? "null" : typeof t === "string" ? `"${t}"` : t;

export const arr = (arr, max) => {
  if (max) arr = arr.slice(0, max);
  return "[" + arr.map(val).join(", ") + (max ? ", ...]" : "]");
};

export default ({ lines }) => (
  <pre>
    <code>{lines.join("\n")}</code>
  </pre>
);

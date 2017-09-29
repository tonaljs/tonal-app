import React from "react";
import Link from "./Link";
import "./Selector.css";

export const TONICS = "C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B B# Cb".split(
  " "
);

export default ({ label, items, route }) => (
  <div className="Selector">
    {label && <label>{label}</label>}
    {items.map((item, i) => (
      <Link key={i} to={route(item)}>
        {item}
      </Link>
    ))}
  </div>
);

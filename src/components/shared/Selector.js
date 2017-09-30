import React from "react";
import Link from "./Link";
import "./Selector.css";

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

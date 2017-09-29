import React from "react";

const encode = arr => "#/" + arr.join("/").replace(/ /g, "_");

export default ({ to, alt, children }) => (
  <a alt={alt} href={encode(to)}>
    {children}
  </a>
);

import React from "react";

export default ({ names, children }) => (
  <table>
    <thead>
      <tr>
        {names.map((name, i) => (
          <td key={i}>
            <strong>{name}</strong>
          </td>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

import React from "react";

export default ({ names, values }) => (
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
    <tbody>
      <tr>{values.map((value, i) => <td key={i}>{value}</td>)}</tr>
    </tbody>
  </table>
);

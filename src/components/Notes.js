import React from "react";
import { withLayout } from "./shared/Layout";

export const TONICS = "C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B B# Cb".split(
  " "
);

export default withLayout("note", () => (
  <div className="Notes">
    <h1>Notes</h1>
    <table>
      <tbody>
        {TONICS.map(t => (
          <tr>
            <td>
              <strong>
                <a href={"#/note/" + t}>{t}</a>
              </strong>
            </td>
            {[2, 3, 4, 5].map(o => (
              <td>
                <a href={"#/note/" + t + o}>{t + o}</a>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

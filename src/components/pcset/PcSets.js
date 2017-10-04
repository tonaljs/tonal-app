import React from "react";
import { PcSet, Dictionary } from "tonal";
import { withLayout } from "../shared/Layout";

export default withLayout({ pcset: PcSet }, () => (
  <div className="PcSets">
    <h1>Pitch Class Sets</h1>
    <table>
      <tbody>
        {PcSet.chromas().map(chroma => (
          <tr key={chroma}>
            <td>{chroma}</td>
            <td>{Dictionary.pcset.names(chroma).join(" ") || ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

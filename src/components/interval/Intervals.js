import React from "react";
import { withLayout } from "../shared/Layout";
import tonal from "tonal";

const NUMS = tonal.array.range(1, 15);

const Ivl = props => {
  const ivl = tonal.interval.build(props);
  return <a href={"#/interval/" + ivl}>{ivl}</a>;
};

export default withLayout("interval", () => (
  <div class="Intervals">
    <h1>Intervals</h1>
    <table>
      <tbody>
        {NUMS.map(num => (
          <tr>
            <td>
              <Ivl num={num} alt={-1} />
            </td>
            <td>
              <strong>
                <Ivl num={num} alt={0} />
              </strong>
            </td>
            <td>
              <Ivl num={num} alt={1} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

import React from "react";
import { withLayout } from "../shared/Layout";
import Selector from "../shared/Selector";
import SearchList from "./SearchList";
import { Scale, Note } from "tonal";
import "./PcSet.css";

const NAMES = Scale.names().sort(
  (a, b) => Scale.intervals(a).length - Scale.intervals(b).length
);

const filter = term => {
  term = term.toLowerCase();
  return term === ""
    ? NAMES
    : NAMES.filter(name => name.toLowerCase().includes(term));
};

export default withLayout({ scale: Scale }, ({ tonic }) => (
  <div className="List Scales">
    <h1>Scales {tonic && " in " + tonic}</h1>
    <Selector
      label={tonic ? "Change tonic:" : "Choose tonic:"}
      items={Note.names()}
      route={i => ["scales", i]}
    />
    <SearchList
      title="Scales"
      type="scale"
      tonic={tonic}
      filter={filter}
      route={(t, name) => ["scale", name, tonic ? tonic : ""]}
    />
  </div>
));

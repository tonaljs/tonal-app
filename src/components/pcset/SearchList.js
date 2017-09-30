import React from "react";
import Downshift from "downshift";
import NameList from "./NameList";

export default ({ title, type, tonic, filter, route }) => (
  <Downshift>
    {({ getInputProps, inputValue }) => (
      <div>
        <input
          type="text"
          {...getInputProps({
            placeholder: "Search " + type + "s..."
          })}
        />
        <NameList
          title={title}
          type={type}
          tonic={tonic}
          names={filter(inputValue)}
          route={route}
        />
      </div>
    )}
  </Downshift>
);

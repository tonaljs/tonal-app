import React from "react";

const apiUrl = (mod, fn) =>
  `http://danigb.github.io/tonal/api/module-${mod}.html#.${fn}`;

const Function = ({ module, name }) => (
  <dt>
    <code>
      <a className="method" href={apiUrl(module, name)} target="_blank">
        {module}.{name}
      </a>
    </code>
  </dt>
);

const npmUrl = name => `https://www.npmjs.com/package/${name}/`;
const nodeiCo = name => `https://nodei.co/npm/${name}.png?mini=true`;

export const Npm = ({ packageName }) => (
  <a href={npmUrl(packageName)}>
    <img alt={packageName + " npm package"} src={nodeiCo(packageName)} />
  </a>
);

export const Module = ({ name, module }) => (
  <div className="module">
    <h4>
      <code>tonal-{name}</code>
    </h4>
    <Npm packageName={"tonal-" + name.toLowerCase()} />
    <dl>
      {Object.keys(module || {})
        .sort()
        .map((fn, i) => <Function key={i} module={name} name={fn} />)}
    </dl>
  </div>
);

export default ({ modules }) => (
  <div className="API column column-33">
    <h3>API</h3>
    {Object.keys(modules).map(name => (
      <Module key={name} name={name} module={modules[name]} />
    ))}
  </div>
);

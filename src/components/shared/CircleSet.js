import React from "react";
import "./CircleSet.css";

export default ({ size = 80, offset = 0, chroma = "0", type = "set" }) => {
  const center = size / 2;
  const strokeWidth = size * 0.1;
  const radius = size / 2 - strokeWidth / 2;
  // const circumference = 2 * Math.PI * radius;
  const radians = 2 * Math.PI / chroma.length;
  const points = chroma.split("").reduce((points, value, i) => {
    if (value === "1") {
      points.push(center + radius * Math.cos((offset + i - 3) * radians));
      points.push(center + radius * Math.sin((offset + i - 3) * radians));
    }
    return points;
  }, []);

  const classNames = "Circle " + type;

  return (
    <svg
      class={classNames}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle class="background" cx={center} cy={center} r={radius} />
      <circle class="tonic" cx={points[0]} cy={points[1]} r={2} />
      <polygon class="overlay" points={points.join(" ")} />
    </svg>
  );
};

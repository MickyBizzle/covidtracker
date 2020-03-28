import React, { useEffect, useState, useRef } from "react";
import "./Legend.scss";
import { ColorValues, NumValues } from "../constants/LegendColors";

export const Legend = ({ mostCases }) => {
  const labelBar = useRef();
  const [labelBarHeight, setLabelBarHeight] = useState(0);
  const [numValues, setNumValues] = useState([...NumValues]);

  useEffect(() => {
    setLabelBarHeight(labelBar.current.clientHeight);
  }, [labelBar]);

  useEffect(() => {
    if (mostCases) setNumValues([...numValues, mostCases]);
  }, [mostCases]);

  return (
    <div className="legend">
      <div className="legendTitle">Legend</div>
      <div className="legendContainer">
        <div className="labels" ref={labelBar}>
          {numValues
            .slice(0)
            .reverse()
            .map((numVal, index) => (
              <div className="label" key={index}>
                {numVal + " - "}
              </div>
            ))}
        </div>
        <div
          className="colorBar"
          style={{ background: `linear-gradient(to top, ${ColorValues})` }}
        ></div>
      </div>
    </div>
  );
};

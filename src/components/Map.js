import React, { useState, useEffect, memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import { scaleLinear } from "d3-scale";
import { NumValues, ColorValues } from "./../constants/LegendColors";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
// "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({
  setTooltipContent,
  setSelectedCountry,
  countryData,
  mostCases,
  normalizeCountry
}) => {
  const getColour = scaleLinear()
    .domain([...NumValues, mostCases])
    .range(ColorValues);

  const fill = (name) => {
    let cases = countryData.find(
      (country) => country.Country === normalizeCountry(name)
    );
    if (cases) {
      return getColour(cases.TotalConfirmed);
    }
    return "black";
  };

  return (
    <ComposableMap
      data-tip=""
      height={window.innerHeight}
      width={window.innerWidth}
    >
      <ZoomableGroup zoom={2}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { name } = geo.properties;
              return (
                <Geography
                  stroke="#000"
                  strokeWidth={0.05}
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() =>
                    setSelectedCountry({
                      abr: geo.properties["Alpha-2"],
                      data: countryData.find(
                        (country) => country.Country === normalizeCountry(name)
                      )
                    })
                  }
                  onMouseEnter={() => {
                    setTooltipContent(name);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  fill={fill(name)}
                  style={{
                    hover: {
                      fill: "#5eaeff",
                      outline: "none"
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(MapChart);

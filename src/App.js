import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import ReactTooltip from "react-tooltip";
import { Legend } from "./components/Legend";
import { CountryCard } from "./components/CountryCard";
import { BottomInfo } from "./components/BottomInfo";
import { Help } from "./components/Help";

function App() {
  const [tooltip, setTooltip] = useState("");
  const [countries, setCountries] = useState([]);
  const [lastUpdated, setLastUpdated] = useState();
  const [mostCases, setMostCases] = useState();
  const [selectedCountry, setSelectedCountry] = useState();

  const normalizeCountry = (input) => {
    switch (input) {
      case "United States of America":
        return "US";
      case "Czech Republic":
        return "Czechia";
      case "Democratic Republic of the Congo":
        return "Republic of the Congo";
      default:
        return input;
    }
  };

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then(({ Date, Countries }) => {
        Countries.sort((a, b) => a.TotalConfirmed > b.TotalConfirmed);
        setLastUpdated(Date);
        setCountries(Countries);
      });
  }, []);

  useEffect(() => {
    let most =
      countries.length > 0
        ? countries.sort((a, b) => {
            return b.TotalConfirmed - a.TotalConfirmed;
          })[0].TotalConfirmed
        : null;
    setMostCases(most);
  }, [countries, mostCases]);

  const handleSelectedClear = () => {
    setSelectedCountry();
  };

  return (
    <div>
      {countries.length > 0 ? (
        <>
          {selectedCountry ? (
            <CountryCard {...selectedCountry} clear={handleSelectedClear} />
          ) : null}

          <Legend mostCases={mostCases} />
          <ReactTooltip>{tooltip}</ReactTooltip>
          <BottomInfo />
          <Help />
          <Map
            setTooltipContent={setTooltip}
            countryData={countries}
            mostCases={mostCases}
            setSelectedCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
            normalizeCountry={normalizeCountry}
          />
        </>
      ) : null}
    </div>
  );
}

export default App;

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
      case "Venezuela":
        return "Venezuela (Bolivarian Republic)";
      case "Democratic Republic of the Congo":
        return "Congo (Kinshasa)";
      case "Russia":
        return "Russian Federation";
      case "Falkland Islands":
        return "Falkland Islands (Malvinas)";
      case "Republic of the Congo":
        return "Congo (Brazzaville)";
      case "United Republic of Tanzania":
        return "Tanzania, United Republic of";
      case "Uruguay":
        return "Uruguay";
      case "Republic of Serbia":
        return "Serbia";
      case "Macedonia":
        return "Macedonia, Republic of";
      case "Kosovo":
        return "Republic of Kosovo";
      case "Iran":
        return "Iran, Islamic Republic of";
      case "Syria":
        return "Syrian Arab Republic (Syria)";
      case "Somaliland":
        return "Somalia";
      case "Vietnam":
        return "Viet Nam";
      case "Laos":
        return "Lao PDR";
      case "North Korea":
        return "Korea (North)";
      case "South Korea":
        return "Korea (South)";
      case "Taiwan":
        return "Taiwan, Republic of China";
      case "East Timor":
        return "Timor-Leste";
      case "Brunei":
        return "Brunei Darussalam";
      case "Guinea Bissau":
        return "Guinea-Bissau";
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

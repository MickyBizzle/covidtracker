import React, { memo } from "react";
import "./CountryCard.scss";

const Card = ({ abr, data, clear }) => {
  return (
    <div className="card">
      <button onClick={clear}>X</button>
      {data ? (
        <>
          <div className="cardTitle">
            <img
              src={`https://www.countryflags.io/${abr}/flat/64.png`}
              alt={`${data.Country} flag`}
            />
            <span>{data.Country}</span>
          </div>
          <div className="cardContent">
            <div className="totals">
              <p>{`Total Confirmed: ${data.TotalConfirmed}`}</p>
              <p
                style={{ color: "#ff0000" }}
              >{`Total Deaths: ${data.TotalDeaths}`}</p>
              <p
                style={{ color: "#39b54a" }}
              >{`Total Recovered: ${data.TotalRecovered}`}</p>
            </div>
            <div className="new">
              <p>{`New Confirmed: ${data.NewConfirmed}`}</p>
              <p
                style={{ color: "#ff0000" }}
              >{`New Deaths: ${data.NewDeaths}`}</p>
              <p
                style={{ color: "#39b54a" }}
              >{`New Recovered: ${data.NewRecovered}`}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="cardTitle">No data available for this Country</div>
      )}
    </div>
  );
};

function arePropsEqual(prev, next) {
  return prev.data === next.data;
}

export const CountryCard = memo(Card, arePropsEqual);

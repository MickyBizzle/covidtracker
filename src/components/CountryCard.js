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
              <p>Totals</p>
              <p>{`Confirmed: ${data.TotalConfirmed}`}</p>
              <p
                style={{ color: "#ff0000" }}
              >{`Deaths: ${data.TotalDeaths}`}</p>
              <p
                style={{ color: "#39b54a" }}
              >{`Recovered: ${data.TotalRecovered}`}</p>
            </div>
            <div className="new">
              <p>Last 24 hours</p>
              <p>{`Confirmed: ${data.NewConfirmed}`}</p>
              <p style={{ color: "#ff0000" }}>{`Deaths: ${data.NewDeaths}`}</p>
              <p
                style={{ color: "#39b54a" }}
              >{`Recovered: ${data.NewRecovered}`}</p>
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

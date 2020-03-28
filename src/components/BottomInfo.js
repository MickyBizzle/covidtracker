import React from "react";
import "./BottomInfo.scss";

export const BottomInfo = () => {
  return (
    <div className="bottomInfo">
      <span>
        Data from{" "}
        <a href="https://covid19api.com/" target="blank">
          covid19api.com
        </a>{" "}
        Datasource does not feature all countries.{" "}
      </span>
      <span>Made by Michael Ballard</span>
    </div>
  );
};

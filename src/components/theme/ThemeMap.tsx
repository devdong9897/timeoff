import React from "react";
import { ThemeMapContainer } from "../../styles/ThemeMapStyle";
import { ReactComponent as SouthKorea } from "@svg-maps/south-korea/south-korea.svg";

const ThemeMap = () => {
  return (
    <ThemeMapContainer>
      <div className="map-box">
        <SouthKorea style={{ fill: "#808080", border: "1px solid black" }} />
      </div>
    </ThemeMapContainer>
  );
};

export default ThemeMap;

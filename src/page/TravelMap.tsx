import React from "react";
import NaverMap from "../components/NaverMap";
import { TravelMapWrap } from "../styles/TravelMapStyle";

const TravelMap = () => {
  return (
    <TravelMapWrap>
      <div className="spacer"></div>
      <NaverMap />
    </TravelMapWrap>
  );
};

export default TravelMap;

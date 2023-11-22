import React from "react";
import { TravelMapWrap } from "../styles/TravelMapStyle";
import KakaoMap from "../components/KakaoMap";

const TravelMap = () => {
  return (
    <TravelMapWrap>
      <div className="spacer"></div>
      <KakaoMap />
    </TravelMapWrap>
  );
};

export default TravelMap;

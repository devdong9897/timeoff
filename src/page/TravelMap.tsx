import React from "react";
// import NaverMap from "../components/NaverMap";
import { TravelMapWrap } from "../styles/TravelMapStyle";
import KakaoMap from "../components/KakaoMap";

const TravelMap = () => {
  return (
    <TravelMapWrap>
      <div className="spacer"></div>
      {/* <NaverMap />/ */}
      <KakaoMap />
    </TravelMapWrap>
  );
};

export default TravelMap;

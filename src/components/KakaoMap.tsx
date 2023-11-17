import React, { useEffect, useState } from "react";
import { KakaoMapWrap } from "../styles/KakaoStyle";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const { kakao } = window;
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");

  useEffect(() => {
    if (navigator.geolocation != null) {
      navigator.geolocation.getCurrentPosition(position => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }

    if (typeof myLocation !== "string") {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(
          myLocation.latitude,
          myLocation.longitude,
        ),
        level: 6,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const map = new kakao.maps.Map(container, options);
    }
  }, []);

  return <KakaoMapWrap id="map"></KakaoMapWrap>;
};

export default KakaoMap;

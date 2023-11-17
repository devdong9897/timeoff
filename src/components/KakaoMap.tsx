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
  }, []);

  useEffect(() => {
    if (typeof myLocation !== "string") {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(
          myLocation.latitude,
          myLocation.longitude,
        ),
        level: 5,
      };

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const map = new kakao.maps.Map(container, options);

      const currentMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(currentPosition[0], currentPosition[1]),
        map,
      });

      currentMarker.setMap(map);
    }
  }, [myLocation]);

  return <KakaoMapWrap id="map"></KakaoMapWrap>;
};

export default KakaoMap;

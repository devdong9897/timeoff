import React, { useEffect, useState } from "react";
import { KakaoMapWrap } from "../styles/KakaoStyle";
import { Map } from "react-kakao-maps-sdk";
const { kakao } = window;
const KakaoMap = () => {
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
      if (container != null) {
        const options = {
          center: new kakao.maps.LatLng(
            myLocation.latitude,
            myLocation.longitude,
          ),
          level: 5,
        };

        const map = new kakao.maps.Map(container, options);

        const currentMarker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(
            currentPosition[0],
            currentPosition[1],
          ),
          map,
        });

        currentMarker.setMap(map);
      }
    }
  }, [myLocation]);

  return (
    <KakaoMapWrap>
      <Map
        id="map"
        center={
          typeof myLocation === "object"
            ? { lat: myLocation.latitude, lng: myLocation.longitude }
            : { x: 0, y: 0 }
        }
        style={{
          width: "100%",
          height: "700px",
        }}
        level={5}
      ></Map>
    </KakaoMapWrap>
  );
};

export default KakaoMap;

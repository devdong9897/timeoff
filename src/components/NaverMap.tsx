/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { NaverMapWrap } from "../styles/TravelMapStyle";

const otherLatLngs = [
  { lat: 37.6859, lng: 126.597865 },
  { lat: 37.68528, lng: 126.597227 },
  { lat: 37.685535, lng: 126.599528 },
  { lat: 37.684234, lng: 126.599292 },
];

const NaverMap: React.FC = () => {
  const { naver } = window;
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");

  // 현재 위치 받아오기
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

      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });

      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map,
        // 원하는 이미지로 마커 커스텀
        icon: {
          url: "",
          size: new naver.maps.Size(50, 52),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(25, 26),
        },
      });

      // 주변 마커 나타내기
      const markers: naver.maps.Marker[] = [];
      const infowindows: naver.maps.InfoWindow[] = [];
      const contentTags =
        '<div class="naver-container"><p class="ptag">여깁니다</p><span class="spantag">맞아요</span></div>';

      // show other markers
      for (let i = 0; i < otherLatLngs.length; i += 1) {
        const otherMarkers = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            otherLatLngs[i].lat,
            otherLatLngs[i].lng,
          ),
          map,
        });

        const infowindow = new naver.maps.InfoWindow({
          content: contentTags,
          borderWidth: 1,
          anchorSize: new naver.maps.Size(10, 10),
          pixelOffset: new naver.maps.Point(10, -10),
        });

        markers.push(otherMarkers);
        infowindows.push(infowindow);
      }

      naver.maps.Event.addListener(map, "idle", () => {
        updateMarkers(map, markers);
      });

      const updateMarkers = (
        isMap: naver.maps.Map,
        isMarkers: naver.maps.Marker[],
      ) => {
        const mapBounds: any = isMap.getBounds();
        let marker;
        let position;

        for (let i = 0; i < isMarkers.length; i += 1) {
          marker = isMarkers[i];
          position = marker.getPosition();

          if (mapBounds.hasLatLng(position) != null) {
            showMarker(isMap, marker);
          } else {
            hideMarker(marker);
          }
        }
      };

      const showMarker = (isMap: naver.maps.Map, marker: naver.maps.Marker) => {
        marker.setMap(isMap);
      };

      const hideMarker = (marker: naver.maps.Marker) => {
        marker.setMap(null);
      };

      const getClickHandler = (seq: number) => {
        return () => {
          const marker = markers[seq];
          const infoWindow = infowindows[seq];

          if (infoWindow.getMap() != null) {
            infoWindow.close();
          } else {
            infoWindow.open(map, marker);
          }
        };
      };

      for (let i = 0; i < markers.length; i += 1) {
        naver.maps.Event.addListener(markers[i], "click", getClickHandler(i));
      }
    }
  }, [myLocation]);
  return <NaverMapWrap id="map"></NaverMapWrap>;
};

export default NaverMap;

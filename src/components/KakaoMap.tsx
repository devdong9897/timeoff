import React, { useEffect, useState } from "react";
import { KakaoMapWrap } from "../styles/KakaoStyle";
import * as KakaoModule from "./KakaoModule";

const KakaoMap: React.FC = () => {
  const [map, setMap] = useState<any>(null);
  const [places] = useState<KakaoModule.Place[]>([]);
  const [infowindow, setInfowindow] = useState<any>(null);
  const [word, setWord] = useState<string>("");
  const [currentMarkers, setCurrentMarkers] = useState<kakao.maps.Marker[]>([]);
  const [myLocation, setMyLocation] = useState<{
    info: { latitude: number; longitude: number } | string;
    marker: any | null;
  }>({ info: "", marker: null });

  console.log(myLocation);

  useEffect(() => {
    KakaoModule.getCurrentLocation(setMyLocation, setMap, setInfowindow);
  }, []);
  useEffect(() => {
    // 초기 위치 정보를 사용하여 initMap 함수 호출
    if (typeof myLocation.info !== "string") {
      KakaoModule.initMap(
        myLocation.info.latitude,
        myLocation.info.longitude,
        setMap,
        setInfowindow,
        myLocation,
        setMyLocation,
      );
    }
  }, [myLocation]);

  useEffect(() => {
    KakaoModule.removeMarker(currentMarkers, setCurrentMarkers);

    const bounds = new window.kakao.maps.LatLngBounds();

    places.forEach((place, index) => {
      const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
      const marker = KakaoModule.addMarker(placePosition, index, place, map);
      const itemEl = KakaoModule.getListItem(index, place);

      // 클릭, 마우스오버, 마우스아웃 이벤트에 대한 리스너 등록
      window.kakao.maps.event.addListener(marker, "click", () => {
        KakaoModule.displayInfowindow(
          marker,
          place.place_name,
          map,
          infowindow,
        );
      });

      window.kakao.maps.event.addListener(marker, "mouseover", () => {
        KakaoModule.displayInfowindow(
          marker,
          place.place_name,
          map,
          infowindow,
        );
        map.panTo(placePosition);
      });

      window.kakao.maps.event.addListener(marker, "mouseout", () => {
        infowindow.close();
      });

      itemEl.onmouseover = () => {
        KakaoModule.displayInfowindow(
          marker,
          place.place_name,
          map,
          infowindow,
        );
      };

      itemEl.onmouseout = () => {
        infowindow.close();
      };

      bounds.extend(placePosition);
    });

    if (map != null) {
      map.setBounds(bounds);
    } else {
      console.error("map 객체가 유효하지 않습니다.");
    }
  }, [places, map, infowindow, currentMarkers]);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  return (
    <KakaoMapWrap>
      <div id="map" />
      <div id="menu-wrap" className="bg-white">
        <div className="option">
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                KakaoModule.searchPlaces(
                  (document.getElementById("keyword") as HTMLInputElement)
                    .value,
                  map,
                  KakaoModule.placesSearchCB,
                );
              }}
            >
              키워드 :
              <input
                type="text"
                value={word}
                id="keyword"
                size={15}
                onChange={handleInputValue}
              />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <ul id="placesList" />
        <div id="pagination" />
      </div>
    </KakaoMapWrap>
  );
};

export default KakaoMap;

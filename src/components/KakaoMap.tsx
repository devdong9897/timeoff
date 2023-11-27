import React, { useEffect, useState } from "react";
import { KakaoMapWrap } from "../styles/KakaoStyle";
import type { propsType } from "../page/TravelMap";
// import * as KakaoMapModule from "./KakaoMapModule";

interface Place {
  place_name: string;
  road_address_name: string;
  address_name: string;
  phone: string;
  place_url: string;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = (props: propsType) => {
  const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);

  useEffect(() => {
    const container = document.getElementById("map") as HTMLElement;
    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 6,
    };
    const map = new kakao.maps.Map(container, options);
    const ps = new kakao.maps.services.Places();
    const infoWindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    const placesSearchCB = (data: any, status: any, pagination: any) => {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출
        displayPlaces(data);

        // 페이지 번호를 표출
        displayPagination(pagination);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
      }
    };

    const searchPlaces = () => {
      const keyword = props.searchKeyword;
      if (keyword.trim().length === 0) {
        return false;
      }
      ps.keywordSearch(keyword, placesSearchCB);
    };

    searchPlaces();

    const displayInfowindow = (marker: any, title: string) => {
      const content =
        '<div style="padding:5px;z-index:1;" class="marker-title">' +
        title +
        "</div>";

      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    };

    const displayPlaces = (places: string | any) => {
      const listEl = document.getElementById("places-list");
      const resultEl = document.getElementById("menu_wrap");
      const fragment = document.createDocumentFragment();
      const bounds = new kakao.maps.LatLngBounds();

      if (listEl != null) {
        removeAllChildNods(listEl);
      }

      removeMarker();

      for (let i = 0; i < places.length; i++) {
        const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
        const marker = addMarker(placePosition, i, undefined);
        const itemEl = getListItem(i, places[i]);

        bounds.extend(placePosition);

        const attachListeners = (
          marker: kakao.maps.event.EventTarget,
          title: string,
        ) => {
          const handleMouseOver = () => {
            displayInfowindow(marker, title);
          };
          const handleMouseOut = () => {
            infoWindow.close();
          };
          kakao.maps.event.addListener(marker, "mouseover", handleMouseOver);
          kakao.maps.event.addListener(marker, "mouseout", handleMouseOut);

          itemEl.addEventListener("mouseover", handleMouseOver);
          itemEl.addEventListener("mouseout", handleMouseOut);
        };

        attachListeners(marker, places[i].place_name);
        fragment.appendChild(itemEl);
      }

      if (listEl != null) {
        listEl.appendChild(fragment);
      }

      if (resultEl != null) {
        resultEl.scrollTop = 0;
      }
      map.setBounds(bounds);
    };

    const getListItem = (index: number, places: Place) => {
      const el = document.createElement("li");
      let itemStr =
        `<span class="markerbg marker_${index + 1}"></span>` +
        '<div class="info">' +
        `   <h5>${places.place_name}</h5>`;

      if (places.road_address_name !== undefined) {
        itemStr +=
          `    <span>${places.road_address_name}</span>` +
          `   <span class="jibun gray">${places.address_name}</span>`;
      } else {
        itemStr += `    <span>${places.address_name}</span>`;
      }

      itemStr += `  <span class="tel">${places.phone}</span>` + "</div>";

      el.innerHTML = itemStr;
      el.className = "item";

      return el;
    };

    const addMarker = (position: any, idx: number, title: undefined) => {
      const imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
      const imageSize = new kakao.maps.Size(36, 37);
      const imgOptions = {
        spriteSize: new kakao.maps.Size(36, 691),
        spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10),
        offset: new kakao.maps.Point(13, 37),
      };
      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imgOptions,
      );
      const marker = new kakao.maps.Marker({
        position,
        image: markerImage,
      });

      marker.setMap(map);
      markers.push(marker);

      return marker;
    };

    const removeMarker = () => {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      setMarkers([]);
    };

    const displayPagination = (pagination: {
      last: number;
      current: number;
      gotoPage: (arg0: number) => void;
    }) => {
      const paginationEl = document.getElementById("pagination") as HTMLElement;
      let i;

      while (paginationEl.hasChildNodes()) {
        if (paginationEl.lastChild != null) {
          paginationEl.removeChild(paginationEl.lastChild);
        }
      }
      const fragment = document.createDocumentFragment();

      for (i = 1; i <= pagination.last; i++) {
        const el = document.createElement("a");
        el.href = "#";
        el.innerHTML = i.toString();

        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    };

    const removeAllChildNods = (el: HTMLElement) => {
      while (el.hasChildNodes()) {
        if (el.lastChild != null) {
          el.removeChild(el.lastChild);
        }
      }
    };
  }, [props.searchKeyword]);

  return (
    <KakaoMapWrap>
      <div id="map" className="map"></div>
      <div id="menu-wrap" className="bg-white">
        <div className="option">
          <div>
            <span id="keyword">{props.searchKeyword}</span>
            
          </div>
        </div>
        <hr />
        <ul id="places-list"></ul>
        <div id="pagination"></div>
      </div>
    </KakaoMapWrap>
  );
};

export default KakaoMap;

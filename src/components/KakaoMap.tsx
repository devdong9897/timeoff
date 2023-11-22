import React, { useEffect, useState } from "react";
import { KakaoMapWrap } from "../styles/KakaoStyle";

interface Place {
  place_name: string;
  road_address_name?: string;
  address_name: string;
  phone: string;
  x: number;
  y: number;
}

interface Pagination {
  last: number;
  current: number;
  gotoPage: (page: number) => void;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap: React.FC = () => {
  const [map, setMap] = useState<any>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [infowindow, setInfowindow] = useState<any>(null);
  const [word, setWord] = useState<string>("");
  const [currentMarkers, setCurrentMarkers] = useState<kakao.maps.Marker[]>([]);
  const [myLocation, setMyLocation] = useState<{
    info: { latitude: number; longitude: number } | string;
    marker: any | null;
  }>({ info: "", marker: null });

  console.log(myLocation);
  console.log(setMap);
  console.log(currentMarkers);
  console.log(setPlaces);

  const initMap = (initialLatitude: number, initialLongitude: number) => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      if (mapContainer != null) {
        const options = {
          center: new window.kakao.maps.LatLng(
            initialLatitude,
            initialLongitude,
          ),
          level: 5,
        };
        const newMap = new window.kakao.maps.Map(mapContainer, options);
        setMap(newMap);
        setInfowindow(new window.kakao.maps.InfoWindow({ zIndex: 1 }));

        // 이전 마커 제거
        if (currentMarkers.length > 0) {
          removeMarker();
        }

        if (typeof myLocation !== "string") {
          if (myLocation.marker !== null) {
            myLocation.marker.setMap(null);
          }

          const currentMarker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(
              initialLatitude,
              initialLongitude,
            ),
          });
          currentMarker.setMap(newMap);
          setMyLocation({ info: myLocation.info, marker: currentMarker });
        }
      }
    });
  };
  useEffect(() => {
    if (navigator.geolocation != null) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setMyLocation({
            info: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            marker: null,
          });
          initMap(position.coords.latitude, position.coords.longitude);
        },
        error => {
          console.error(error);
          window.alert("현재 위치를 알 수 없습니다.");
        },
        { enableHighAccuracy: true },
      );
    } else {
      window.alert("현재 위치를 알 수 없습니다.");
    }
  }, []);

  useEffect(() => {
    if (map != null) {
      removeMarker();

      places.forEach((place, index) => {
        const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
        const marker = addMarker(placePosition, index, place);

        // 클릭, 마우스오버, 마우스아웃 이벤트에 대한 리스너 등록
        window.kakao.maps.event.addListener(marker, "click", () => {
          displayInfowindow(marker, place.place_name);
        });

        window.kakao.maps.event.addListener(marker, "mouseover", () => {
          displayInfowindow(marker, place.place_name);
          map.panTo(placePosition);
        });

        window.kakao.maps.event.addListener(marker, "mouseout", () => {
          infowindow.close();
        });
      });
    }
  }, [places, map]);

  const removeMarker = () => {
    console.log("Removing markers:", currentMarkers);
    currentMarkers.forEach(marker => {
      marker.setMap(null);
    });
    setCurrentMarkers([]);
  };

  const displayPlaces = (places: Place[]) => {
    const bounds = new window.kakao.maps.LatLngBounds();
    removeAllChildNods(document.getElementById("placesList"));
    removeMarker();

    places.forEach((place, index) => {
      const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
      const marker = addMarker(placePosition, index, place);

      const itemEl = getListItem(index, place);
      itemEl.onmouseover = () => {
        displayInfowindow(marker, place.place_name);
      };
      itemEl.onmouseout = () => {
        infowindow.close();
      };

      bounds.extend(placePosition);
    });

    setPlaces(places);

    if (map != null) {
      map.setBounds(bounds);
    } else {
      console.error("map 객체가 유효하지 않습니다.");
    }
  };

  const addMarker = (
    position: kakao.maps.LatLng,
    idx: number,
    place: Place,
  ) => {
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
    const imageSize = new window.kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new window.kakao.maps.Size(36, 691),
      spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10),
      offset: new window.kakao.maps.Point(13, 37),
    };
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imgOptions,
    );

    // 마커 생성 및 지도에 추가
    const marker = new window.kakao.maps.Marker({
      position,
      image: markerImage,
    });

    marker.setMap(map);

    return marker;
  };

  const displayInfowindow = (marker: kakao.maps.Marker, title: string) => {
    try {
      const content = `<div style="padding:5px;z-index:1;">${title}</div>`;
      infowindow.setContent(content);
      infowindow.open(map, marker);
      map.panTo(marker.getPosition());
    } catch (error) {
      console.log(error);
    }
  };

  const searchPlaces = (keyword: string) => {
    if (map != null) {
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(keyword, placesSearchCB);
    } else {
      console.error("map 객체가 유효하지 않습니다.");
    }
  };

  const placesSearchCB = (
    data: kakao.maps.services.PlacesSearchResult,
    status: kakao.maps.services.Status,
    pagination: Pagination,
  ) => {
    if (status === window.kakao.maps.services.Status.OK) {
      const places = data.map(item => ({
        place_name: item.place_name,
        road_address_name: item.road_address_name,
        address_name: item.address_name,
        phone: item.phone,
        x: parseFloat(item.x),
        y: parseFloat(item.y),
      }));
      displayPlaces(places);
      displayPagination(pagination);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
    }
  };

  const displayPagination = (pagination: Pagination) => {
    const paginationEl = document.getElementById("pagination");
    removeAllChildNods(paginationEl);

    for (let i = 1; i <= pagination.last; i++) {
      const el = document.createElement("a");
      el.href = "#";
      el.innerHTML = i.toString();

      if (i === pagination.current) {
        el.className = "on";
      } else {
        el.onclick = () => {
          pagination.gotoPage(i);
        };
      }

      const paginationEl = document.getElementById("pagination");
      if (paginationEl != null) {
        paginationEl.appendChild(el);
      }
    }
  };

  const removeAllChildNods = (el: HTMLElement | null) => {
    while (el?.hasChildNodes() === true) {
      const child = el.lastChild;
      if (child !== null) {
        el.removeChild(child);
      } else {
        break;
      }
    }
  };

  const getListItem = (index: number, place: Place) => {
    const el = document.createElement("li");
    let itemStr =
      `<span class="markerbg marker_${index + 1}"></span>` +
      '<div class="info">' +
      `   <h5>${place.place_name}</h5>`;

    if (place.road_address_name !== undefined) {
      itemStr +=
        `    <span>${place.road_address_name}</span>` +
        `   <span class="jibun gray">${place.address_name}</span>`;
    } else {
      itemStr += `    <span>${place.address_name}</span>`;
    }

    itemStr += `  <span class="tel">${place.phone}</span>` + "</div>";

    el.innerHTML = itemStr;
    el.className = "item";

    const placesList = document.getElementById("placesList");
    if (placesList != null) {
      placesList.appendChild(el);
    }

    return el;
  };

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
                searchPlaces(
                  (document.getElementById("keyword") as HTMLInputElement)
                    .value,
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

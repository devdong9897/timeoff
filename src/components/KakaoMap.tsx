import React, { useEffect, useState } from "react";

interface Place {
  place_name: string;
  road_address_name?: string;
  address_name: string;
  phone: string;
  x: number;
  y: number;
}

interface Marker {
  setMap: (map: any) => void;
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
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [map, setMap] = useState<any>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [infowindow, setInfowindow] = useState<any>(null);
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");
  console.log(places);
  console.log(myLocation);
  console.log(setMap);
  useEffect(() => {
    if (navigator.geolocation != null) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.error("Error getting geolocation:", error);
        },
        { enableHighAccuracy: true },
      );
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
    initMap();
  }, []);

  const initMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      if (mapContainer != null) {
        const options = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3,
        };
        const newMap = new window.kakao.maps.Map(mapContainer, options);
        setMap(newMap);
        setInfowindow(new window.kakao.maps.InfoWindow({ zIndex: 1 }));
      }
    });
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
      // 데이터를 Place[]로 변환
      const places = data.map(item => ({
        place_name: item.place_name,
        road_address_name: item.road_address_name,
        address_name: item.address_name,
        phone: item.phone,
        x: parseFloat(item.x), // 문자열을 숫자로 변환
        y: parseFloat(item.y), // 문자열을 숫자로 변환
      }));
      displayPlaces(places);
      displayPagination(pagination);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
    }
  };

  const displayPlaces = (places: Place[]) => {
    const bounds = new window.kakao.maps.LatLngBounds();
    removeAllChildNods(document.getElementById("placesList"));
    removeMarker();

    places.forEach((place, index) => {
      const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
      const marker = addMarker(placePosition, index);
      const itemEl = getListItem(index, place);

      bounds.extend(placePosition);

      window.kakao.maps.event.addListener(marker, "mouseover", () => {
        displayInfowindow(marker, place.place_name);
      });

      window.kakao.maps.event.addListener(marker, "mouseout", () => {
        infowindow.close();
      });

      itemEl.onmouseover = () => {
        displayInfowindow(marker, place.place_name);
      };

      itemEl.onmouseout = () => {
        infowindow.close();
      };

      setMarkers(prevMarkers => [...prevMarkers, marker]);
    });

    setPlaces(places);

    if (map != null) {
      map.setBounds(bounds);
    } else {
      console.error("map 객체가 유효하지 않습니다.");
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

    return el;
  };

  const addMarker = (position: kakao.maps.LatLng, idx: number) => {
    const marker = new window.kakao.maps.Marker({
      position,
    });

    window.kakao.maps.event.addListener(marker, "click", () => {
      displayInfowindow(marker, places[idx].place_name);
    });

    marker.setMap(map);
    markers.push(marker);
    return marker;
  };

  const removeMarker = () => {
    markers.forEach(marker => {
      marker.setMap(null);
    });
    setMarkers([]);
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

  const displayInfowindow = (marker: Marker, title: string) => {
    const content = `<div style="padding:5px;z-index:1;">${title}</div>`;
    infowindow.setContent(content);
    infowindow.open(map, marker);
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

  return (
    <div className="map_wrap">
      <div
        id="map"
        style={{
          width: "100%",
          height: "700px",
          position: "relative",
          overflow: "hidden",
        }}
      />
      <div id="menu_wrap" className="bg_white">
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
              키워드 :{" "}
              <input
                type="text"
                defaultValue="이태원 맛집"
                id="keyword"
                size={15}
              />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <ul id="placesList" />
        <div id="pagination" />
      </div>
    </div>
  );
};

export default KakaoMap;

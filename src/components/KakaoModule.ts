export interface Place {
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

export const initMap = (
  initialLatitude: number,
  initialLongitude: number,
  setMap: React.Dispatch<React.SetStateAction<any>>,
  setInfowindow: React.Dispatch<React.SetStateAction<any>>,
  myLocation: {
    info: { latitude: number; longitude: number } | string;
    marker: any | null;
  },
  setMyLocation: React.Dispatch<
    React.SetStateAction<{
      info: { latitude: number; longitude: number } | string;
      marker: any | null;
    }>
  >,
): void => {
  if (window.kakao && window.kakao.maps) {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      if (mapContainer != null) {
        const options = {
          center: new kakao.maps.LatLng(initialLatitude, initialLongitude),
          level: 5,
        };
        const newMap = new kakao.maps.Map(mapContainer, options);
        setMap(newMap);
        setInfowindow(new kakao.maps.InfoWindow({ zIndex: 1 }));

        if (typeof myLocation.info !== "string") {
          removeAndAddMarker(
            myLocation.marker,
            { latitude: initialLatitude, longitude: initialLongitude },
            newMap,
            setMyLocation,
          );
        }
      }
    });
  }
};

export const getCurrentLocation = (
  setMyLocation: React.Dispatch<
    React.SetStateAction<{
      info: { latitude: number; longitude: number } | string;
      marker: any | null;
    }>
  >,
  setMap: React.Dispatch<React.SetStateAction<any>>,
  setInfowindow: React.Dispatch<React.SetStateAction<any>>,
): void => {
  if (navigator.geolocation != null) {
    navigator.geolocation.getCurrentPosition(
      position => {
        setMyLocation({
          info: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          marker: null, // 수정
        });
        initMap(
          position.coords.latitude,
          position.coords.longitude,
          setMap,
          setInfowindow,
          {
            info: position.coords,
            marker: null,
          },
          setMyLocation,
        );
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
};

const removeAndAddMarker = (
  marker: any | null,
  position: kakao.maps.LatLng,
  map: any,
  setMyLocation: React.Dispatch<
    React.SetStateAction<{
      info: { latitude: number; longitude: number } | string;
      marker: any | null;
    }>
  >,
) => {
  if (marker !== null) {
    marker.setMap(null);
  }

  const currentMarker = new kakao.maps.Marker({ position });
  currentMarker.setMap(map);
  setMyLocation({
    info: { latitude: position.getLat(), longitude: position.getLng() },
    marker: currentMarker,
  });
};

export const removeMarker = (
  currentMarkers: kakao.maps.Marker[],
  setCurrentMarkers: React.Dispatch<React.SetStateAction<kakao.maps.Marker[]>>,
): void => {
  currentMarkers.forEach(marker => {
    marker.setMap(null);
  });
  setCurrentMarkers([]);
};

export const addMarker = (
  position: kakao.maps.LatLng,
  idx: number,
  place: Place,
  map: any,
): kakao.maps.Marker => {
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

  return marker;
};

export const displayInfowindow = (
  marker: kakao.maps.Marker,
  title: string,
  map: any,
  infowindow: any,
): void => {
  try {
    const content = `<div style="padding:5px;z-index:1;">${title}</div>`;
    infowindow.setContent(content);
    infowindow.open(map, marker);
    map.panTo(marker.getPosition());
  } catch (error) {
    console.log(error);
  }
};

export const searchPlaces = (
  keyword: string,
  map: any,
  placesSearchCB: any,
): void => {
  if (map != null) {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, placesSearchCB);
  } else {
    console.error("map 객체가 유효하지 않습니다.");
  }
};

export const placesSearchCB = (
  data: kakao.maps.services.PlacesSearchResult,
  status: kakao.maps.services.Status,
  pagination: Pagination,
  displayPlaces: (places: Place[]) => void,
  displayPagination: (pagination: Pagination) => void,
): void => {
  if (status === kakao.maps.services.Status.OK) {
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
  } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    alert("검색 결과가 존재하지 않습니다.");
  } else if (status === kakao.maps.services.Status.ERROR) {
    alert("검색 결과 중 오류가 발생했습니다.");
  }
};

export const displayPagination = (
  pagination: Pagination,
  map: any,
  currentMarkers: kakao.maps.Marker[],
  setCurrentMarkers: React.Dispatch<React.SetStateAction<kakao.maps.Marker[]>>,
  removeAllChildNodes: (el: HTMLElement | null) => void,
): void => {
  const paginationEl = document.getElementById("pagination");

  removeAllChildNodes(paginationEl);

  for (let i = 1; i <= pagination.last; i++) {
    const el = document.createElement("a");
    el.href = "#";
    el.innerHTML = i.toString();

    if (i === pagination.current) {
      el.className = "on";
    } else {
      el.onclick = () => {
        pagination.gotoPage(i);
        removeMarker(currentMarkers, setCurrentMarkers);
      };
    }

    if (paginationEl != null) {
      paginationEl.appendChild(el);
    }
  }
};

export const removeAllChildNodes = (el: HTMLElement | null): void => {
  while (el?.hasChildNodes() === true) {
    const child = el.lastChild;
    if (child != null) {
      el.removeChild(child);
    } else {
      break;
    }
  }
};

export const getListItem = (index: number, place: Place): HTMLLIElement => {
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

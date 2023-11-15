import React, { useEffect } from "react";

// const otherLatLngs = [
//   { lat: 37.6859, lng: 126.597865 },
//   { lat: 37.68528, lng: 126.597227 },
//   { lat: 37.685535, lng: 126.599528 },
//   { lat: 37.684234, lng: 126.599292 },
// ];

const NaverMap = () => {
  // const { naver } = window;
  //   const [myLocation, setMyLocation] = useState<
  //     { latitude: number; longitude: number } | string
  //   >("");

  useEffect(() => {
    // const mapOptions = {
    //   center: new naver.maps.LatLng(37.3595704, 127.105399),
    //   zoom: 10,
    // };

    // new naver.maps.Map("map", mapOptions);
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default NaverMap;

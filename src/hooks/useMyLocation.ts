import { useEffect, useState } from "react";

export const useMyLocation = () => {
  const [location, setLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");
  useEffect(() => {
    if (navigator.geolocation != null) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          setLocation({
            latitude: 37.483034,
            longitude: 126.902435,
          });
          console.error(location, error.message);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: Infinity,
        },
      );
    } else {
      setLocation("위치 정보를 찾을 수 없습니다.");
    }
  }, []);

  return location;
};

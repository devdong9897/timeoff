import ThemeList from "../components/theme/ThemeList";
import ThemeMap from "../components/theme/ThemeMap";
import ThemeTitle from "../components/theme/ThemeTitle";
import { ThemeContainerWidths } from "../../src/styles/ThemeTitleStyle";
import { useState } from "react";
import mapData from "../api/mapData.json";

const Theme = () => {
  // 배경화면 클릭시 지역 선택 해제
  // 지역선택 후 한번 더 선택시 지역이 해제 될 때 list에 랜덤으로....
  const [mapNumber, setMapNumber] = useState<number>(0);

  console.log(mapData.recotrip);
  return (
    <>
      <ThemeTitle />
      <ThemeContainerWidths>
        <ThemeMap setMapNumber={setMapNumber} />
        <ThemeList mapNumber={mapNumber} />
      </ThemeContainerWidths>
    </>
  );
};

export default Theme;

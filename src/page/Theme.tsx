import ThemeList from "../components/theme/ThemeList";
import ThemeMap from "../components/theme/ThemeMap";
import ThemeTitle from "../components/theme/ThemeTitle";
import { ThemeContainerWidths } from "../../src/styles/ThemeTitleStyle";
import { useState } from "react";
import mapData from "../api/mapData.json";

const Theme = () => {
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

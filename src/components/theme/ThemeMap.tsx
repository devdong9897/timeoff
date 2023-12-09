import React, { useState } from "react";
import { ThemeMapContainer } from "../../styles/ThemeMapStyle";
import mapData from "../../api/mapData.json";

interface ThemeMapProps {
  setMapNumber: React.Dispatch<React.SetStateAction<number>>;
}

interface styleType {
  id: string;
  hfil: string;
}

const ThemeMap: React.FC<ThemeMapProps> = ({ setMapNumber }) => {
  const mapDatas = mapData.location;
  const [eobject, setObject] = useState<styleType | null>({ id: "", hfil: "" });
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number, id: string, hfil: string) => {
    setMapNumber(index);
    setClickedIndex(index);
    const data = {
      id,
      hfil,
    };
    setObject(data);
  };

  const handleHover = (id: string, hfil: string) => {
    if (clickedIndex === null) {
      const data = {
        id,
        hfil,
      };
      setObject(data);
    }
  };

  return (
    <ThemeMapContainer id={eobject?.id} uu={eobject?.hfil}>
      <h1>지역을 클릭하여 지역축제를 확인해보세요</h1>
      {/* 클릭시 삼항연산자, 값과 타입이 정확히 일치하는지 확인하고, 변경 사항이 있는 경우에만 리렌더링 하기 때문에 !== 사용 */}
      {/* 클릭된 지역이 있을 경우에 clicked클래스추가 아닐 경우 빈문자열 호롤롤로 */}
      <div className={`map-box ${clickedIndex !== null ? "clicked" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 524 631"
          aria-label="Map of South Korea"
          fill="#969696"
        >
          {mapDatas?.map((item, index) => (
            <g
              key={index}
              onClick={() => {
                handleClick(index, item.id, item.hfil);
              }}
              onMouseEnter={() => {
                handleHover(item.id, item.hfil);
              }}
            >
              <path id={item.id} name={item.name} d={item.d} />
              <text
                x={item.x}
                y={item.y}
                fill={item.fill}
                fontSize={item.fontSize}
                fontWeight={item.fontWeight}
                cursor={item.cursor}
              >
                {item.title}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </ThemeMapContainer>
  );
};

export default ThemeMap;

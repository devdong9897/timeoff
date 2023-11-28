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
  };
  const handleStyleClick = (id: string, hfil: string) => {
    console.log(hfil);
    const data = {
      id: id,
      hfil: hfil,
    };
    setObject(data);
  };
  return (
    <ThemeMapContainer id={eobject?.id} uu={eobject?.hfil}>
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
                handleStyleClick(item.id, item.hfil);
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

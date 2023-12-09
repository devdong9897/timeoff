import React, { useState } from "react";
import { ThemeMapContainer } from "../../styles/ThemeMapStyle";
import mapData from "../../api/mapData.json";

interface ThemeMapProps {
  setMapNumber: React.Dispatch<React.SetStateAction<number>>;
}

interface MapItem {
  id: string;
  name: string;
  d: string;
  x: string;
  y: string;
  fill: string;
  hfil: string;
  fontSize: string;
  fontWeight: string;
  cursor: string;
  title: string;
}

const ThemeMap: React.FC<ThemeMapProps> = ({ setMapNumber }) => {
  const mapDatas: MapItem[] = mapData.location;
  const [eobject, setObject] = useState<MapItem | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number, item: MapItem) => {
    setMapNumber(index);
    setClickedIndex(prev => (prev === index ? null : index));
    setHoveredIndex(null);

    setObject({
      ...item,
      fill: item.hfil, 
    });
  };

  const handleHover = (index: number, item: MapItem) => {
    if (clickedIndex !== null) {
      if (index !== clickedIndex) {
        setObject(item);
      }
    } else {
      setHoveredIndex(index);
      setObject(item);
    }
  };

  const handleMouseLeave = () => {
    if (clickedIndex === null) {
      setObject(null);
      setHoveredIndex(null);
    }
  };

  return (
    <ThemeMapContainer
      id={eobject?.id}
      uu={eobject?.hfil}
      onMouseLeave={handleMouseLeave}
    >
      <h1>지역을 클릭하여 지역축제를 확인해보세요</h1>
      <div className={`map-box ${clickedIndex !== null ? "clicked" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 524 631"
          aria-label="대한민국 지도"
          fill="#969696"
        >
          {mapDatas?.map((item, index) => (
            <g
              key={index}
              onClick={() => {
                handleClick(index, item);
              }}
              onMouseEnter={() => {
                handleHover(index, item);
              }}
              onMouseLeave={() => {
                setObject(null);
                setHoveredIndex(null);
              }}
            >
              <path
                id={item.id}
                name={item.name}
                d={item.d}
                fill={
                  clickedIndex === index
                    ? item.hfil
                    : hoveredIndex === index
                    ? item.hfil
                    : "#333"
                }
              />
              <text
                x={item.x}
                y={item.y}
                fill="#fff" 
                fontSize={item.fontSize}
                fontWeight={item.fontWeight}
                cursor={item.cursor}
                className={clickedIndex === index ? "clicked-text" : ""}
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
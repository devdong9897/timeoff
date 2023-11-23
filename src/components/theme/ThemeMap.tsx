import { ThemeMapContainer } from "../../styles/ThemeMapStyle";
import mapData from "../../api/mapData.json";

// interface mapType {
//   id: string;
//   name: string;
//   d: string;
//   x: string;
//   y: string;
//   fill: string;
//   fontSize: string;
//   fontWeight: string;
//   cursor: string;ss
//   title: string;
// }
interface setStationType {
  setMapNumber: React.Dispatch<React.SetStateAction<number>>;
}

const ThemeMap = ({ setMapNumber }: setStationType) => {
  console.log(setMapNumber);

  const mapDatas = mapData.location;
  console.log(mapData.location);

  const handleClick = (index: number) => {
    console.log(index);
    setMapNumber(index);
    console.log(mapData.recotrip[index]);
  };

  return (
    <ThemeMapContainer>
      <div className="map-box">
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
                handleClick(index);
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

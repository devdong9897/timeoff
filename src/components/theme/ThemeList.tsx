import React, { useEffect } from "react";
import {
  ThemeListContainer,
  CardContainer,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "../../styles/ThemeListStyle";
// import type { ThemeItem } from "../../api/themeFetch";
import mapData from "../../api/mapData.json";

interface ThemeListProps {
  mapNumber: number;
}

const ThemeList: React.FC<ThemeListProps> = ({ mapNumber }) => {
  const selectedData = mapData.recotrip[mapNumber];

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const result: ThemeItem[] = await getThemeList();
    //     console.log(result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <ThemeListContainer>
      {Array.isArray(selectedData) && selectedData.length > 0 && (
        <h1>2023년 테마 추천여행지</h1>
      )}
      <CardContainer>
        {Array.isArray(selectedData) && selectedData.length > 0 ? (
          selectedData.map(item => (
            <Card
              key={item.uid}
              onClick={() => window.open(item.link, "_blank")}
            >
              <img src={item.img} alt={item.title} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="explanation">
            추천여행 정보가 없습니다. <br />
            다른 지역을 선택해주세요.
          </p>
        )}
      </CardContainer>
    </ThemeListContainer>
  );
};

export default ThemeList;

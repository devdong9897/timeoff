// ThemeList 컴포넌트

import React from "react";
import {
  ThemeListContainer,
  CardContainer,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "../../styles/ThemeListStyle";
import mapData from "../../api/mapData.json";

interface ThemeListProps {
  mapNumber: number;
}

const ThemeList: React.FC<ThemeListProps> = ({ mapNumber }) => {
  const selectedData = mapData.recotrip[mapNumber];

  return (
    <ThemeListContainer>
      {Array.isArray(selectedData) && selectedData.length > 0 && (
        <h1>2023년 테마 추천여행지</h1>
      )}
      <CardContainer>
        {/* selectedData가 배열이고 요소가 하나 이상 있으면 데이터 출력  */}
        {Array.isArray(selectedData) && selectedData.length > 0 ? (
          selectedData.map(item => (
            <Card key={item.uid}>
              <img src={item.img} alt={item.title} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>
            추천여행 정보가 없습니다. <br />
            다른 지역을 선택해주세요.
          </p>
        )}
      </CardContainer>
    </ThemeListContainer>
  );
};

export default ThemeList;

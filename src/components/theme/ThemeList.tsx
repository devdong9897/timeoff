import React from "react";
import { ThemeListContainer, Card } from "../../styles/ThemeListStyle";

interface Data {
  uid: number;
  title: string;
  img: string;
}

const data: Data[] = [
  {
    uid: 1,
    title: "첫 번째 항목",
    img: "이미지_1.jpg",
  },
  {
    uid: 2,
    title: "두 번째 항목",
    img: "이미지_2.jpg",
  },
  {
    uid: 3,
    title: "세 번째 항목",
    img: "이미지_3.jpg",
  },
  {
    uid: 4,
    title: "네 번째 항목",
    img: "이미지_4.jpg",
  },
];

const ThemeList = () => {
  return (
    <ThemeListContainer>
      {data.map(item => (
        <Card key={item.uid}>
          <img src={item.img} alt={item.title} />
          <h2>{item.title}</h2>
        </Card>
      ))}
    </ThemeListContainer>
  );
};

export default ThemeList;

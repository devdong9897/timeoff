import React from "react";
import { TlogPostWrap } from "../../styles/TlogPostStyle";

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
    img: "이미지_1.jpg",
  },
  {
    uid: 5,
    title: "다섯 번째 항목",
    img: "이미지_2.jpg",
  },
  {
    uid: 6,
    title: "여섯 번째 항목",
    img: "이미지_3.jpg",
  },
  {
    uid: 7,
    title: "일곱 번째 항목",
    img: "이미지_1.jpg",
  },
  {
    uid: 8,
    title: "여덟 번째 항목",
    img: "이미지_2.jpg",
  },
  {
    uid: 9,
    title: "아홉 번째 항목",
    img: "이미지_3.jpg",
  },
  {
    uid: 10,
    title: "열 번째 항목",
    img: "이미지_1.jpg",
  },
  {
    uid: 11,
    title: "열한 번째 항목",
    img: "이미지_2.jpg",
  },
  {
    uid: 12,
    title: "열두 번째 항목",
    img: "이미지_3.jpg",
  },
  {
    uid: 13,
    title: "열세 번째 항목",
    img: "이미지_1.jpg",
  },
  {
    uid: 14,
    title: "열네 번째 항목",
    img: "이미지_2.jpg",
  },
  {
    uid: 15,
    title: "열다섯 번째 항목",
    img: "이미지_3.jpg",
  },
  {
    uid: 16,
    title: "열여섯 번째 항목",
    img: "이미지_1.jpg",
  },
  {
    uid: 17,
    title: "열일곱 번째 항목",
    img: "이미지_2.jpg",
  },
  {
    uid: 18,
    title: "열여덟 번째 항목",
    img: "이미지_3.jpg",
  },
  {
    uid: 19,
    title: "열아홉 번째 항목",
    img: "이미지_1.jpg",
  },
  {
    uid: 20,
    title: "스물 번째 항목",
    img: "이미지_2.jpg",
  },
  {
    uid: 21,
    title: "스물한 번째 항목",
    img: "이미지_3.jpg",
  },
  {
    uid: 22,
    title: "스물둘 번째 항목",
    img: "이미지_1.jpg",
  },
  {
    uid: 23,
    title: "스물세 번째 항목",
    img: "이미지_2.jpg",
  },
  {
    uid: 24,
    title: "스물네 번째 항목",
    img: "이미지_3.jpg",
  },
  {
    uid: 25,
    title: "스물다섯 번째 항목",
    img: "이미지_1.jpg",
  },
  {
    uid: 26,
    title: "스물여섯 번째 항목",
    img: "이미지_2.jpg",
  },
  {
    uid: 27,
    title: "스물일곱 번째 항목",
    img: "이미지_3.jpg",
  },
  {
    uid: 28,
    title: "스물여덟 번째 항목",
    img: "이미지_3.jpg",
  },
  {
    uid: 29,
    title: "스물아홉 번째 항목",
    img: "이미지_3.jpg",
  },
  {
    uid: 30,
    title: "서른 번째 항목",
    img: "이미지_3.jpg",
  },
];

const TlogPost = () => {
  const itemPer = 4;

  const dataGroup = [];

  for (let i = 0; i < data.length; i += itemPer) {
    dataGroup.push(data.slice(i, i + itemPer));
  }
  console.log(dataGroup);
  return (
    <TlogPostWrap>
      {dataGroup.map((group, index) => (
        <div key={index}>
          {group.map(item => (
            <ul key={item.uid}>
              <li>
                {item.img !== "" ? (
                  <img src={item.img} alt="" />
                ) : (
                  <span>&nbsp;</span>
                )}
              </li>
              <li>
                {item.title !== "" ? (
                  <span>{item.title}</span>
                ) : (
                  <span>&nbsp;</span>
                )}
              </li>
            </ul>
          ))}
        </div>
      ))}
    </TlogPostWrap>
  );
};

export default TlogPost;

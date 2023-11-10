import React, { useState } from "react";
import { Rec } from "../styles/RecItemStyle";

interface slideData {
  pid: number;
  title: string;
  img: string;
}

const RecItem: React.FC = () => {
  const datas: slideData[] = [
    {
      pid: 1,
      title: "테스트테스트 여기로 저기로 어디로 갈까 여행계획은 타임오프에서",
      img: "https://as2.ftcdn.net/v2/jpg/03/15/31/21/1000_F_315312184_9vpQ3Uy77rjO0oPVstrFOnKNKPEIFEfF.jpg",
    },
    {
      pid: 2,
      title: "테스트테스트 여기로 저기로 어디로 갈까 여행계획은  타임오프에서",
      img: "https://as2.ftcdn.net/v2/jpg/03/15/31/21/1000_F_315312184_9vpQ3Uy77rjO0oPVstrFOnKNKPEIFEfF.jpg",
    },
    {
      pid: 3,
      title: "테스트테스트 여기로 저기로 어디로 갈까 여행계획은 타임오프에서",
      img: "https://as2.ftcdn.net/v2/jpg/03/15/31/21/1000_F_315312184_9vpQ3Uy77rjO0oPVstrFOnKNKPEIFEfF.jpg",
    },
    {
      pid: 4,
      title: "테스트테스트 여기로 저기로 어디로 갈까 여행계획은 타임오프에서",
      img: "https://as2.ftcdn.net/v2/jpg/04/86/03/81/1000_F_486038198_MSJ3sSQDlEGE7IcALQJGHoSxA9hyPaHq.jpg",
    },
    {
      pid: 5,
      title: "테스트테스트 여기로 저기로 어디로 갈까?",
      img: "https://as2.ftcdn.net/v2/jpg/04/86/03/81/1000_F_486038198_MSJ3sSQDlEGE7IcALQJGHoSxA9hyPaHq.jpg",
    },
    {
      pid: 6,
      title: "테스트테스트 여기로 저기로 어디로 갈까?",
      img: "https://as1.ftcdn.net/v2/jpg/02/83/03/50/1000_F_283035072_inafEXEfDrL8zwDTYsZgkO0v67yLU1Q3.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % datas.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + datas.length) % datas.length);
  };

  return (
    <Rec>
      <img
        src={datas[currentSlide].img}
        alt={datas[currentSlide].title}
      />
      <button onClick={prevSlide}>이전</button>
      <button onClick={nextSlide}>다음</button>
    </Rec>
  );
};

export default RecItem;

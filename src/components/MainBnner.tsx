
import React, { useState } from "react";
import { Bnner } from "../styles/MainBnnerStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface MainSlide {
  pk: number;
  title: string;
  img: string;
  backgroundColor: string;
  link: string;
}

const mainData: MainSlide[] = [
  {
    pk: 1,
    title: "1번 슬라이드 테스트",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    backgroundColor: "rgb(239, 73, 73)",
    link: "/tlog",
  },
  {
    pk: 2,
    title: "2번 슬라이드 테스트",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    backgroundColor: "#ff6a2f",
    link: "/tlog",
  },
  {
    pk: 3,
    title: "3번 슬라이드 테스트",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    backgroundColor: "#d2d53c",
    link: "/tlog",
  },
  {
    pk: 4,
    title: "걸어서 말고 차타고 테마 여행",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    backgroundColor: "#48d02a",
    link: "/tlog",
  },
  {
    pk: 5,
    title: "5번 슬라이드 테스트 이건??????????????????",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    backgroundColor: "#2841b1",
    link: "/tlog",
  },
];

const MainBnner: React.FC = () => {
  const totalSlide = mainData.length;
  const [currentSlide, setCurrentSlide] = useState(0);


  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlide - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1 >= totalSlide ? 0 : currentSlide + 1);
  };

 

  return (
    <Bnner>
      <div className="main-slide">
        {mainData?.map((data, index) => (
          <div
            className="main-top"
            key={index}
            style={{
              display: index === currentSlide ? "flex" : "none",
              backgroundColor: data.backgroundColor,
            }}
          >
            <ul>
              <li>
                <img className="top-img" src={data.img} alt={data.title} />
              </li>
              <li className="top-info">
                <span>{data.title}</span>
              </li>
              <li className="top-detail">
                <a href={data.link} target="" rel="">
                  자세히 보기
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="main-section">
        {/* <div className="progress-bar"></div> */}
        <div className="current-slide">
          {currentSlide + 1} /{mainData.length}
        </div>
        <button onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} /> 
        </button>
        <button onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
      
        </button>
      </div>
    </Bnner>
  );
};

export default MainBnner;

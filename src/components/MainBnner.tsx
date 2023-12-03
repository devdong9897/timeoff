import React, { useState, useEffect } from "react";
import { Bnner } from "../styles/MainBnnerStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPause,
  faPlay,
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
    title: "연말을 더 설레게 하는 감성 여행지 특집🎄",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    backgroundColor: "rgb(161, 243, 141)",
    link: "/tlog",
  },
  {
    pk: 2,
    title: "마음의 온도를 높이는 겨울 여행지 추천🎅",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    backgroundColor: "#edaf97",
    link: "/tlog",
  },
  {
    pk: 3,
    title: "미리보는 완벽한 겨울 낭만 여행지",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    backgroundColor: "#8ed0db",
    link: "/tlog",
  },
  {
    pk: 4,
    title: "늦가을 바람 따라 떠나는 정선 드라이브",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    backgroundColor: "#92d583",
    link: "/tlog",
  },
  {
    pk: 5,
    title: "한국관광 홍보영상 속 촬영지로 떠나는 여행!",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    backgroundColor: "#d0e081",
    link: "/tlog",
  },
];

const MainBnner: React.FC = () => {
  const totalSlide = mainData.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 4000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide, isPlaying]);

  const prevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? totalSlide - 1 : prevSlide - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide + 1 >= totalSlide ? 0 : prevSlide + 1,
    );
  };

  const togglePlay = () => {
    setIsPlaying(prevState => !prevState);
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
              <li className="main-section">
                <div className="progress-bar">
                  <div className="current-slide">
                    {currentSlide + 1} / {totalSlide}
                  </div>
                  <button onClick={togglePlay}>
                    {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                  </button>
                </div>
                <button className="prev-bt" onClick={prevSlide} >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="next-bt"onClick={nextSlide}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </Bnner>
  );
};

export default MainBnner;

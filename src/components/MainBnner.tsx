import React, { useState, useEffect, useRef } from "react";
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
  // backgroundColor: string;
  link: string;
}

const MainBnner: React.FC = () => {
  const mainData: MainSlide[] = [
    {
      pk: 1,
      title: "1번 슬라이드 테스트",
      img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
      // backgroundColor: "#f0f0f0",
      link: "/tlog",
    },
    {
      pk: 2,
      title: "2번 슬라이드 테스트",
      img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
      // backgroundColor: "#e0e0e0",
      link: "/tlog",
    },
    {
      pk: 3,
      title: "3번 슬라이드 테스트",
      img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
      // backgroundColor: "#d0d0d0",
      link: "/tlog",
    },
    {
      pk: 4,
      title: "걸어서 말고 차타고 테마 여행",
      img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
      // backgroundColor: "#c0c0c0",
      link: "/tlog",
    },
    {
      pk: 5,
      title: "5번 슬라이드 테스트",
      img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
      // backgroundColor: "#b0b0b0",
      link: "/tlog",
    },
  ];

  const totalSlide = mainData.length - 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<any>(null);

  const prevSlide = () => {
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 1.0s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Bnner>
      <div className="main-slide">
        {mainData.map((data, index) => (
          <div
            className="main-top"
            ref={slideRef}
            key={index}
            style={{ display: index === currentSlide ? "block" : "none" }}
          >
            <ul>
              <li>
                <img className="top-img" src={data.img} alt={data.title} />
              </li>
              <li className="top-info">
                <span>{data.title}</span>
              </li>
              <li className="top-detail">
                <a href={data.link} target="_blank" rel="noopener noreferrer">
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
          <FontAwesomeIcon icon={faChevronLeft} /> 이전
        </button>
        <button onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
          다음
        </button>
      </div>
    </Bnner>
  );
};

export default MainBnner;

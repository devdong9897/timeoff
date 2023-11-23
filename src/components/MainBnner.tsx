import React, { useState, useEffect } from "react";
import { Bnner } from "../styles/MainBnnerStyle";

interface MainSlide {
  pk: number;
  title: string;
  img: string;
  backgroundColor: string;
  link: string;
}

const MainBnner: React.FC = () => {
  const mainData: MainSlide[] = [
    {
      pk: 1,
      title: "1번 슬라이드 테스트",
      img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
      backgroundColor: "#f0f0f0",
      link: "https://www.naver.com",
    },
    {
      pk: 2,
      title: "2번 슬라이드 테스트",
      img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
      backgroundColor: "#e0e0e0",
      link: "https://www.naver.com",
    },
    {
      pk: 3,
      title: "3번 슬라이드 테스트",
      img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
      backgroundColor: "#d0d0d0",
      link: "https://www.naver.com",
    },
    {
      pk: 4,
      title: "걸어서 말고 차타고 테마 여행",
      img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
      backgroundColor: "#c0c0c0",
      link: "https://www.naver.com",
    },
    {
      pk: 5,
      title: "5번 슬라이드 테스트",
      img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
      backgroundColor: "#b0b0b0",
      link: "https://www.naver.com",
    },
  ];

  const [mainPage, setMainPage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);

  const toPrev = () => {
    setMainPage(prev => (prev - 1 + mainData.length) % mainData.length);
  };

  const toNext = () => {
    setMainPage(prev => (prev + 1) % mainData.length);
  };

  const toggleAutoplay = () => {
    setAutoplay(prev => !prev);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const handleAutoplay = () => {
      if (autoplay) {
        toNext();
        intervalId = setTimeout(handleAutoplay, 4000);
      }
    };

    if (autoplay) {
      intervalId = setTimeout(handleAutoplay, 4000);
    }

    return () => {
      clearTimeout(intervalId);
    };
  }, [autoplay, mainPage]);

  useEffect(() => {
    setProgress(0);
    const intervalId = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 40);

    const nextSlideIntervalId = setInterval(() => {
      toNext();
    }, 4000);

    return () => {
      clearInterval(intervalId);
      clearInterval(nextSlideIntervalId);
    };
  }, [mainPage]);

  useEffect(() => {
    if (progress === 100) {
      setProgress(0);
    }
  }, [progress]);

  return (
    <Bnner>
      <div className="main-top">
        {mainData.map((data, index) => (
          <ul
            key={data.pk}
            className={index === mainPage ? "active" : ""}
            style={{ backgroundColor: data.backgroundColor }}
          >
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
        ))}
      </div>
      <div className="main-section">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <button onClick={toPrev}>이전</button>
        <button onClick={toggleAutoplay}>
          {autoplay ? "일시 정지" : "자동 재생"}
        </button>
        <button onClick={toNext}>다음</button>
      </div>
    </Bnner>
  );
};

export default MainBnner;

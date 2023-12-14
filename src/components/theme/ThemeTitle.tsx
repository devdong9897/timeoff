import React from "react";
import { ThemeContainer } from "../../styles/ThemeTitleStyle";

// 테마이미지 타이틀
const ThemeTitle = () => {
  return (
    <ThemeContainer>
      <div>
        <h1>이런 테마여행 어떠세요?</h1>
      </div>
      <div className="theme-box-container">
        <div className="theme-box attraction">
          <p>명소</p>
        </div>
        <div className="theme-box food">
          <p>맛집</p>
        </div> 
        <div className="theme-box camping">
          <p>캠핑</p>
        </div>
        <div className="theme-box festival">
          <p>축제</p>
        </div>
        <div className="theme-box festival">
          <p>지역축제</p>
        </div>
      </div>
    </ThemeContainer>
  );
};

export default ThemeTitle;

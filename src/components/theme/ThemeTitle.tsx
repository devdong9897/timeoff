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
        <div className="theme-box healing">
          <p>명소</p>
        </div>
        <div className="theme-box sea">
          <p>먹방</p>
        </div>
        <div className="theme-box life-shot">
          <p>인생</p>
        </div>
        <div className="theme-box festival">
          <p>축제</p>
        </div>
        <div className="theme-box festival">
          <p>축제</p>
        </div>
      </div>
    </ThemeContainer>
  );
};

export default ThemeTitle;

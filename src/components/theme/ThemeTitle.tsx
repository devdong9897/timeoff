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
        <div className="theme-box">
          <p>힐링</p>
        </div>
        <div className="theme-box">
          <p>바다</p>
        </div>
        <div className="theme-box">
          <p>인생샷</p>
        </div>
        <div className="theme-box">
          <p>축제</p>
        </div>
      </div>
    </ThemeContainer>
  );
};

export default ThemeTitle;

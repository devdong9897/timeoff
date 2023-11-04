import React from "react";
import { ThemeTitle, ThemeBox, ThemeBoxContainer } from "../styles/ThemeStyle";

const Theme = () => {
  return (
    <>
      <ThemeTitle>
        <h1>이런 테마여행 어떠세요?</h1>
      </ThemeTitle>
      <ThemeBoxContainer>
        <ThemeBox />
        <ThemeBox />
        <ThemeBox />
        <ThemeBox />
      </ThemeBoxContainer>
    </>
  );
};

export default Theme;

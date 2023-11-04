import React from "react";
import { TlogTitleWrap } from "../../styles/TlogTitleStyle";

const TlogTitle = () => {
  const handleregion = () => {
    console.log("안녕");
  };

  return (
    <TlogTitleWrap>
      <div>
        <h2>Travle Log</h2>
      </div>
      <div className="region-buttons">
        <button onClick={handleregion}>전체</button>
        <button onClick={handleregion}>서울</button>
        <button onClick={handleregion}>경기</button>
        <button onClick={handleregion}>인천</button>
        <button onClick={handleregion}>부산</button>
        <button onClick={handleregion}>대구</button>
        <button onClick={handleregion}>대전</button>
        <button onClick={handleregion}>광주</button>
        <button onClick={handleregion}>울산</button>
        <button onClick={handleregion}>강원</button>
        <button onClick={handleregion}>경북</button>
        <button onClick={handleregion}>경남</button>
        <button onClick={handleregion}>전북</button>
        <button onClick={handleregion}>전남</button>
        <button onClick={handleregion}>충북</button>
        <button onClick={handleregion}>충남</button>
        <button onClick={handleregion}>제주</button>
      </div>
      <div className="theme-buttons">
        <span>#힐링</span>
        <span>#익사이팅</span>
        <span>#축제</span>
        <span>#등산</span>
        <span>#크루즈</span>
      </div>
    </TlogTitleWrap>
  );
};

export default TlogTitle;

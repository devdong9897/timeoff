import React from "react";
import { Bnner } from "../styles/MainBnnerStyle";

const MainBnner = () => {
  return (
    <Bnner>
      main<div className="BnnerImg">BnnerImg</div>
      <h4>
        이것은 이미지 설명글. <br />
        메인 슬라이드 설명글입니다.
        <br />
        메인 슬라이드 설명글입니다.
        <span>자세히 보기</span>
      </h4>
      <div className="BnnerBt">슬라이드 버튼</div>
    </Bnner>
  );
};

export default MainBnner;

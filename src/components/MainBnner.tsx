import React from "react";
import { Bnner } from "../styles/MainBnnerStyle";

const MainBnner = () => {
  return (
    <Bnner>
      <div className="mainTop">
        <ul>
          <li className="topImg">
            <img src="" alt="" />
          </li>
          <li className="topInfo">
            <span>걸어서 말고 차타고 테마 여행</span>
          </li>
          <li className="topDetail">
            <span>자세히 보기</span>
          </li>
        </ul>
      </div>
      <div className="mainSection">
        <div className="mainBt"></div>
      </div>
    </Bnner>
  );
};

export default MainBnner;

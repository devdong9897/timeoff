import React from "react";
import Myprofile from "../components/mypage/Myprofile";
import Mymenu from "../components/mypage/Mymenu";
import { MypageWrap } from "../styles/MypageStyle";

const MyPage = () => {
  return (
    <MypageWrap>
      <h2>마이페이지</h2>
      <div className="mypage-container">
        <Myprofile />
        <Mymenu />
      </div>
    </MypageWrap>
  );
};

export default MyPage;

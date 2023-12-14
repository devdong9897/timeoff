import React from "react";
import Myprofile from "../components/mypage/Myprofile";
import Mymenu from "../components/mypage/Mymenu";
import { MypageWrap } from "../styles/MypageStyle";

const MyPage = () => {
  return (
    <MypageWrap>
      마이페이지
      <div className="mypage-container">
        <Myprofile />
        <Mymenu />
      </div>
    </MypageWrap>
  );
};

export default MyPage;

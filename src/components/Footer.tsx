import React from "react";
import { FooterWrap } from "../styles/FooterStyle";

const Footer = () => {
  return (
    <FooterWrap>
      <ul className="footer-top">
        <li>개인정보처리방침</li>
        <li>이용약관</li>
        <li>저작권정책</li>
        <li>고객센터</li>
        <li>찾아오시는 길</li>
      </ul>
      <ul className="footer-bt">
        <li>TEL: 053-123-4567</li>
        <li>상호: 타임오프</li>
        <li>대표: 김수한무</li>
        <li>우)123456</li>
        <li>대구시 중구 중앙대로 394 제일빌딩 5F</li>
        <li>개인정보관리 책임자: 남동욱</li>
        <li>사업자등록번호: 222-11-12345</li>
        <li>통신판매업신고 : 제0000-대구중구-1234호</li>
      </ul>
    </FooterWrap>
  );
};

export default Footer;

import React from "react";
import { FooterWrap } from "../styles/FooterStyle";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/tlog" || location.pathname === "/write")
    return null;

  return (
    <>
      <FooterWrap>
        <ul>
          <li>기성</li>
          <li>민용</li>
          <li>다혜</li>
          <li>동욱</li>
        </ul>
      </FooterWrap>
    </>
  );
};

export default Footer;

import styled from "@emotion/styled";

export const FooterWrap = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  background: #006dab;
  border-color: none;
  border-top: 0.05rem solid #006dab;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    li {
      text-align: center;
      width: 20px;
      height: 45px;
      line-height: 45px;
      font-size: 20px;
      background: 0;
      color: #fff;
      cursor: pointer;
    }
  }
`;

import styled from "@emotion/styled";

export const FooterWrap = styled.footer`
  max-width: 70%;
  height: 100%;
  background: #006dab;
  margin: 0 auto;
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

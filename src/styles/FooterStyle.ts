import styled from "@emotion/styled";

export const FooterWrap = styled.footer`
  max-width: 100%;
  height: 100%;
  border-top: 1px solid #e6e6e6;
  background: #f0f0f0;
  margin: 0 auto;
  .footer-top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    width: 100%;
    height: 70px;
    > li {
      color: #666;
      cursor: pointer;
    }
  }
  .footer-bt {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    > li {
      color: #666;
    }
  }
`;

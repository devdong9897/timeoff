import styled from "@emotion/styled";

interface HeaderWrapProps {
  clickSearch: boolean;
}

export const HeaderWrap = styled.header<HeaderWrapProps>`
  width: 100%;
  ${({ clickSearch }) =>
    clickSearch
      ? `
      .dim{
      position: absolute;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(2px);
      z-index: 50;
      }
      .header-inner {
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
        height: 70%;
        background: #fff;
        padding-top: 1rem;
        overflow: hidden;
        .header-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 15% 0 15%;
          li:last-of-type {
            cursor: pointer;
          }
        }
        .header-body {
          display: flex;
          justify-content: center;
          width: 100%;
          padding-top: 2%;
          ul {
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            li:nth-of-type(2) {
              height: 220px;
            }
            li:nth-of-type(3) {
              height: 220px;
            }
          }
        }
      }
      `
      : `
  .header-inner {
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6rem;
    .main-category {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 105px;
      .nav-link {
        li {
          width: 100%;
          height: 45px;
          line-height: 45px;
          font-size: 20px;
          background: 0;
          color: #000;
          cursor: pointer;
          :hover {
            color: #006dab;
          }
        }
      }
      .nav-link-active {
        li {
          width: 100%;
          height: 45px;
          line-height: 45px;
          font-size: 20px;
          background: 0;
          color: #006dab;
          cursor: pointer;
        }
      }
    }
    .etc-category {
      display: flex;
      align-items: center;
      padding-left: 4%;
      gap: 20px;
      width: 100%;
      li {
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    &.header-inner-change {
      background: #fff;
      box-shadow: 0px 1px 10px 0px rgba(51, 51, 51, 0.2);
    }
  }`}
`;

export const Spacer = styled.div`
  height: 6rem;
`;

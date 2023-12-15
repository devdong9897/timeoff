import styled from "@emotion/styled";

export const HeaderWrap = styled.header`
  .header-inner {
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6rem;
    > div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 68px;
      height: 60px;
      cursor: pointer;
      > img {
      }
    }
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
      > li {
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
  }
`;

export const Spacer = styled.div`
  height: 6rem;
`;

import styled from "@emotion/styled";

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  /* background: #fff; */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
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
          /* color: #ffef9e; */
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
        /* color: #ffef9e; */
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
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

export const Spacer = styled.div`
  height: 5rem;
`;

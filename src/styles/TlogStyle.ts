import styled from "@emotion/styled";

export const TlogContainer = styled.div`
  height: 100%;
  max-width: 100%;
  .tlog-contents {
    max-width: 100%;
    .tlog-subscribe {
      max-width: 100%;
      height: 7rem;
      background: red;
      margin: 2.5rem 0;
      > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        height: 7rem;
        > li {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          > img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
          }
        }
      }
      &.left-bar {
        position: fixed;
        top: 16%;
        left: 7.5%;
        width: 112px;
        height: 600px;
        > ul {
          position: relative;
          top: 40%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px;
          height: 7rem;
          > li {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            > img {
              width: 80px;
              height: 80px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
`;

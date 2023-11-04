import styled from "@emotion/styled";

export const TlogPostWrap = styled.div`
  > div {
    display: flex;
    gap: 20px;
    width: 100%;
    margin: 20px 0;
    margin-left: 42px;
    > ul {
      width: 300px;
      height: 250px;
      background: green;
      > li {
        width: 100%;
        > img {
          width: 100%;
          height: 205px;
        }
        > span {
          height: 45px;
        }
      }
    }
  }
`;

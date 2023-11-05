import styled from "@emotion/styled";

export const TlogPostWrap = styled.div`
  > div {
    display: flex;
    gap: 20px;
    max-width: 100%;
    margin: 30px 0 30px 42px;
    > ul {
      width: 300px;
      height: 250px;
      > li {
        max-width: 300px;

        > img {
          width: 300px;
          height: 205px;
          margin-bottom: 5px;
          border-radius: 10px;
          border: none;
        }
        > span {
          height: 45px;
        }
      }
    }
  }
`;

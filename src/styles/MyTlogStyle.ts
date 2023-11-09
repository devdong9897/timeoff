import styled from "@emotion/styled";

export const MyTlogWrap = styled.div`
  max-width: 100%;
  > .my-tlog-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    > .my-tlog-community {
      width: 100%;
      height: 200px;
      background: green;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5rem;
      > div {
        border-radius: 50%;
        cursor: pointer;
        > img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }
      }
      > ul {
        > li:first-of-type {
          display: flex;
          gap: 4rem;
          font-size: 1rem;
          margin-bottom: 20px;
        }
        > li {
          > textarea {
            resize: none;
            border-radius: 6px;
            padding: 5px 8px;
          }
        }
      }
    }
  }
`;
export const MyTlogPostContents = styled.div`
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
`;

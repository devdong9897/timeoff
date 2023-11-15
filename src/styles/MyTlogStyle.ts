import styled from "@emotion/styled";

export const MyTlogWrap = styled.div`
  max-width: 100%;
  > .my-tlog-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    border-bottom: 1px solid #666;
    margin-bottom: 1.15rem;
    > .my-tlog-community {
      width: 100%;
      height: 200px;
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
  .transform-buttons {
    gap: 4rem;
    > ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > li:first-of-type {
        padding-left: 3rem;
      }
      > li:last-of-type {
        padding-right: 3rem;
      }
      > li {
        display: flex;
        gap: 20px;
        > span {
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
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

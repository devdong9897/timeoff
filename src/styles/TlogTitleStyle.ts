import styled from "@emotion/styled";

export const TlogTitleWrap = styled.div`
  width: 100%;
  > div > h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 50px;
  }
  .region-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    > button {
      padding: 2px 8px;
      border: 1px solid black;
      border-radius: 5px;
    }
  }
  .theme-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin: 15px 0;
    > span {
      padding: 5px 10px;
      border: 1px solid black;
      border-radius: 30px
    }
  }
`;

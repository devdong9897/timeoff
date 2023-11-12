import styled from "@emotion/styled";

export const WriteWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  > form {
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      width: 100%;
      margin-top: 10px;
      > span {
        width: 35%;
        height: 3.5rem;
        line-height: 3.5rem;
        font-size: 1.2rem;
        text-align: center;
        border-radius: 10px;
        background: #006dab;
        color: #ffef9e;
        cursor: pointer;
      }
    }
  }
`;

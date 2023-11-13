import styled from "@emotion/styled";

export const WriteWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  > form {
    margin-top: 2.5rem;
    > input {
      width: 100%;
      height: 3rem;
      font-size: 1.5rem;
      font-weight: 600;
      padding-left: 12px;
      border: 1px solid #006dab;
      border-radius: 8px;
    }
    > .Write-bt-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      width: 100%;
      margin: 10px 0 50px 0;
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

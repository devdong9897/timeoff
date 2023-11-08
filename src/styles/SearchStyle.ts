import styled from "@emotion/styled";

export const SearchWrap = styled.div`
  width: 300px;
  > form {
    > div {
      position: relative;
      > input {
        width: 100%;
        height: 40px;
        border: 0;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding-left: 8px;
      }
      > .font-awesome {
        position: absolute;
        top: 28%;
        right: 6%;
        font-size: 1.1rem;
      }
    }
  }
`;

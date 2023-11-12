import styled from "@emotion/styled";

export const HashTagWrap = styled.div`
  width: 100%;
  margin: 10px 0;
  font-size: 1rem;
  > label {
  }
`;

export const HashTagInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  > .tags {
    padding: 5px 7px;
    height: 2rem;
    color: #ffef9e;
    background: #006dab;
    border-radius: 10px;
    cursor: pointer;
  }
  > input {
    width: auto;
    margin: 5px;
    display: inline-flex;
    /* outline: none; */
    cursor: text;
    height: 2rem;
    line-height: 2rem;
    min-width: 8rem;
    border: none;
  }
`;

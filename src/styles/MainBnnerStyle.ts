import styled from "@emotion/styled";

export const Bnner = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;
  background: pink;

  .BnnerImg {
    position: absolute;
    width: 20rem;
    height: 20rem;
    margin: 3rem 0rem 0rem 7rem;
    background: hotpink;
  }
  > h4 {
    position: absolute;
    left: 30rem;
    margin: 0 auto;
  }
  .BnnerBt {
    width: 100;
    /* position: absolute; */
    background: skyblue;
  }
`;

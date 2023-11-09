import styled from "@emotion/styled";

export const Bnner = styled.div`
margin-bottom: 150px;
  .mainTop {
    width: 100%;
    height: 400px;
    background: green;
    ul {
      position: relative;
      width: 100%;
      height: 500px;
      .topImg {
        position: absolute;
        top: 15%;
        left: 10%;
        width: 500px;
        height: 400px;
        background: black;
      }
      .topInfo {
        position: absolute;
        top: 35%;
        right: 20%;
        background: hotpink;
        width: 23rem;
        height: 8rem;
      }
      .topDetail {
        position: absolute;
        bottom: 34.4%;
        right: 41.45%;
        background: yellow;
        width: 5rem;
        height: 25px;
      }
    }
  }
  .mainSection {
    width: 100%;
    height: 100%;
    /* height: 500px; */
    background: cyan;
    .mainBt {
      position: absolute;
      width: 500px;
      height: 40px;
      right: 22.17%;
      margin-top: 20px;
      background: red;
    }
  }
`;

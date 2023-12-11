import styled from "@emotion/styled";

export const MainWarp = styled.div``;
export const Bnner = styled.div`
  margin-bottom: 150px;
  .main-top {
    height: 400px;
    width: 1920px;
    ul {
      position: relative;
      width: 100%;
      height: 500px;
      .top-img {
        position: absolute;
        top: 15%;
        left: 10%;
        width: 500px;
        height: 400px;
      }

      .top-info {
        position: absolute;
        /* top: 35%; */
        top: 28%;
        right: 20%;
        /* background:#fff; */
        width: 23rem;
        height: 8rem;
        font-size: 2rem;
        font-weight: 600;
      }

      .top-detail {
        position: absolute;
        /* bottom: 34.4%; */
        bottom: 45%;
        right: 40.25%;
        /* background: #fff; */
        width: 6rem;
        height: 25px;
        font-size: 18px;
        font-weight: 600;
      }
      .main-section {
        position: relative;
        /* position: absolute; */

        .progress-bar {
          display: flex;
          position: absolute;
          width: 500px;
          height: 40px;
          right: 10.25%;
          top: 330px;
          /* background: red; */
          gap: 50px;
        }

        .prev-bt {
          position: absolute;
          top: 195px;
          left: 35px;
        }
        .next-bt {
          position: absolute;
          top: 195px;
          right: 35px;
        }
      }
    }
  }
`;

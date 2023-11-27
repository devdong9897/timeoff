import styled from "@emotion/styled";

export const TravelMapWrap = styled.div`
  .spacer {
    width: 100%;
    height: 5px;
  }
  .container {
    position: relative;
    .search-form {
      position: absolute;
      top: 10px;
      left: 0;
      z-index: 2;
      padding-left: 10px;
      .search-label {
        display: flex;
        justify-content: space-between;
        width: 250px;

        .search-input {
          width: 200px;
          height: 25px;
        }
        .btn-box {
          .submit-btn {
            width: 45px;
            height: 25px;
          }
        }
      }
    }
  }
`;

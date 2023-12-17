import styled from "@emotion/styled";

export const SearchWrap = styled.div`
  .search-inner {
    width: 300px;
    div {
      position: relative;
      input {
        width: 100%;
        height: 40px;
        border: 0;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding-left: 8px;
      }
      .font-awesome {
        position: absolute;
        top: 28%;
        right: 6%;
        font-size: 1.1rem;
      }
    }
    &.search-wrap-true {
      width: 700px;
      height: 70px;
      div {
        position: relative;
        input {
          width: 100%;
          border-bottom: 1px solid black;
          border-radius: 0;
          background: #fff;
          box-shadow: none;
          font-size: 1.25rem;
          padding-left: 5px;
        }
        .font-awesome {
          position: absolute;
          top: 27%;
          right: 3%;
          font-size: 1.1rem;
        }
      }
    }
  }
`;

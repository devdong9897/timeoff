import styled from "@emotion/styled";

export const TlogContainer = styled.div`
  height: 100%;
  max-width: 100%;
  .tlog-contents {
    max-width: 100%;
    .tlog-subscribe {
      max-width: 100%;
      height: 7rem;
      background: red;
      margin: 2.5rem 0;
      &.left-bar {
        position: fixed;
        top: 16%;
        left: 7.5%;
        width: 112px;
        height: 600px;
      }
    }
  }
`;

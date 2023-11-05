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
      position: static;
      left: 0;
      transition: all 0.3s ease;
      &.fixed {
        position: fixed;
        top: 12%;
        left: 7.5%;
        max-width: 112px;
        height: 700px;
        transform-origin: top left;
        transform: rotate(360deg);
      }
    }
  }
`;

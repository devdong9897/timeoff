import styled from "@emotion/styled";

export const ModalWrap = styled.div``;
export const ModalInner = styled.div`
  position: absolute;
  width: 50%;
  height: 30rem;
  top: 28rem;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: skyblue;
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 30px 0 30px 0;
  z-index: 99;
  /* .dim {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  } */
  .modal-header {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    padding-bottom: 30px;
    li:last-of-type {
      position: absolute;
      top: 2.5%;
      right: 2.5%;
      cursor: pointer;
    }
  }
`;

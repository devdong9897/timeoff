import styled from "@emotion/styled";

export const ModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .dim {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    z-index: 10;
  }
`;
export const ModalInner = styled.div`
  position: absolute;
  width: 50%;
  height: 38rem;
  top: 28rem;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: #fff;
  border-radius: 10px;
  z-index: 99;
  .modal-top {
    display: flex;
    justify-content: center;
    padding: 30px 0 30px 0;
    border-radius: 10px 10px 0 0;
    background: #006dab;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    li {
      h2 {
        font-size: 3rem;
        font-weight: 400;
        color: #fff;
      }
    }
    li:last-of-type {
      position: absolute;
      top: 2.5%;
      right: 2.5%;
      cursor: pointer;
    }
  }
  .modal-btm {
    .modal-btm-header {
      font-size: 1.6rem;
      padding: 30px 0 30px 0;
      span:nth-child(2) {
        font-size: 1.8rem;
        font-weight: 600;
        color: #006dab;
      }
    }
    ul {
      li {
        cursor: pointer;
      }
    }
    .modal-btm-footer {
      font-size: 1rem;
      padding-top: 30px;
    }
    ul {
      display: flex;
      justify-content: center;
      gap: 3rem;
      li {
        width: 380px;
        height: 230px;
        gap: 30px;
        img {
          width: 380px;
          height: 230px;
        }
      }
    }
  }
`;

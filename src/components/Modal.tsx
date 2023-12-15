import { ModalInner, ModalWrap } from "../styles/ModalStyle";

interface PropsType {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginModal: React.FC<PropsType> = ({
  // eslint-disable-next-line react/prop-types
  modalOpen,
  // eslint-disable-next-line react/prop-types
  setModalOpen,
}) => {
  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <ModalWrap>
          <div className="dim"></div>
          <ModalInner>
            <ul className="modal-top">
              <li>
                <h2>로그인</h2>
              </li>
              <li>
                <span onClick={handleCancel}>✖</span>
              </li>
            </ul>
            <div className="modal-btm">
              <div className="modal-btm-header">
                <span>WelCome to</span>&nbsp;
                <span>TIME OFF</span>
                <br />
                <span>오신걸 환영합니다.</span>
              </div>
              <ul>
                <li>
                  <img src="/login/naver.png" alt="" />
                </li>
                <li>
                  <img src="/login/kakao.png" alt="" />
                </li>
              </ul>
              <div className="modal-btm-footer">
                <span>sns소셜 로그인을 통해</span>
                <br />
                <span>다양한 여행 정보를 볼 수 있습니다.</span>
              </div>
            </div>
          </ModalInner>
        </ModalWrap>
      )}
    </>
  );
};

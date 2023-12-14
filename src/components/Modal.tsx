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
    <ModalWrap>
      {modalOpen && (
        <ModalInner>
          <ul className="modal-header">
            <li>
              <h2>로그인</h2>
            </li>
            <li>
              <span onClick={handleCancel}>✖</span>
            </li>
          </ul>
          <div className="modal-body">
            <span>WelCome to TIME OFF</span>
            <span>오신걸 환영합니다.</span>
            <ul>
              <li></li>
              <li></li>
            </ul>
            <span>sns소셜 로그인을 통해</span>
            <span>다양한 정보를 볼 수 있습니다.</span>
          </div>
        </ModalInner>
      )}
    </ModalWrap>
  );
};

LoginModal.propTypes = {};

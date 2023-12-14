import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookmarkMdStyle } from "../../styles/MypageStyle";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function BookmarkModal({ setModalOpen}: any) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <BookmarkMdStyle>
      <div className="wrap" onClick={closeModal}>
        <div className="container" onClick={stopPropagation}>
          <button className="close" onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="modal-content">모달창입니다.</div>
        </div>
      </div>
    </BookmarkMdStyle>
  );
}
export default BookmarkModal;

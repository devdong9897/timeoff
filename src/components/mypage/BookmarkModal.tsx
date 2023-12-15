import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookmarkMdStyle } from "../../styles/MypageStyle";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import FavoriteBookmark from "./FavoriteBookmark";
import FavoriteCourse from "./FavoriteCourse";

function BookmarkModal({ setModalOpen, whatOpen }: any) {
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
          <div className="modal-content">
            <div>
              {whatOpen === "mark" ? <FavoriteBookmark /> : <FavoriteCourse />}
            </div>
          </div>
        </div>
      </div>
    </BookmarkMdStyle>
  );
}
export default BookmarkModal;

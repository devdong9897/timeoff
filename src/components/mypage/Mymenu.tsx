import React, { useState } from "react";
import BookmarkModal from "./BookmarkModal";

const Mymenu = () => {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);
  const [whatOpen, setWhatOpen] = useState("mark");

  // 모달창 노출
  const showMarkModal = () => {
    setWhatOpen("mark");
    setModalOpen(true);
  };

  const showCourseModal = () => {
    setWhatOpen("course");
    setModalOpen(true);
  };

  return (
    <div className="mymenusection">
      <ul>
        <li>
          <h3>나의활동</h3>
        </li>
        <li>
          <h4>즐겨찾기</h4>
          <div className="bookmark-menu">
            <button onClick={showMarkModal}>더보기</button>
            {modalOpen && <BookmarkModal setModalOpen={setModalOpen} whatOpen={whatOpen}/>}
            {/* {modalOpen && <FavoriteBookmark setModalOpen={setModalOpen} />} */}
          </div>
        </li>
        <li>
          <h4>코스</h4>
          <div className="course-menu">
            <button onClick={showCourseModal}>더보기</button>
            {modalOpen && <BookmarkModal setModalOpen={setModalOpen} whatOpen={whatOpen} />}
            {/* {modalOpen && <FavoriteCourse setModalOpen={setModalOpen} />} */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Mymenu;

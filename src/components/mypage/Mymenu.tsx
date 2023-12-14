import React, { useState } from "react";
import BookmarkModal from "./BookmarkModal";

const Mymenu = () => {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="mymenusection">
      <ul>
        <li>나의활동</li>
        <li>
          즐겨찾기
          <div>
            <button onClick={showModal}>더보기</button>
            {modalOpen && <BookmarkModal setModalOpen={setModalOpen} />}
          </div>
        </li>
        <li>
          코스
          <div>
            <button onClick={showModal}>더보기</button>
            {modalOpen && <BookmarkModal setModalOpen={setModalOpen} />}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Mymenu;

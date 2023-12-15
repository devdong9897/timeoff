import React from "react";
import { BookmarkWrap } from "../../styles/MypageStyle";

export interface IbookmarkData {
  img: string;
  title: string;
}

export const Dummydata: IbookmarkData[] = [
  {
    img: "https://via.placeholder.com/100x100",
    title: "title. 1",
  },
  {
    img: "https://via.placeholder.com/100x100",
    title: "title. 2",
  },
  {
    img: "https://via.placeholder.com/100x100",
    title: "title. 3",
  },
  {
    img: "https://via.placeholder.com/100x100",
    title: "title. 4",
  },
];

const FavoriteBookmark = ({ setModalOpen }: any) => {
  return (
    <BookmarkWrap>
      <h2> 즐겨찾기 </h2>
      <div className="mark-content">
        {Dummydata?.map((item, index) => (
          <ul key={index}>
            <li>
              <img src={`${item.img}`} alt={item.title} />
            </li>
            <li>
              <p>{item.title}</p>
            </li>
          </ul>
        ))}
      </div>
    </BookmarkWrap>
  );
};

export default FavoriteBookmark;

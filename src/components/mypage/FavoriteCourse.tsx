import React from "react";
import { CourseWrap } from "../../styles/MypageStyle";

export interface IcourseData {
  img: string;
  title: string;
}

export const Dummydata2: IcourseData[] = [
  {
    img: "https://via.placeholder.com/100x100/FF6F91",
    title: "course. 1",
  },
  {
    img: "https://via.placeholder.com/100x100/FF6F91",
    title: "course. 2",
  },
  {
    img: "https://via.placeholder.com/100x100/FF6F91",
    title: "course. 3",
  },
  {
    img: "https://via.placeholder.com/100x100/FF6F91",
    title: "course. 4",
  },
];
const FavoriteCourse = ({ setModalOpen }: any) => {
  return (
    <CourseWrap>
      <div>Favorite Course</div>
      <div className="mark-content">
        {Dummydata2?.map((item, index) => (
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
    </CourseWrap>
  );
};

export default FavoriteCourse;

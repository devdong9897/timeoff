import React, { useState } from "react";
import { Rec } from "../styles/RecItemStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface slideData {
  pid: number;
  title: string;
  img: string;
}

const RecItem: React.FC = () => {
  const datas: slideData[] = [
    {
      pid: 1,
      title: "테스트테스트 여기로 저기로 어디로 갈까 여행계획은 타임오프에서",
      img: "https://as2.ftcdn.net/v2/jpg/03/15/31/21/1000_F_315312184_9vpQ3Uy77rjO0oPVstrFOnKNKPEIFEfF.jpg",
    },
    {
      pid: 2,
      title: "테스트테스트 여기로 저기로 어디로 갈까 여행계획은  타임오프에서",
      img: "https://as2.ftcdn.net/v2/jpg/03/15/31/21/1000_F_315312184_9vpQ3Uy77rjO0oPVstrFOnKNKPEIFEfF.jpg",
    },
    {
      pid: 3,
      title: "테스트테스트 여기로 저기로 어디로 갈까 여행계획은 타임오프에서",
      img: "https://as2.ftcdn.net/v2/jpg/03/15/31/21/1000_F_315312184_9vpQ3Uy77rjO0oPVstrFOnKNKPEIFEfF.jpg",
    },
    {
      pid: 4,
      title: "테스트테스트 여기로 저기로 어디로 갈까 여행계획은 타임오프에서",
      img: "https://as2.ftcdn.net/v2/jpg/04/86/03/81/1000_F_486038198_MSJ3sSQDlEGE7IcALQJGHoSxA9hyPaHq.jpg",
    },
    {
      pid: 5,
      title: "테스트테스트 여기로 저기로 어디로 갈까?",
      img: "https://as2.ftcdn.net/v2/jpg/04/86/03/81/1000_F_486038198_MSJ3sSQDlEGE7IcALQJGHoSxA9hyPaHq.jpg",
    },
    {
      pid: 6,
      title: "테스트테스트 여기로 저기로 어디로 갈까?",
      img: "https://as1.ftcdn.net/v2/jpg/02/83/03/50/1000_F_283035072_inafEXEfDrL8zwDTYsZgkO0v67yLU1Q3.jpg",
    },
  ];

  const itemsPerPage = 5;
  const totalItems = datas.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const toPrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const toNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <Rec>
      <ul className="item-list">
        {datas
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map(data => (
            <li key={data.pid}>
              <img src={data.img} alt={data.title} />
              <div>{data.title}</div>
            </li>
          ))}
      </ul>

      <div
        className="prev-btn"
        onClick={toPrev}
        style={{ display: currentPage === 1 ? "none" : "" }}
      >
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          style={{ color: "#e8eaee" }}
        />
      </div>
      <div
        className="next-btn"
        onClick={toNext}
        style={{ display: currentPage === totalPages ? "none" : "" }}
      >
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          style={{ color: "#e8eaee" }}
        />
      </div>
    </Rec>
  );
};

export default RecItem;

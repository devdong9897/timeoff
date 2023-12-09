import React from "react";
import { EditorWrap } from "../styles/EditorPickStyle";
import { Link } from "react-router-dom";

interface Editor {
  pk: number;
  title: string;
  img: string;
  link: string;
}
const editorData: Editor[] = [
  {
    pk: 1,
    title: "연말을 더 설레게 하는 감성 여행지 특집🎄",
    img: "https://cdn.pixabay.com/photo/2017/01/06/23/09/tree-1959267_640.jpg",
    link: "/tlog",
  },
  {
    pk: 2,
    title: "마음의 온도를 높이는 겨울 여행지 추천🎅",
    img: "https://cdn.pixabay.com/photo/2012/10/25/23/18/train-62849_640.jpg",
    link: "/tlog",
  },
  {
    pk: 3,
    title: "미리보는 완벽한 겨울 낭만 여행지",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    link: "/tlog",
  },
  {
    pk: 4,
    title: "늦가을 바람 따라 떠나는 정선 드라이브",
    img: "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg",
    link: "/tlog",
  },
];

const EditorPick = () => {
  return (
    <EditorWrap>
      {editorData?.map(data => (
        <div key={data.pk}>
          <ul>
            <li>
              <img className="editor-img" src={data.img} alt={data.title} />
            </li>
            <li>
              <span>{data.title}</span>
            </li>
            <li>
              <Link to={data.link}>자세히 보기</Link>
            </li>
          </ul>
        </div>
      ))}
    </EditorWrap>
  );
};

export default EditorPick;

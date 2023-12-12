import React from "react";
import { EditorWrap } from "../../styles/EditorPickStyle";
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GrQTpBvqTgWhq6xdDtmtbu4ncgPg13y0aA&usqp=CAU",
    link: "/tlog",
  },
  {
    pk: 2,
    title: "마음의 온도를 높이는 겨울 여행지 추천🎅",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCV1zV6_Qxrng8K_lSGVjNyjRfVr44R3CWw&usqp=CAU",
    link: "/tlog",
  },
  {
    pk: 3,
    title: "미리보는 완벽한 겨울 낭만 여행지",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GrQTpBvqTgWhq6xdDtmtbu4ncgPg13y0aA&usqp=CAU",
    link: "/tlog",
  },
  {
    pk: 4,
    title: "늦가을 바람 따라 떠나는 정선 드라이브",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCV1zV6_Qxrng8K_lSGVjNyjRfVr44R3CWw&usqp=CAU",
    link: "/tlog",
  },
];

const EditorPick = () => {
  return (
    <EditorWrap>
      <h2>에디터 픽</h2>
      <div>
        {editorData?.map(data => (
          <div key={data.pk}>
            <ul >
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
      </div>
    </EditorWrap>
  );
};

export default EditorPick;

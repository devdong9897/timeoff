import React, { useState } from "react";
import WriteEditor from "../components/WriteEditor";
import { WriteWrap } from "../styles/WriteStyle";
import HashTag from "../components/Write/HashTag";
import { useNavigate } from "react-router";

const Write = () => {
  const [titleText, setTitleText] = useState<string>("");
  const navigate = useNavigate();

  const handleTtitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleSave = () => {
    console.log("저장");
  };
  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <WriteWrap>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titleText}
          onChange={handleTtitle}
          placeholder="게시글 제목을 입력해주세요."
        />
        <HashTag />
        <WriteEditor />
        <div className="Write-bt-buttons">
          <span onClick={handleCancel}>뒤로가기</span>
          <span onClick={handleSave}>작성하기</span>
        </div>
      </form>
    </WriteWrap>
  );
};

export default Write;

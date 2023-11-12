import React from "react";
import WriteEditor from "../components/WriteEditor";
import { WriteWrap } from "../styles/WriteStyle";
import HashTag from "../components/Write/HashTag";

const Write = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <WriteWrap>
      <form onSubmit={handleSubmit}>
        <HashTag />
        <WriteEditor />
        <div>
          <span>뒤로가기</span>
          <span>작성하기</span>
        </div>
      </form>
    </WriteWrap>
  );
};

export default Write;

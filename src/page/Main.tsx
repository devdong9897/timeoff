import React from "react";
import MainBnner from "../components/MainBnner";
import EditorPick from "../components/EditorPick";
import RecItem from "../components/RecItem";

const Main = () => {
  return (
    <>
      <MainBnner />
      <div>
        <h2>추천 테마</h2>
        <RecItem />
        <h2>추천 여행</h2>
        <RecItem />
      </div>
      <div>
        <h2>에디터 픽</h2>
        <EditorPick />
      </div>
    </>
  );
};

export default Main;

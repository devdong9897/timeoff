import React from "react";
import MainBnner from "../components/main/MainBnner";
import RecItem from "../components/main/RecItem";
import EditorPick from "../components/main/EditorPick";

const Main = () => {
  return (
    <div>
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
    </div>
  );
};

export default Main;

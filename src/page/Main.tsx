import React from "react";
import MainBnner from "../components/MainBnner";
import RecItem from "../components/RecItem";
import EditorPick from "../components/EditorPick";

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
      <EditorPick/>
    </>
  );
};

export default Main;

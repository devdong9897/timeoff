import React from "react";
import MainBnner from "../components/main/MainBnner";
import RecItem from "../components/main/RecItem";
import EditorPick from "../components/main/EditorPick";
import { MainSpacer } from "../styles/MainBnnerStyle";

const Main = () => {
  return (
    <div>
      <MainBnner />
      <MainSpacer />
      <div>
        <RecItem />
        <EditorPick />
      </div>
    </div>
  );
};

export default Main;

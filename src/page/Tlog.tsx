import React from "react";
import AllTlog from "../components/AllTlog";
import { Spacer, TlogContainer } from "../styles/TlogStyle";

const Tlog = () => {
  return (
    <TlogContainer>
      <div className="tlog-contents">
        <div className="tlog-subscribe">이거슨 구독?</div>
        <Spacer />
        <AllTlog />
      </div>
    </TlogContainer>
  );
};

export default Tlog;

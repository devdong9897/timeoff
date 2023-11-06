import React, { useEffect, useState } from "react";
import AllTlog from "../components/AllTlog";
import { TlogContainer } from "../styles/TlogStyle";

const Tlog = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TlogContainer>
      <div className="tlog-contents">
        <div className={`tlog-subscribe ${scroll ? "left-bar" : ""}`}>
          이거슨 구독?
        </div>
        <AllTlog />
      </div>
    </TlogContainer>
  );
};

export default Tlog;

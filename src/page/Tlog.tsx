import React, { useEffect, useState } from "react";
import AllTlog from "../components/AllTlog";
import { TlogContainer } from "../styles/TlogStyle";

const Tlog = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
        <div className={`tlog-subscribe ${scrolled ? "fixed" : ""}`}>
          이거슨 구독?
        </div>
        <AllTlog />
      </div>
    </TlogContainer>
  );
};

export default Tlog;

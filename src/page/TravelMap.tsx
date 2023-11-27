import React, { useState } from "react";
import { TravelMapWrap } from "../styles/TravelMapStyle";
import KakaoMap from "../components/KakaoMap";

export interface propsType {
  searchKeyword: string;
}

const TravelMap = () => {
  const [Value, setValue] = useState("");
  const [Keyword, setKeyword] = useState("");

  const keywordChange = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const submitKeyword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setKeyword(Value);
  };

  const valueChecker = () => {
    if (Value === "") {
      alert("검색어를 입력해주세요.");
    }
  };

  return (
    <TravelMapWrap>
      <div className="spacer"></div>
      <div className="container">
        <form className="search-form" onSubmit={submitKeyword}>
          <label htmlFor="place" className="search-label">
            <input
              type="text"
              id="movie-title"
              className="search-input"
              name="place"
              onChange={keywordChange}
              placeholder="검색어를 입력해주세요."
              required
            />
            <div className="btn-box">
              <input
                className="submit-btn"
                type="submit"
                value="검색"
                onClick={valueChecker}
              />
            </div>
          </label>
        </form>
        <KakaoMap searchKeyword={Keyword} />
      </div>
    </TravelMapWrap>
  );
};

export default TravelMap;

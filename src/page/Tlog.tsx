import React, { useEffect, useState } from "react";
import AllTlog from "../components/tlog/AllTlog";
import { TlogContainer } from "../styles/TlogStyle";
import MyTlog from "../components/tlog/MyTlog";
import { useSelector } from "react-redux";

interface TlogSliceState {
  isTrue: boolean;
}

interface SubscribeData {
  subscribe: string;
}

const subscribeData: SubscribeData[] = [
  {
    subscribe:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150427_85%2Feveshsy_14300638200691D59T_JPEG%2F115.JPG&type=sc960_832",
  },
  {
    subscribe:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMDJfNzYg%2FMDAxNDgzMzYxNjY1MjI4.8d241un4k_zDAf1OfbY9YPISSj_gW9KrsqYb2byIdlog.jChpk3t0dHNnEAZVZJKUe1av6yJstX9yDoIGhMy_-MIg.PNG.jiny_home%2F3.png&type=sc960_832",
  },
  {
    subscribe:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5575%2F2023%2F05%2F04%2F0000375990_001_20230504100402950.jpeg&type=sc960_832",
  },
  {
    subscribe:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMjhfMjk3%2FMDAxNjAzODg0NzU0MDg3.nm28wChnQlROEEPObqaoba87P_X0HYejEGuHYe8VvQEg.2X5G3yOBcvDf4FkBAgAmr0KZDWlJS6_KRnuzlGoQ8qwg.JPEG.kyolove14%2F%25C8%25FB%25BD%25EB%25BF%25A9%25C0%25DA_%25B5%25B5%25BA%25C0%25BC%25F8_%25BE%25C8%25B9%25CE%25C7%25F5_%2528113%2529.jpg&type=sc960_832",
  },
  {
    subscribe:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzBfMTQy%2FMDAxNjg1NDQ1OTIzNzE0.qPiGnHyHK8qFcgJ_FuI-f8f6X4P55hVF92hjlTrtZmIg.23yenfdqLT-u5mDQr9kSi_47w9yb1odlmQSA0StmFIYg.JPEG.sj2zzz%2F1634875868965.jpeg&type=sc960_832",
  },
  {
    subscribe:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjBfMTgy%2FMDAxNjkyNTMzOTY1MDUx.M4p5klOTu3B0xu5NJ6m8q-L7AJ9AIfQ-AxtyX_lwrEwg.grCdgnYeGKohAiwcr3o4nNjaeqOisw_MX1hk-hYw4ccg.JPEG.jdg3937%2Fcommon08KH6Q28.jpg&type=sc960_832",
  },
];

const Tlog = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  // const [Change, setChange] = useState<boolean>(true);
  const { isTrue } = useSelector(
    (state: { boolean: TlogSliceState }) => state.boolean,
  );
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
          <ul>
            {subscribeData.map((item, index) => (
              <li key={index}>
                <img src={item.subscribe} alt="" />
              </li>
            ))}
          </ul>
        </div>
        {isTrue ? <AllTlog /> : <MyTlog />}

        {/* {Change ? <AllTlog setChange={setChange} /> : <MyTlog />} */}
      </div>
    </TlogContainer>
  );
};

export default Tlog;

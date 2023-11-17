import styled from "@emotion/styled";

export const ThemeMapContainer = styled.div`
  .map-box {
    width: 550px;
    height: 850px;
    margin-bottom: 50px;
    background: #c3ebff;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 45px;
    border-radius: 20px;
    svg path {
      transition:
        fill 0.3s,
        filter 0.3s,
        transform 0.3s;
    }
  }
  svg path:hover {
    outline: none;
    fill: #e7e5ae;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
    transform: translateY(-5px);
  }
  #busan:hover {
    outline: none;
    fill: #e7e5ae;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #daegu:hover {
    outline: none;
    fill: #a2ba99;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #daejeon:hover {
    outline: none;
    fill: #efac68;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #gangwon:hover {
    outline: none;
    fill: #d2b6d3;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #gwangju:hover {
    outline: none;
    fill: #495477;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #gyeonggi:hover {
    outline: none;
    fill: #a5c3df;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #incheon:hover {
    outline: none;
    fill: #85a9d1;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #jeju:hover {
    outline: none;
    fill: #edbbba;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #north-chungcheong:hover {
    outline: none;
    fill: #e1decf;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #north-gyeongsang:hover {
    outline: none;
    fill: #9ed7d8;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #north-jeolla:hover {
    outline: none;
    fill: #a0a2ba;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #sejong:hover {
    outline: none;
    fill: #d5c19f;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #seoul:hover {
    outline: none;
    fill: #d2d1e3;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #south-chungcheong:hover {
    outline: none;
    fill: #e4de78;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #south-gyeongsang:hover {
    outline: none;
    fill: #c5d99f;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #south-jeolla:hover {
    outline: none;
    fill: #d0d1e5;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  #ulsan:hover {
    outline: none;
    fill: #d8b2c3;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
`;

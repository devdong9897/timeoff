import styled from "@emotion/styled";

export const KakaoMapWrap = styled.div`
  width: 100%;
  height: 700px;
  font-size: 14px;
  position: relative;
  a,
  a:hover,
  a:active {
    color: #000;
    text-decoration: none;
  }

  #map {
    width: 100%;
    height: 700px;
    position: relative;
    overflow: hidden;
  }

  .bg-white {
    background: #fff;
  }

  #menu-wrap {
    position: absolute;
    top: 5%;
    left: 0;
    bottom: 0;
    width: 250px;
    height: 600px;
    margin: 10px 0 30px 10px;
    padding: 5px;
    overflow-y: auto;
    background: rgba(255, 255, 255, 0.7);
    z-index: 2;
    font-size: 12px;
    border-radius: 10px;

    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 2px solid #5f5f5f;
      margin: 3px 0;
    }

    .option {
      text-align: center;

      p {
        margin: 10px 0;
      }

      button {
        margin-left: 5px;
      }
    }
  }

  #places-list {
    li {
      position: relative;
      border-bottom: 1px solid #888;
      overflow: hidden;
      cursor: pointer;
      list-style: none;
      min-height: 65px;

      span {
        display: block;
        margin-top: 4px;
      }

      h5 {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .info {
        padding: 10px 0 10px 55px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        .gray {
          color: #8a8a8a;
        }

        .jibun {
          padding-left: 26px;
          background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png)
            no-repeat;
        }

        .tel {
          color: #009900;
        }
      }
    }
    li:hover {
      background-color: #6edcff;
    }
  }

  .item .markerbg {
    float: left;
    position: absolute;
    width: 36px;
    height: 37px;
    margin: 10px 0 0 10px;
    background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png)
      no-repeat;
  }

  .item {
    .marker_1 {
      background-position: 0 -10px;
    }
    .marker_2 {
      background-position: 0 -56px;
    }
    .marker_3 {
      background-position: 0 -102px;
    }
    .marker_4 {
      background-position: 0 -148px;
    }
    .marker_5 {
      background-position: 0 -194px;
    }
    .marker_6 {
      background-position: 0 -240px;
    }
    .marker_7 {
      background-position: 0 -286px;
    }
    .marker_8 {
      background-position: 0 -332px;
    }
    .marker_9 {
      background-position: 0 -378px;
    }
    .marker_10 {
      background-position: 0 -423px;
    }
    .marker_11 {
      background-position: 0 -470px;
    }
    .marker_12 {
      background-position: 0 -516px;
    }
    .marker_13 {
      background-position: 0 -562px;
    }
    .marker_14 {
      background-position: 0 -608px;
    }
    .marker_15 {
      background-position: 0 -654px;
    }
  }

  #pagination {
    margin: 10px auto;
    text-align: center;

    a {
      display: inline-block;
      margin-right: 10px;
    }

    .on {
      font-weight: bold;
      cursor: default;
      color: #777;
    }
  }
`;

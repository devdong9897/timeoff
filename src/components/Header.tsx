import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HeaderWrap, Spacer } from "../styles/HeaderStyle";
import { setTrue } from "../reducers/tlogSlice";
import { useDispatch } from "react-redux";
import Search from "./Search";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImgClick = () => {
    console.log("이동되니");
    // props.setChange(false);
    dispatch(setTrue());
  };

  const handleMyPageClick = () => {
    navigate("/mypage");
  };

  return (
    <>
      <HeaderWrap>
        <ul className="main-category">
          <NavLink to={`/`}>
            <li>
              <img src="/logo/logo.png" alt="Logo" />
            </li>
          </NavLink>
          <NavLink
            to={`/`}
            className={({ isActive }) =>
              "nav-link" + (isActive ? "-active" : "")
            }
          >
            <li>
              <span>홈</span>
            </li>
          </NavLink>
          <NavLink
            to={`/theme`}
            className={({ isActive }) =>
              "nav-link" + (isActive ? "-active" : "")
            }
          >
            <li>
              <span>테마</span>
            </li>
          </NavLink>
          <NavLink
            to={`/travlemap`}
            className={({ isActive }) =>
              "nav-link" + (isActive ? "-active" : "")
            }
          >
            <li>
              <span>여행지도</span>
            </li>
          </NavLink>
          <NavLink
            to={`/tlog`}
            className={({ isActive }) =>
              "nav-link" + (isActive ? "-active" : "")
            }
          >
            <li onClick={handleImgClick}>
              <span>티로그</span>
            </li>
          </NavLink>
        </ul>
        <ul className="etc-category">
          <li>
            <Search />
          </li>
          <li>
            <img src="/leng/leng.png" alt="leng" />
          </li>
          <li onClick={handleMyPageClick}>
            <img src="/login/login.png" alt="Profile" />
          </li>
        </ul>
      </HeaderWrap>
      <Spacer />
    </>
  );
};

export default Header;

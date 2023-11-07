import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HeaderWrap, Spacer } from "../styles/HeaderStyle";
import { setTrue } from "../reducers/tlogSlice";
import { useDispatch } from "react-redux";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleImgClick = () => {
    console.log("이동되니");
    // props.setChange(false);
    dispatch(setTrue());
  };

  return (
    <>
      <HeaderWrap>
        <ul>
          <li
            onClick={() => {
              navigate(`/`);
            }}
          >
            <img src="" alt="Logo" />
          </li>
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
      </HeaderWrap>
      <Spacer />
    </>
  );
};

export default Header;

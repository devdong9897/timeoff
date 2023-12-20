import React from "react";
import { ProfileSection } from "../../styles/MypageStyle";

const Myprofile = () => {
  return (
    <ProfileSection>
      <ul>
        <li className="profilepic">
          <img src="https://via.placeholder.com/150x150/e3bfb1" alt="프로필" />
        </li>
        <li>
          반가워요! <br /> {`name`}님
        </li>
      </ul>
    </ProfileSection>
  );
};

export default Myprofile;

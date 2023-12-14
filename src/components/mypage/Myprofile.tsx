import React from "react";

const Myprofile = () => {
  return (
    <div className="profilesection">
      <ul>
        <li>
          <img src="https://via.placeholder.com/100x100/e3bfb1" alt="" />
        </li>
        <li>
          반가워요! <br /> {`name`}님
        </li>
      </ul>
    </div>
  );
};

export default Myprofile;

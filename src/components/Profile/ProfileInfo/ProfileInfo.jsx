import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg"
          alt="."
        ></img>
      </div>
      <div className={classes.description}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;

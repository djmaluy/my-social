import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.content}>
      <div>
        {/* <img
          src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg"
          alt="."
        ></img> */}
      </div>

      <div className={classes.description}>
        <img src={props.profile.photos.large} alt="foto" />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;

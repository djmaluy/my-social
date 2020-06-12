import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/def.jpg";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={classes.content}>
      <div className={classes.description}>
        <img
          src={profile.photos.large || userPhoto}
          alt="foto"
          className={classes.userPhoto}
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;

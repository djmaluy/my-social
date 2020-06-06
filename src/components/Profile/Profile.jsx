import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  //функция, принимающая props(обьект) и возвращающая jsx разметку.
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

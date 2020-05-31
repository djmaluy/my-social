import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => { //функция, принимающая props(обьект) и возвращающая jsx разметку.
  return (
      <div>
        <ProfileInfo/>
        <MyPostsContainer/>
      </div>)
}

export default Profile;

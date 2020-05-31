import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
      <div>
        <div className={classes.item}>
          <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"/>
          {props.text}

        </div>
        <span className={classes.like}>Likes</span> {props.likesCount}
      </div>

  );
};

export default Post;

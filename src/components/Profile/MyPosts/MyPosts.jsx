import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./MyPost/Post";

const MyPosts = (props) => {

  let postsElement =
      props.posts.map( post => <Post text={post.text} key={post.id} likesCount={post.likesCount}/>);


  let newPostElement = React.createRef();

  let onAddPost = () => {  //callback ф-я, которая из пропс
    props.addPost();
      }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  }
  return (
      <div>
        <div className={classes.myPosts}>
          My posts
        </div>
        <div className={classes.postDescription}>
          <textarea onChange={onPostChange} ref={newPostElement}
                    value={props.textNewPost}/>
        </div>
        <div className={classes.myPostBtn}>
          <button onClick={onAddPost}>
            Add post
          </button>
        </div>
        <div className={classes.posts}>
          {postsElement}
        </div>
      </div>
  );
};

export default MyPosts;

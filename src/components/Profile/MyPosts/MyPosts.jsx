import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./MyPost/Post";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validator";
import { Textarea } from "../../Common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postsElement = props.posts.map((post) => (
    <Post text={post.text} key={post.id} likesCount={post.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.textNewPost);
  };

  return (
    <div>
      <div className={classes.myPosts}>My posts</div>
      <AddMessageFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>{postsElement}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.postDescription}>
        <Field
          name="textNewPost"
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div className={classes.myPostBtn}>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);

export default MyPosts;

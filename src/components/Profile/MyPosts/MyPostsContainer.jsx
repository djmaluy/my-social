import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  //при любых изменениях в стейт запускается функция
  return {
    // формируется новый обьект, внутренности которго сравниваются со старым
    posts: state.profilePage.posts, //если массив posts не менялся, то компонента не перерисовуется
    textNewPost: state.profilePage.textNewPost,
  };
};
let mapDispatchTpProps = (dispatch) => {
  return {
    addPost: (textNewPost) => {
      dispatch(addPostActionCreator(textNewPost));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchTpProps)(MyPosts);
export default MyPostsContainer;

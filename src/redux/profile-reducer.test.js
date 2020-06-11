import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, text: "Hi, how are you?", likesCount: 12 },
    { id: 2, text: "it is my first post", likesCount: 25 },
  ],
};

it("length of posts should be incremented", () => {
  // 1. start data
  let action = addPostActionCreator("something text");

  // 2. add actionCreator
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it("message of new post should be correct", () => {
  // 1. start data
  let action = addPostActionCreator("something text");

  // 2. add actionCreator
  let newState = profileReducer(state, action);

  // 3. expectation

  expect(newState.posts[2].text).toBe("something text");
});

it("after deleting length of message should be decrement ", () => {
  // 1. start data
  let action = deletePost(1);

  // 2. add actionCreator
  let newState = profileReducer(state, action);

  // 3. expectation

  expect(newState.posts.length).toBe(1);
});

it("after deleting length  shouldn't be decrement if id was incorrect ", () => {
  // 1. start data
  let action = deletePost(100);

  // 2. add actionCreator
  let newState = profileReducer(state, action);

  // 3. expectation

  expect(newState.posts.length).toBe(2);
});

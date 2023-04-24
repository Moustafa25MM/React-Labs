export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SELECTED_POST = 'SET_SELECTED_POST';

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const setSelectedPost = (post) => ({
  type: SET_SELECTED_POST,
  payload: post,
});

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => dispatch(fetchPostsSuccess(data)))
      .catch((error) => dispatch(fetchPostsFailure(error)));
  };
};
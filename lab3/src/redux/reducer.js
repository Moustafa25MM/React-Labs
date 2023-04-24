import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    SET_SEARCH_TERM,
    SET_SELECTED_POST,
  } from './action';
  
  const initialState = {
    posts: [],
    loading: false,
    error: null,
    searchTerm: '',
    selectedPost: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload,
        };
      case FETCH_POSTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case SET_SEARCH_TERM:
        return {
          ...state,
          searchTerm: action.payload,
        };
      case SET_SELECTED_POST:
        return {
          ...state,
          selectedPost: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
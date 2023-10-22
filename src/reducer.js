import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
      };
    case HANDLE_PAGE:
      if (action.payload === 'inc') {
        let prevPage = state.page + 1;
        if (prevPage > state.nbPages - 1) {
          prevPage = 0;
        }
        return {
          ...state,
          page: prevPage,
        };
      }
      if (action.payload === 'dec') {
        let nextPage = state.page - 1;
        if (nextPage < 0) {
          nextPage = state.nbPages - 1;
        }
        return {
          ...state,
          page: nextPage,
        };
      }
      break;
    default:
      throw new Error(`There is no '${action.type}' acton type`);
  }
};
export default reducer;

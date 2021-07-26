import {
  DATA_REFRESH,
  GET_ERROR,
  GET_POST_ERROR,
  GET_POST_QUERY,
  GET_POST_SUCCESS,
  GET_SUCCESS,
  POST_ERROR,
  POST_REQUEST,
  POST_SUCCESS,
} from "./constants";

export default function DataReducer(state, action) {
  switch (action.type) {
    case GET_SUCCESS:
      return {
        ...state,
        getDataState: { loading: false, error: "", data: action.payload },
      };
    case GET_ERROR:
      return {
        ...state,
        getDataState: { loading: false, error: action.payload, data: [] },
      };
    case GET_POST_QUERY:
      return {
        ...state,
        getDataPostState: { loading: true, error: "", data: [] },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        getDataPostState: { loading: false, error: "", data: action.payload },
      };
    case GET_POST_ERROR:
      return {
        ...state,
        getDataPostState: { loading: false, error: action.payload, data: [] },
      };
    case POST_REQUEST:
      return {
        ...state,
        postDataState: { loading: true, error: "", data: "" },
      };
    case POST_SUCCESS:
      return {
        ...state,
        postDataState: { loading: false, error: "", data: action.payload },
      };
    case POST_ERROR:
      return {
        ...state,
        postDataState: { loading: false, error: action.payload, data: "" },
      };

    case DATA_REFRESH:
      return {
        getDataState: { loading: true, error: "", data: [] },
        postDataState: { loading: false, error: "", data: "" },
      };
    default:
      return state;
  }
}

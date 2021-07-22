import { FETCH_ERROR, FETCH_SUCCESS, REFRESH_DATA } from "./constants";

export default function DataReducer(state, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    case REFRESH_DATA:
      return {
        loading: true,
        data: [],
        error: "",
      };
    default:
      return state;
  }
}

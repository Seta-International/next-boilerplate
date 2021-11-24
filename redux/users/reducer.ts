import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { User } from "types/user";
import { actionTypes } from "./actions";

const initialState = {
  error: {},
  users: [] as User[],
  placeholderData: null,
};

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        users: action.data
      };
    
    default:
      return state;
  }
}

export default reducer;

import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { actionTypes } from "./actions";

export interface IState {
  count: number;
  error: boolean;
  lastUpdate: number;
  light: number;
  placeholderData?: string;
}

const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
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

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };

    default:
      return state;
  }
}

export default reducer;

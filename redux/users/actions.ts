import { User } from "types/user";

export const actionTypes = {
  FAILURE: "FAILURE",
  LOAD_DATA: "LOAD_DATA",
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
};

export function failure(error: unknown) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(data: User[]) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

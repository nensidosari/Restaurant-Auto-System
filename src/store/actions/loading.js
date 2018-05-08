import * as actionTypes from "./actionTypes";

export const loading = (loading) => {
  return {
    type: actionTypes.SET_LOADING,
    loading: loading
  };
};



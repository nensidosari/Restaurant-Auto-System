import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.SET_LOADING :
      const loading = action.loading;
      return {
        ...state,
        loading: loading,
      };
    default: return state;

  }

};

export default reducer;
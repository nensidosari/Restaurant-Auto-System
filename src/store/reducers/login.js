import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility/utility';

const initialState = {
  uuid: null,
  userId: null,
  error: null,
  loading: false,
  admin: null

};

const loginStart = (state, action) => {
  return updateObject(state, {error: null, loading: true} );
};

const loginSuccess = (state, action) => {
  return updateObject(state, {
    uuid: action.uuid,
    userId: action.userId,
    error: null,
    loading: false,
    admin: action.admin
  } );
};

const loginFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  } );
};

const logout = (state, action) => {
  return updateObject(state, {uuid: null, userId:null});
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START : return loginStart(state, action);
    case actionTypes.LOGIN_SUCCESS : return loginSuccess(state, action);
    case actionTypes.LOGIN_FAIL : return loginFail(state, action);
    case actionTypes.LOGOUT : return logout(state, action);
    case actionTypes.CHECK_AUTH_STATE : return logout(state, action);

    default: return state;

  }
};

export default reducer;
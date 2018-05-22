import * as actionTypes from './actionTypes';

import axios from 'axios';

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START
  };
};

export const loginSuccess = (uuid, userId, admin) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    uuid: uuid,
    userId: userId,
    admin:admin
  };
};

export const loginFail = (error) => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: error
  };
};


export const logout = () => {

  localStorage.removeItem('uuid');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.LOGOUT
  };
};

export const login = (username, password) => {

  return dispatch => {
    dispatch(loginStart());
    const loginData = {
      username: username,
      password: password
    };
    localStorage.setItem('uuid', '1');
    localStorage.setItem('userId', '1');
    dispatch(loginSuccess('1', '1', 1));


    //TODO: UNCOMMENT BELOW and delete above
   /* axios.post('http://192.168.0.114:8080/user/login', loginData)
      .then(response => {
        if(response.status === 200) {
          let type = response.data.user.type;
          localStorage.setItem('uuid',response.data.uuid);
          localStorage.setItem('userId',response.data.user.id);
          console.log(response);
          dispatch(loginSuccess(response.data.uuid, response.data.user.id, type));
        }
      }).catch(error => {
      dispatch(loginFail(error));
    });
*/
  };
};

export const checkAuthState = () => {
  return dispatch => {
    const uuid = localStorage.getItem('uuid');
    if(!uuid) {
      dispatch(logout());
    }else {
      dispatch(loginSuccess('1','1',1));
      //TODO: UNCOMMENT THIS & REMOVE THE ABOVE PART
       /* const userId = localStorage.getItem('userId');
        let auth = {
          headers: {'authorization': uuid }
        };

      axios.get('http://192.168.0.114:8080/user/currentUser', auth)
        .then(response => {
          console.log(response.status);
          if(response.status === 200) {
            console.log(response.data);
            let type = response.data.type;
            dispatch(loginSuccess(uuid, response.data.id, type));
          }
        }).catch(error => {
          console.log(error);
        dispatch(loginFail(error));
      });*/
      }
    }


}
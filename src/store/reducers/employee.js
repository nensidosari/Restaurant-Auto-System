import * as actionTypes from '../actions/actionTypes';

const initialState = {
  employees: [],
  editId: ''
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ADD_EMPLOYEE :
      const updatedEmployees = state.employees.concat(action.personData);
      return {
        ...state,
        employees: updatedEmployees
      };
    case actionTypes.SAVE_ID :
      console.log(action.resultPrsId);
      return {
        ...state,
        editId: action.resultPrsId
      };

    case actionTypes.DELETE_EMPLOYEE :
      return {
        ...state,
        employees: state.counter +1
      };

    default: return state;
  }
};

export default reducer;
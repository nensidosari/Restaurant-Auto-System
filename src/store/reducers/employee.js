import * as actionTypes from '../actions';

const initialState = {
  employees: [],
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ADD_EMPLOYEE :
      const updatedEmployees = state.employees.concat(action.personData);
      return {
        ...state,
        employees: updatedEmployees
      };

    case actionTypes.DELETE_EMPLOYEE :
      return {
        ...state,
        employees: state.counter +1
      };

  }

  return state;
};

export default reducer;
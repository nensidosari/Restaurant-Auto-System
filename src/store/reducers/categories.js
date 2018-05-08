import * as actionTypes from '../actions/actionTypes';

const initialState = {
  categories: [],
  mappedCategories: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.GET_CATEGORIES :
      const updatedCategories = action.categories;
      return {
        ...state,
        categories: updatedCategories
      };
    case actionTypes.GET_MAPPED_CATEGORIES :
      const newCategories = action.mappedCategories.map(cat => (
        {
          show: false,
          active: false,
          name: cat.name
        }
      )
    );
      return {
        ...state,
        mappedCategories: newCategories
      };
    case actionTypes.SELECT_CATEGORY :
      let newCategory = [];
      for (let key in state.mappedCategories){
        if(state.mappedCategories[key].name === action.category){
           newCategory.push({
            show: true,
            active: true,
            name: action.category
          });
        }
        if (state.mappedCategories[key].name !== action.category){
          newCategory.push({...state.mappedCategories[key], show: false, active: false});
        }
      }
      return {
        ...state,
        mappedCategories: newCategory
      };
    default: return state;

  }
};

export default reducer;
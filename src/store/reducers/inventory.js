import * as actionTypes from '../actions/actionTypes';

const initialState = {
  inventory: [],
  item: ''
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.GET_INVENTORY :
      let updatedInventory = action.inventory;
      return {
        ...state,
        inventory: updatedInventory,
      };
    case actionTypes.DECREASE_INVENTORY : {

      let newInventory = [];

      for (let key in state.inventory) {

        if (state.inventory[key].productName === action.product) {
          newInventory.push({
            ...state.inventory[key],
            quantity: state.inventory[key].quantity - 1
          });
        }
        if (state.inventory[key].productName !== action.product) {
          newInventory.push({...state.inventory[key]});
        }
      }
      return {
        ...state,
        inventory: newInventory,
      };
    }

    case actionTypes.INCREASE_INVENTORY : {

      let newInventory = [];

      for (let key in state.inventory) {

        if (state.inventory[key].productName === action.product) {
          newInventory.push({
            ...state.inventory[key],
            quantity: state.inventory[key].quantity + 1
          });
        }
        if (state.inventory[key].productName !== action.product) {
          newInventory.push({...state.inventory[key]});
        }
      }
      return {
        ...state,
        inventory: newInventory,
      };
    }
    case actionTypes.GET_ITEM : {

      let newItem = '';

      for (let key in state.inventory) {

        if (state.inventory[key].productName === action.item) {
          newItem = {
            name: state.inventory[key].productName,
            quantity: 1,
            price: state.inventory[key].sellingPrice
          };
        }

      }
      return {
        ...state,
        item: newItem,
      };
    }
    default: return state;
  }
};

export default reducer;
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tableSelected: 'No Table Selected',
  items : [],
  totalPrice: 0
};

const searchItems = (state, action) => {
  let updatedItem = '';
  let price = 0;
  let updatedItems = state.items.filter(result => result.name !== action.item.name );

  for(let key in state.items) {
    if(state.items[key].name === action.item.name){
      let p = parseInt(state.items[key].singlePrice) * (parseInt(state.items[key].quantity) + 1);
      updatedItem = {
        name: state.items[key].name,
        quantity: state.items[key].quantity +1,
        price:  p,
        singlePrice: state.items[key].singlePrice
      }
    }
  }

  if(updatedItem === ''){
    updatedItems.push(action.item);
  }else {
    updatedItems.push(updatedItem);
  }

  for(let key in updatedItems) {
    price = price + parseInt(updatedItems[key].price);
  }

  return {
    ...state,
    items: updatedItems,
    totalPrice: price
  };
};

const decreaseItems = (state, action) => {
  let updatedItem = '';
  let price = 0;
  let updatedItems = state.items.filter(result => result.name !== action.item );

  for(let key in state.items) {
    if(state.items[key].name === action.item){
      if(parseInt(state.items[key].quantity )-1 !== 0) {
        let p = parseInt(state.items[key].singlePrice) * (parseInt(state.items[key].quantity) - 1);
        updatedItem = {
          name: state.items[key].name,
          quantity: state.items[key].quantity - 1,
          price: p,
          singlePrice: state.items[key].singlePrice
        }
      }
    }
  }

  if(updatedItem !== ''){
    updatedItems.push(updatedItem);
  }

  for(let key in updatedItems) {
    price = price + parseInt(updatedItems[key].price);
  }

  return {
    ...state,
    items: updatedItems,
    totalPrice: price
  };
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.SELECT_TABLE :
      const updatedTable= action.tableNr;
      return {
        ...state,
        tableSelected: updatedTable
      };
    case actionTypes.ADD_ITEM_ORDER :
       return searchItems(state,action);

    case actionTypes.DECREASE_ITEM_QUANTITY :
      return decreaseItems(state,action);

    case actionTypes.RESET_ORDER :
      return {
        ...initialState
      }

    default: return state;

  }
};

export default reducer;
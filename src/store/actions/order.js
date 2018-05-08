import * as actionTypes from "./actionTypes";
import axios from 'axios';


export const selectTable = (table) => {
  return {
    type: actionTypes.SELECT_TABLE,
    tableNr: table
  };
};


export const getItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM_ORDER,
    item: item
  };
};

export const decreaseItemQuantity = (item) => {
  return {
    type: actionTypes.DECREASE_ITEM_QUANTITY,
    item: item
  };
};

export const getItems = (item) => {
  return dispatch => {
    axios.get('https://restaurant-auto-system.firebaseio.com/purchased.json')
      .then(response => {
        let found = '';
        for (let key in response.data ){
          if(response.data[key].productName === item){
            found = {
              name: response.data[key].productName,
              quantity: 1,
              price:  response.data[key].sellingPrice,
              singlePrice:  response.data[key].sellingPrice
            }
          }
        }
        dispatch(getItem(found));

      }).catch(error => {
      console.log(error);
    });
  };
};

export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM_ORDER,
    item: item
  };
};

export const resetOrder = () => {
  return {
    type: actionTypes.RESET_ORDER
  };
};

export const saveOrder = (order) => {
  return dispatch => {
    axios.post('https://restaurant-auto-system.firebaseio.com/orders.json', order)
      .then(response => {

        dispatch(resetOrder());
      }).catch(error => {
      console.log(error);
    });
  };
};




import * as actionTypes from "./actionTypes";
import axios from "axios/index";

export const storeInventory = (inventory) => {
  return {
    type: actionTypes.GET_INVENTORY,
    inventory: inventory
  };
};

export const getInventory = () => {
  return dispatch => {
    axios.get('https://restaurant-auto-system.firebaseio.com/purchased.json')
      .then(response => {
        const inventory = [];
        for (let key in response.data ){
          inventory.push({
            ...response.data[key],
            id: key
          })
        }
        dispatch(storeInventory(inventory));
      }).catch(error => {
        console.log(error);
    });
  };
};

export const addInventory = (purchased) => {
  return dispatch => {
    axios.post('https://restaurant-auto-system.firebaseio.com/purchased.json', purchased)
      .then(response => {
        dispatch(getInventory());
      }).catch(error => {
          console.log(error);
    });
  };
};

export const decreaseInventory = (product) => {
  return {
    type: actionTypes.DECREASE_INVENTORY,
    product: product
  };
}

export const increaseInventory = (product) => {
  return {
    type: actionTypes.INCREASE_INVENTORY,
    product: product
  };
}

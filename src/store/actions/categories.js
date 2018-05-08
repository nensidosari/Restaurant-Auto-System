import * as actionTypes from "./actionTypes";
import axios from "axios/index";

export const storeCategories = (categories) => {
  return {
    type: actionTypes.GET_CATEGORIES,
    categories: categories
  };
};

export const getMappedCategories = (categories) => {
  return {
    type: actionTypes.GET_MAPPED_CATEGORIES,
    mappedCategories: categories
  };
};

export const getCategories = () => {
  return dispatch => {
    axios.get('https://restaurant-auto-system.firebaseio.com/categories.json')
      .then(response => {
        const categories = [];
        for (let key in response.data ){
          categories.push({
            ...response.data[key],
            id: key
          })
        }
        dispatch(storeCategories(categories));
        dispatch(getMappedCategories(categories));
      }).catch(error => {
        console.log(error);
    });
  };
};

export const addCategories = (category) => {
  return dispatch => {
    axios.post('https://restaurant-auto-system.firebaseio.com/categories.json', category)
      .then(response => {
        dispatch(getCategories());
      }).catch(error => {
        console.log(error);
    });
  };
};

export const selectCategory = category => {
  return {
    type: actionTypes.SELECT_CATEGORY,
    category: category
  };
}
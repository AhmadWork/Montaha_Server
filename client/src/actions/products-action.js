import axios from 'axios';
import Auth from '../AuthService/Auth';

import { ACTIONS } from './types';

export const loadAllProducts = (sort = 'brand', sortOrder = 'asc') => dispatch => {
  let query;
  if (sort) {
    query = 'sort=' + sort;
    if (sortOrder) {
      query += '&sorder=' + sortOrder;
    }
  }
  const API_URL = `/api/products?${query}`;
  dispatch({ type: ACTIONS.PRODUCTS_LOADING_START });
  axios
    .get(API_URL)
    .then(response => {
      console.log(response.data);
      dispatch({
        type: ACTIONS.PRODUCTS_ALL_LOADED,
        loadedProducts: response.data
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ACTIONS.PRODUCTS_LOADING_FAILED,
        message: error.message,
        messageType: 'danger'
      });
    });
};

export const submitNewProduct = productData => dispatch => {
  const accessToken = Auth.getAccessToken();
  console.log('submitNewProduct', productData);
  const API_URL =  '/api/products';
  const headers = { Authorization: `Bearer ${accessToken}` };
  dispatch({
    type: ACTIONS.NEW_PRODUCT_SUBMITTING
  });
  axios
    .post(API_URL, productData, { headers })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: ACTIONS.NEW_PRODUCT_SUCCESS,
        addedProduct: response.data
      });
      window.scrollTo(0, 0);
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ACTIONS.NEW_PRODUCT_FAILED,
        message: error.message,
        messageType: 'danger'
      });
      window.scrollTo(0, 0);
    });
};

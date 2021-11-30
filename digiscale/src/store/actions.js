import {
  UPDATE_USER_REQUEST,
  FETCHING_USER_REQUEST,
  Clear_USER_REQUEST,
  PRODUCT_SELECTED
} from './actionsType';

export const update_user_request = data => ({
  type: UPDATE_USER_REQUEST,
  payload: data,
});

export const clear_user_request = data => ({
  type: Clear_USER_REQUEST,
  payload: data,
});

export const fetching_user_request = () => ({
  type: FETCHING_USER_REQUEST,
});

export const selected_products = data => ({
  type: PRODUCT_SELECTED,
  payload: data,
});




import {
  UPDATE_USER_REQUEST,
  FETCHING_USER_REQUEST,
  PRODUCT_SELECTED
} from './actionsType';

const initialState = {
  selectedProduct: [],
  Products: [],
};
const show_Helper = true;
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { ...state, selectedProduct: action.payload };
    case FETCHING_USER_REQUEST:
      return { ...state, selectedProduct: 'data fetch' };
    case PRODUCT_SELECTED:
      return { ...state, Products: action.payload };

    default:
      return state;
  }
};

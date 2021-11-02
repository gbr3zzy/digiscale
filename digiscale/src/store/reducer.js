import {
  UPDATE_USER_REQUEST,
  FETCHING_USER_REQUEST,
} from './actionsType';

const initialState = {
  selectedProduct: [],
};
const show_Helper = true;
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { ...state, selectedProduct: action.payload };
    case FETCHING_USER_REQUEST:
      return { ...state, selectedProduct: 'data fetch' };


    default:
      return state;
  }
};

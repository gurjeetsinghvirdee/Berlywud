import {ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_RESET} from '../constants/allProductConstants';

export const allProductsReducer = (state = {allProducts: [], loading: true}, action) => {
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return { loading: true }
        case ALL_PRODUCTS_SUCCESS:
            return { loading: false, allProducts : action.payload }
        case ALL_PRODUCTS_FAIL:     
            return { loading: false, error : action.payload }
        default:
            return state;    
    }
} 

export const productDetailsReducer = (state = {product: {}, loading: true}, action) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product : action.payload }
        case PRODUCT_DETAILS_FAIL:     
            return { loading: false, error : action.payload }
        default:
            return state; 
    }
}

export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
        return { loading: true };
      case PRODUCT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case PRODUCT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
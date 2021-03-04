import {ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, PRODUCTS_DETAILS_REQUEST, PRODUCTS_DETAILS_SUCCESS, PRODUCTS_DETAILS_FAIL} from '../constants/allProductConstants';

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
        case PRODUCTS_DETAILS_REQUEST:
            return { loading: true }
        case PRODUCTS_DETAILS_SUCCESS:
            return { loading: false, product : action.payload }
        case PRODUCTS_DETAILS_FAIL:     
            return { loading: false, error : action.payload }
        default:
            return state; 
    }
}
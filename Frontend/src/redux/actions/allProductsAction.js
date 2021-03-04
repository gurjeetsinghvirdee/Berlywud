import {ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, 
        PRODUCTS_DETAILS_REQUEST, PRODUCTS_DETAILS_SUCCESS, PRODUCTS_DETAILS_FAIL} from '../constants/allProductConstants';
import axios from 'axios'


// allProductsload action
export const allProductsload = () => async(dispatch) => {
    dispatch({
        type: ALL_PRODUCTS_REQUEST
    })
    try{
        const {data} = await axios.get('/api/products')
        dispatch({type: ALL_PRODUCTS_SUCCESS ,payload: data})
    }catch(error){
        dispatch({type: ALL_PRODUCTS_FAIL ,payload: error.message})
    }
}

// productDEtails action
export const productDetails = (productId) => async (dispatch) => {
    dispatch({type: PRODUCTS_DETAILS_REQUEST,payload: productId})
    try{
        const {data} = await axios.get(`/api/products/${productId}`)
        dispatch({type: PRODUCTS_DETAILS_SUCCESS ,payload: data})    
    }catch(error){
        dispatch({type: PRODUCTS_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}

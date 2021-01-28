import  { ALL_PRODUCTS_REQUEST ,ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL } from '../constants/allProductConstants'
import axios from 'axios'

// allProductsLoad Action
export const allProductsLoad = () => async(dispatch) =>{
    dispatch({type: ALL_PRODUCTS_REQUEST})
    try{
        const {data} = await axios.get('/api/products')
        dispatch({ type: ALL_PRODUCTS_SUCCESS, payload : data})
    }catch(error){
        dispatch({ type: ALL_PRODUCTS_FAIL, payload : error.message})
    }
}

//productDetails Action
export const productDetails = (productId) => async(dispatch) =>{
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId})
    try{
        const {data} = await axios.get(`/api/products/${productId}`)
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data})
    }catch(error){
        dispatch({type: PRODUCT_DETAILS_FAIL , payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}
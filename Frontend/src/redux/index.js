import addToBasketReducer from './addToBasket'
import { allProductsReducer, productDetailsReducer } from './reducers/allProductsReducer'
import thunk from 'redux-thunk'

const redux = require("redux")
const {combineReducers,createStore,compose,applyMiddleware} = redux

const rootReducer = combineReducers({
    Basket: addToBasketReducer,
    AllProducts : allProductsReducer,
    ProductDetails: productDetailsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
store.subscribe(() => {
   console.log(store.getState())
})

export default store

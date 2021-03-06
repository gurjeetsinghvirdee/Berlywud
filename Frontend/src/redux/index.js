import {allProductsReducer, productCreateReducer, productDetailsReducer} from './reducer/allProductsReducer'
import thunk from 'redux-thunk'
import { cartReducer } from './reducer/cartReducers'
import { userDetailsReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer } from './reducer/userReducer'
import { myOrderListReducer, orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducer/orderReducers'
import { productUpdateReducer } from './reducers/allProductsReducer'

const redux = require("redux")
const {combineReducers,createStore,compose,applyMiddleware}= redux

const initialState={
    UserSignin:{
        userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    Cart:{
        cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingAddress : localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
    }
}
const rootReducer = combineReducers({
    AllProducts : allProductsReducer,
    ProductDetails : productDetailsReducer,
    Cart : cartReducer,
    UserSignin : userSigninReducer,
    UserRegister : userRegisterReducer,
    OrderCreate : orderCreateReducer,
    OrderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    MyOrders : myOrderListReducer,
    UserDetails: userDetailsReducer,
    UserUpdateProfile: userUpdateProfileReducer,
    ProductCreate: productCreateReducer,
    ProductUpdate: productUpdateReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

store.subscribe(() => {
   console.log(store.getState())
})

export default store

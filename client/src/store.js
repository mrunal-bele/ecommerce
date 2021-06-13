import {createStore, compose, applyMiddleware, combineReducers} from "redux"
import { productDetailsReducer, productListReducer } from "./reducers/productReducers"
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducers"
import { userDetailReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer } from "./reducers/userReducer"
import { createOrderReducer, orderDetailReducer, orderListReducer, orderPayReducer } from "./reducers/orderReducers"

const initialState = {
    cart: {
        cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingDetails : localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
    },
    userSignin: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
}
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: createOrderReducer,
    orderDetail: orderDetailReducer,
    orderPay: orderPayReducer,
    orderList: orderListReducer,
    userDetails: userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store
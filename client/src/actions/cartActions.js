import axios from "axios"
import { ADD_CART_ITEM, REMOVE_CART_ITEM, SHIPPING_ADDRESS } from "../constants/cartConstants"

export const addToCart = (id,qty) => async (dispatch, getState) => {
    const item = await axios.get(`/api/products/${id}`)
    dispatch({
        type: ADD_CART_ITEM,
        payload: {
            name: item.data.name,
            image: item.data.image,
            price: item.data.price,
            countInStock: item.data.countInStock,
            product: item.data._id,
            qty 
        }
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch,getState)=>{
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: SHIPPING_ADDRESS,
        payload: data
    })
    localStorage.setItem("shippingAddress",JSON.stringify(data))
}
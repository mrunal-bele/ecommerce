import axios from "axios"
import { CART_EMPTY } from "../constants/cartConstants"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DETAIL_ORDER_REQUEST, DETAIL_ORDER_FAILURE, DETAIL_ORDER_SUCCESS, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAILURE, ORDER_PAY_RESET, ORDER_LIST_REQUEST, ORDER_LIST_FAILURE, ORDER_LIST_SUCCESS } from "../constants/orderConstants"

export const createOrder = (order) => async (dispatch,getState) => {
    dispatch({type:CREATE_ORDER_REQUEST, payload: order})
    try {
        const {userSignin:{userInfo}} = getState()
        const {data} = await axios.post('/api/orders',order,{
            headers: {
                authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({type: CREATE_ORDER_SUCCESS, payload: data.order})
        dispatch({type: CART_EMPTY})
        localStorage.removeItem('cartItems')
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const detailsOrder = (id) => async (dispatch,getState)=>{
    dispatch({type: DETAIL_ORDER_REQUEST, payload: id})
    try {
        const {userSignin:{userInfo}} = getState()
        const {data} = await axios.get(`/api/orders/${id}`,{
            headers: {
                authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({type: DETAIL_ORDER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: DETAIL_ORDER_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const payOrder = (order, paymentResult) => async (dispatch,getState)=>{
    dispatch({
        type: ORDER_PAY_REQUEST,
        payload: {order, paymentResult}
    })
    const {userSignin:{userInfo}} = getState()
    try {
        const {data} = await axios.put(`/api/orders/${order._id}/pay`, paymentResult, {
            headers: {
                authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data
        })
        dispatch({type:ORDER_PAY_RESET})
    } catch (error) {
        dispatch({
            type: ORDER_PAY_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listOrder = () => async (dispatch, getState) => {
    dispatch({type : ORDER_LIST_REQUEST})
    const {userSignin:{userInfo}} = getState()
    try {
        const {data} = await axios.get(`/api/orders/mine`,{
            headers: {
                authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({type: ORDER_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: ORDER_LIST_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_RESET, CREATE_ORDER_SUCCESS, DETAIL_ORDER_FAILURE, DETAIL_ORDER_REQUEST, DETAIL_ORDER_SUCCESS, ORDER_LIST_FAILURE, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_PAY_FAILURE, ORDER_PAY_REQUEST, ORDER_PAY_RESET, ORDER_PAY_SUCCESS } from "../constants/orderConstants";

export const createOrderReducer = (state={},action) => {
    switch(action.type){
        case CREATE_ORDER_REQUEST:
            return {loading : true}
        case CREATE_ORDER_SUCCESS:
            return {loading: true, success: true, order: action.payload}
        case CREATE_ORDER_FAILURE:
            return {loading: false, error: action.payload}
        case CREATE_ORDER_RESET:
            return {}
        default: return state
    }
}

export const orderDetailReducer = (state={loading: true},action) =>{
    switch(action.type){
        case DETAIL_ORDER_REQUEST:
            return {loading: true}
        case DETAIL_ORDER_SUCCESS:
            return {loading: false, order: action.payload}
        case DETAIL_ORDER_FAILURE:
            return {loading: false, error: action.payload}
        default: return state
    }
}

export const orderPayReducer = (state = {}, action) =>{
    switch(action.type){
        case ORDER_PAY_REQUEST:
            return {loading : true}
        case ORDER_PAY_SUCCESS:
            return {loading: false, success: true}
        case ORDER_PAY_FAILURE:
            return {loading: false, error: action.payload}
        case ORDER_PAY_RESET:
            return {}
        default: return state
        }
}

export const orderListReducer = (state = {orders : []}, action) => {
    switch(action.type){
        case ORDER_LIST_REQUEST:
            return {loading:true}
        case ORDER_LIST_SUCCESS:
            return {loading: false , orders: action.payload}
        case ORDER_LIST_FAILURE:
            return {loading : false, error: action.payload}
        default:
            return state
    }
}
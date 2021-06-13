import { ADD_CART_ITEM, CART_EMPTY, REMOVE_CART_ITEM, SHIPPING_ADDRESS } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type){
        case ADD_CART_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(x=>x.product===item.product)
            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map(x=>x.product===existItem.product ? item:x)
                }
            }else{
                return{
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        
        case REMOVE_CART_ITEM:
            const id = action.payload
            return {...state, cartItems: state.cartItems.filter(x=>x.product!==id)}
        
        case SHIPPING_ADDRESS:
            return {...state, shippingAddress: action.payload}

        case CART_EMPTY:
            return {...state, cartItems: []}
        default: return state
    }
}
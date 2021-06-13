
import Ecommerce from "../api/Ecommerce"
import { DETAILS_FAILURE, DETAILS_REQUEST, DETAILS_SUCCESS, PROFILE_UPDATE_FAILURE, PROFILE_UPDATE_REQUEST, PROFILE_UPDATE_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"

export const signin = (email,password) => async (dispatch) =>{
    dispatch({
        type: SIGN_IN_REQUEST, 
        payload: {email, password}
    })
    try {
        const {data} = await Ecommerce.post('api/users/signin',{email,password})
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: data
        })
        localStorage.setItem("userInfo",JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: SIGN_IN_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const register = (name,email,password) => async (dispatch) =>{
    dispatch({
        type: REGISTER_REQUEST, 
        payload: {email, password}
    })
    try {
        const {data} = await Ecommerce.post('api/users/register',{name,email,password})
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: data
        })
        localStorage.setItem("userInfo",JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: REGISTER_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const signout = () => (dispatch)=>{
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    dispatch({
        type: USER_SIGNOUT
    })
}

export const detailUser = (id)=> async(dispatch,getState)=>{
    dispatch({
        type: DETAILS_REQUEST,
        payload: id
    })
    const {userSignin:{userInfo}} = getState()
    try {
        const {data} = await Ecommerce.get(`/api/users/${id}`,{
            headers: {
                authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({type: DETAILS_SUCCESS, payload : data})
    } catch (error) {
        dispatch({
            type: DETAILS_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateUserProfile = (user) => async(dispatch,getState) => {
    dispatch({type: PROFILE_UPDATE_REQUEST, payload: user})
    const {userSignin:{userInfo}} = getState()
    try {
        const {data} = await Ecommerce.put(`/api/users/profile`,user,{
            headers: {
                authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({type:PROFILE_UPDATE_SUCCESS, payload: data})
        dispatch({type: SIGN_IN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: PROFILE_UPDATE_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
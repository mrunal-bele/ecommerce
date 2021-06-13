import { DETAILS_FAILURE, DETAILS_REQUEST, DETAILS_SUCCESS, PROFILE_UPDATE_FAILURE, PROFILE_UPDATE_REQUEST, PROFILE_UPDATE_RESET, PROFILE_UPDATE_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";

export const userSigninReducer = (state= {},action) => {
    switch(action.type){
        case SIGN_IN_REQUEST:
            return { loading: true }
        case SIGN_IN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case SIGN_IN_FAILURE:
            return { loading: false, error: action.payload }
        case USER_SIGNOUT:
            return {}
        default: return state
    }
}

export const userRegisterReducer = (state= {},action) => {
    switch(action.type){
        case REGISTER_REQUEST:
            return { loading: true }
        case REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case REGISTER_FAILURE:
            return { loading: false, error: action.payload }
        default: return state
    }
}

export const userDetailReducer = (state = {loading:true},action) =>{
    switch(action.type){
        case DETAILS_REQUEST:
            return {loading : true}
        case DETAILS_SUCCESS:
            return {loading: false, user: action.payload}
        case DETAILS_FAILURE:
            return {loading:false, error: action.payload}
        default: return state
    }
}

export const userUpdateProfileReducer = (state = {} , action) => {
    switch(action.type){
        case PROFILE_UPDATE_REQUEST:
            return {loading : true}
        case PROFILE_UPDATE_SUCCESS:
            return {loading: false, success: true}
        case PROFILE_UPDATE_FAILURE:
            return {loading:false, error: action.payload}
        case PROFILE_UPDATE_RESET:
            return {}
        default: return state
}
}
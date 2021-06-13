import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { detailUser, updateUserProfile } from '../actions/userActions'
import { PROFILE_UPDATE_RESET } from '../constants/userConstants'

export const ProfileScreen = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const dispatch = useDispatch()
    const userSignin = useSelector(state=>state.userSignin)
    const {userInfo} = userSignin
    const userDetails = useSelector(state=>state.userDetails)
    const {loading, error, user} = userDetails
    const userUpdateProfile = useSelector(state=>state.userUpdateProfile)
    const { loading: loadingUpdate, success: successUpdate, error: errorUpdate} = userUpdateProfile
    useEffect(()=>{
        if(!user){
            dispatch({type: PROFILE_UPDATE_RESET})
            dispatch(detailUser(userInfo._id))
        }else {
            setname(user.name)
            setemail(user.email)
        }
        
    },[dispatch,userInfo._id,user])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password!==confirmPassword){
            alert("passwords didn't match")
        }else{
            dispatch(updateUserProfile({id: user._id, name, email, password}))
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="form">
                <div>
                    <h1>
                        User Profile
                    </h1>
                </div>
                {
                    loading ? <h1>...loading</h1> : error ? <h1>{error}</h1> : 
                    <>
                    {
                        loadingUpdate && <h1>...Loading</h1> 
                    }
                    {
                        errorUpdate && <h2 className="signin-error">Error..Please try again</h2>
                    }
                    {
                        successUpdate && <h2 className="signin-success">Profile Updated Successfully</h2>
                    }
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Enter name" value={name} onChange={(e)=>setname(e.target.value)}></input> 
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)}></input> 
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" placeholder="Enter password" value={password} onChange={(e)=>setpassword(e.target.value)}></input> 
                        </div>
                        <div>
                            <label htmlFor="confirm password">Confirm Password</label>
                            <input id="confirm password" type="password" placeholder="Enter confirm password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)}></input> 
                        </div>
                        <div>
                            <button className="primary" type="submit">Update</button>
                        </div>
                    </>
                }
            </form>
        </div>
    )
}

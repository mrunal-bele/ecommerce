import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions';

const SigninScreen = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'
    const usersignin = useSelector(state=>state.userSignin)
    const {userInfo, loading, error} = usersignin
    
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[props.history,userInfo,redirect])

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(signin(email,password))
    }
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <h1 style={{textAlign: 'center'}}>SIGN IN</h1>
                </div>
                {loading && <h2>...Loading</h2>}
                {error && <h2 className="signin-error">{error}</h2>}
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email" required></input> 
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter password" required></input>
                </div>
                <div>
                    <button type="submit" className="primary">Sign In</button>
                </div>
                <div>
                    <div>
                        New Customer? <Link to={`/register?redirect=${redirect}`}>Register Now</Link> 
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SigninScreen
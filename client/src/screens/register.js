import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions';

const RegisterScreen = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch()
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'
    const userRegister = useSelector(state=>state.userRegister)
    const {userInfo, loading, error} = userRegister
    
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[props.history,userInfo,redirect])

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(password!==confirmPassword){alert(`password didn't match`)}
        else{dispatch(register(name,email,password))}
    }
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <h1 style={{textAlign: 'center'}}>REGISTER</h1>
                </div>
                {loading && <h2>...Loading</h2>}
                {error && <h2 className="signin-error ">{error}</h2>}
                <div>
                    <label htmlFor="Name">Name</label>
                    <input id="Name" type='text' onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Name" required></input> 
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email" required></input> 
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter password" required></input>
                </div>
                <div>
                    <label htmlFor="Confirm password">Confirm Password</label>
                    <input id="Confirm password" type="password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="Confirm password" required></input>
                </div>
                <div>
                    <button type="submit" className="primary">Register</button>
                </div>
                <div>
                    <div>
                        Already Registered? {' '}<Link to={`/signin?redirect=${redirect}`}>Sign In</Link> 
                    </div>
                </div>
            </form>
        </div>
    )
}
export default RegisterScreen
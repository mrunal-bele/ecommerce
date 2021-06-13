import React from 'react'
import { Link } from 'react-router-dom'
const SignOutScreen = () => {
    return (
            <h1 style={{textAlign: 'center'}}>You have been logged out. <Link to="/">Click here</Link> for homescreen</h1>
    )
}

export default SignOutScreen

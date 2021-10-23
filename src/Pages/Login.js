import React from 'react'

import AuthForm from '../components/AuthForm'
import { startLoginUser } from '../actions/auth'

const Login = () => {

    const handleLogin = (dispatch, email, password) => {
        startLoginUser(dispatch, email, password)
    }

    return (
        <div>
            <AuthForm 
                handleLogin={handleLogin}
            />
        </div>
    )
}

export default Login

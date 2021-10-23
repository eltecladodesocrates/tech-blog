import React, { useState, useContext } from 'react'

import { AuthContext } from '../context/auth'

const AuthForm = ({ handleLogin }) => {

    const {user, userDispatch} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        handleLogin(userDispatch, email, password)
    }

    console.log(user)

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='email' value={email} onChange={ e => setEmail(e.target.value)}/>
            <input type='password' placeholder='password' value={password} onChange={ e => setPassword(e.target.value)} />
            <button>Log In</button>
        </form>
    )
}

export default AuthForm

import React, { createContext, useReducer, useEffect } from 'react'

import { authReducer } from '../reducers/auth'
import { startGetUser } from '../actions/auth'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [user, userDispatch] = useReducer(authReducer, {})

    useEffect(() => {
        !user.email && startGetUser(userDispatch)
    })

    return (
        <AuthContext.Provider value={{ user, userDispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

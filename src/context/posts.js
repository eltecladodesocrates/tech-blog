import React, { useReducer, createContext, useEffect } from 'react'
import { postReducer } from '../reducers/post'

import { startGetPosts } from '../actions/post'

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {

    const [posts, postsDispatch] = useReducer(postReducer, [])

    useEffect(() => {
        // startGetPosts(postsDispatch)
    }, [])

    return (
        <PostContext.Provider value={{ posts, postsDispatch }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider
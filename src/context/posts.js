import React, { useReducer, createContext } from 'react'
import { postReducer } from '../reducers/post'

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {

    const [posts, postsDispatch] = useReducer(postReducer, [{
        id: 123456789,
        title: 'First Post Title',
        content: '## Subitulo\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }])

    return (
        <PostContext.Provider value={{ posts, postsDispatch }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider
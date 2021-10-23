import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { PostContext } from '../context/posts'

const Dashboard = () => {

    const {posts} = useContext(PostContext)

    return (
        <div>
            {posts.map( post => <NavLink key={post.id} to={`post/${post.id}`}><h2 >{post.title}</h2></NavLink>)}
        </div>
    )
}

export default Dashboard

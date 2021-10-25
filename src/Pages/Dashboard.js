import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { PostContext } from '../context/posts'

const Dashboard = () => {

    const {posts} = useContext(PostContext)

    return (
        <div>
            {posts.map( post => {
                return (
                    <div key={post.id}>
                        <NavLink to={`post/${post.id}`}><h2 >{post.title}</h2></NavLink>
                        <NavLink to={`edit/${post.id}`}><p>Edit</p></NavLink>
                    </div>
                )
            })}
        </div>
    )
}

export default Dashboard

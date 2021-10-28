import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { PostContext } from '../context/posts'
import { startDeletePost } from '../actions/post'

const Dashboard = () => {

    const {posts, postsDispatch} = useContext(PostContext)

    const handleDeletePost = (id, title) => {
        startDeletePost(postsDispatch, id, title)
    }

    return (
        <div>
            {posts.map( post => {
                return (
                    <div key={post.id}>
                        <NavLink to={`post/${post.id}`}><h2 >{post.title}</h2></NavLink>
                        <NavLink to={`edit/${post.id}`}><p>Edit</p></NavLink>
                        <button onClick={() => handleDeletePost(post.id, post.title)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Dashboard

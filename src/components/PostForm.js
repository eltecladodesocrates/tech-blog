import React, { useState, useContext } from 'react'

import { PostContext } from '../context/posts'
import { createPost } from '../actions/post'

const PostForm = ({ post }) => {

  const [title, setTitle] = useState(post ? post.title : '')
  const [content, setContent] = useState(post ? post.content : '')
  const {posts, postsDispatch} = useContext(PostContext)
  const id = Date.now()
  console.log(post)

  const handleAddContent = e => {
    e.preventDefault()
    postsDispatch(createPost(id, title, content))
  }

  console.log(posts)

  return (
    <div>
      <form onSubmit={handleAddContent}>
        <input placeholder='Post Title' value={title} onChange={ e => setTitle(e.target.value)}/>
        <textarea placeholder='content' value={content} onChange={ e => setContent(e.target.value)}/>
        <button>{post ? 'Edit Post' : 'Add Post'}</button>
      </form>
    </div>

  )
}

export default PostForm

import React, { useState, useContext } from 'react'

import { PostContext } from '../context/posts'
import { createPost } from '../actions/post'

const PostForm = () => {
  // It is working well, now we need router and components

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const {posts, postsDispatch} = useContext(PostContext)
  const id = Date.now()
  console.log(content)

  const handleAddContent = e => {
    e.preventDefault()
    setContent(e.target.content.value)
    postsDispatch(createPost(id, title, e.target.content.value))
  }

  console.log(posts)

  return (
    <div>
      <form onSubmit={handleAddContent}>
        <input placeholder='Post Title' value={title} onChange={ e => setTitle(e.target.value)}/>
        <textarea placeholder='content' name='content'/>
        <button>Add Post</button>
      </form>
    </div>

  )
}

export default PostForm

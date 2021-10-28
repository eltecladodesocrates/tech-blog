import React, { useState, useContext } from 'react'

import { PostContext } from '../context/posts'
import { startCreatePost, startUpdatePost } from '../actions/post'

const PostForm = ({ post }) => {

  const [title, setTitle] = useState(post ? post.title : '')
  const [content, setContent] = useState(post ? post.content : '')
  const {posts, postsDispatch} = useContext(PostContext)

  const handleAddContent = e => {
    e.preventDefault()
    if (post) {
      startUpdatePost(postsDispatch, post.id, {title, content})
    } else {
      startCreatePost(postsDispatch, {title, content})
    }
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

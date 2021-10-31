import React, { useState, useContext } from 'react'
import moment from 'moment'

import { PostContext } from '../context/posts'
import { startCreatePost, startUpdatePost } from '../actions/post'

const PostForm = ({ post }) => {

  const [title, setTitle] = useState(post ? post.title : '')
  const createdAt = post ? post.createdAt : moment().format('MMMM Do YYYY')
  const [topic, setTopic] = useState(post ? post.topic : 'html/css')
  const [content, setContent] = useState(post ? post.content : '')
  const {posts, postsDispatch} = useContext(PostContext)
  post && console.log(post.topic)

  const handleAddContent = e => {
    e.preventDefault()
    if (post) {
      startUpdatePost(postsDispatch, post.id, {title, content, createdAt, topic})
    } else {
      startCreatePost(postsDispatch, {title, content, createdAt, topic})
    }
  }

  console.log(posts)

  return (
    <div>
      <form onSubmit={handleAddContent}>
        <select onChange={e => setTopic(e.target.value)} defaultValue={topic}>
          <option value='html/css'>HTML/CSS</option>
          <option value='javascript'>JavaScript</option>
          <option value='react'>React</option>
        </select>
        <input placeholder='Post Title' value={title} onChange={ e => setTitle(e.target.value)}/>
        <textarea placeholder='content' value={content} onChange={ e => setContent(e.target.value)}/>
        <button>{post ? 'Edit Post' : 'Add Post'}</button>
      </form>
    </div>

  )
}

export default PostForm

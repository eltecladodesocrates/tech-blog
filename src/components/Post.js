/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'


import { PostContext } from '../context/posts'

const Post = ({ match }) => {

    const {posts} = useContext(PostContext)

    return (
        <div>
            {posts.map(post => {
                // eslint-disable-next-line eqeqeq
                if (post.id == match.params.id) {
                    return (
                        <div className='post-content' key={post.id}>
                            <ReactMarkdown children={post.content}/>
                        </div>
                    )
                }
            })}

        </div>
    )
}

export default Post

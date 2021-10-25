/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, {useContext} from 'react'

import PostForm from '../components/PostForm'
import { PostContext } from '../context/posts'

const Edit = ({ match }) => {

    const {posts} = useContext(PostContext)

    return (
        <div>
            {posts.map( post => {
                if (post.id == match.params.id) {
                    return (
                        <PostForm 
                            key={post.id}
                            post={post}
                        />
                    )
                }
            })}
        </div>
    )
}

export default Edit


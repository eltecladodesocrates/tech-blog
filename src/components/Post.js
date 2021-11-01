/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
                            <ReactMarkdown 
                                children={post.content}
                                components={{
                                    code({node, inline, className, children, ...props}) {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return !inline && match ? (
                                            <SyntaxHighlighter 
                                                children={String(children).replace(/\n$/, '')}
                                                style={dark}
                                                language={match[1]}
                                                PreTag='div'
                                                {...props}
                                            />
                                        ) : (
                                            <pre className={className} {...props}>
                                                {children}
                                            </pre>
                                        )
                                    }
                                }}
                            />
                        </div>
                    )
                }
            })}

        </div>
    )
}

export default Post

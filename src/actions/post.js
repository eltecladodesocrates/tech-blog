import { getDatabase, ref, push, get, child, remove, update } from "firebase/database"
import { db } from "../firebase/firebase"
const dbRef = ref(getDatabase())

// Create

const createPost = ({title, content, createdAt, topic}, id) => ({
    type: 'CREATE_POST',
    post: {
        id,
        title,
        content,
        createdAt,
        topic
    }
})

export const startCreatePost = (dispatch, post) => {
    push(ref(db, 'posts'), post).then( res => {
        const postId = res._path.pieces_[1]
        dispatch(createPost(post, postId))
    })
}

// Read

export const getPosts = (posts) => ({
    type: 'GET_POSTS',
    posts
})

export const startGetPosts = (dispatch) => {
    get(child(dbRef, 'posts')).then( snapshot => {
        const posts = []
        snapshot.forEach( post => {
            posts.push({
                id: post.key,
                ...post.val()
            })
        })
        console.log('Getting posts from DB')
        dispatch(getPosts(posts))
    })
}

// Update

const updatePost = (id, updates) => ({
    type: 'UPDATE_POST',
    id,
    updates
})

export const startUpdatePost = (dispatch, id, updates) => {
    update(ref(db, `posts/${id}`), updates).then(() => {
        dispatch(updatePost(id, updates))
        console.log('Post has been updated')
    })
}

// Delete

const deletePost = (id) => ({
    type: 'DELETE_POST',
    id
}) 


export const startDeletePost = (dispatch, id, title) => {
    remove(ref(db, `posts/${id}`)).then(() => {
        dispatch(deletePost(id))
        console.log(`Post "${title}" has been removed`)
    })
}


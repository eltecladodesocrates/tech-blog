import { getDatabase, ref, push, get, child, remove } from "firebase/database"
import { db } from "../firebase/firebase"
const dbRef = ref(getDatabase())

// Create

const createPost = ({title, content}, id) => ({
    type: 'CREATE_POST',
    post: {
        id,
        title,
        content
    }
})

export const startCreatePost = (dispatch, post) => {
    push(ref(db, 'posts'), post).then( res => {
        const postId = res._path.pieces_[1]
        dispatch(createPost(post, postId))
    })
}

// Read

const getPosts = (posts) => ({
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
// import { getDatabase ,push, ref, child, get, remove } from 'firebase/database'
// import { db } from '../firebase/firebase'
// const dbRef = ref(getDatabase())



// export const updateHabit = (id) => ({
//     type: 'UPDATE_HABIT',
//     id
// })

// // Building the action

// const deleteHabit = (id, updates) => ({
//     type: 'DELETE_HABIT',
//     id,
//     updates
// })

// export const startDeleteHabit = (dispatch, uid, id) => {
//     remove(ref(db, `users/${uid}/habits/${id}`)).then(() => {
//         dispatch(deleteHabit(id))
//         console.log(`Item ${id} removed`)
//     })
// }



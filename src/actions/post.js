import { getDatabase, ref, push, get, child } from "firebase/database"
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

// import { getDatabase ,push, ref, child, get, remove } from 'firebase/database'
// import { db } from '../firebase/firebase'
// const dbRef = ref(getDatabase())


// export const startCreateHabit = (dispatch, habit, uid) => {
//     // Save to Real Time DB
//     // push(ref(db, `users/${uid}/habits`), habit).then( res => {
//     //     const habitId = res._path.pieces_[3]
//     //     dispatch(createHabit(habit, habitId))
//     // })

//     // Save to local storage
//     const habitId = Date.now()
//     dispatch(createHabit(habit, habitId))
// }

// export const startGetHabits = (dispatch, uid, habits = '') => {

//     // Get data from real time db
//     // get(child(dbRef, `users/${uid}/habits`)).then(( snapshot) => {
//     //     const habits = []
//     //     snapshot.forEach( child => {
//     //         habits.push({
//     //             id: child.key,
//     //             ...child.val()
//     //         })
//     //     })
//     //     console.log('Getting habits from DB');
//     //     dispatch(getHabits(habits))
//     // }).catch( e => {
//     //     console.log(e)
//     // })  

//     // Get data from local storage
//     dispatch(getHabits(habits)) 

// }

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



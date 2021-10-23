import { auth, loginUser } from "../firebase/firebase"

const getUser = (uid, email) => ({
    type: 'GET_USER',
    user: {
        uid,
        email
    }
})

export const startGetUser = (dispatch) => {
    auth.onAuthStateChanged( user => {
        user !== null && dispatch(getUser(user.uid, user.email))
    })
}

export const startLoginUser = (dispatch, email, password) => {
    return loginUser(auth, email, password).then( res => {
        dispatch(getUser(res.user.uid, email))
    })
}

// import { auth, signupUser, loginUser } from "../firebase/firebase"

// const getUser = (uid, email) => ({
//     type: 'GET_USER',
//     user: {
//         uid,
//         email
//     }
// })

// export const startGetUser = dispatch => {
//     auth.onAuthStateChanged( user => {
//         user !== null && dispatch(getUser(user.uid, user.email))
//     })
// }

// export const startLogInUser = (dispatch, email, password) => {
//     return loginUser(auth, email, password).then( res => {
//         dispatch(getUser(res.user.uid, email))
//     })
// }
export const postReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            return [
                ...state,
                action.post
            ]
        
        case 'GET_POSTS':
            return action.posts

        case 'UPDATE_POST':

            return state.map( post => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        ...action.updates
                    }
                } else {
                    return post
                }
            })

        case 'DELETE_POST':
            return state.filter( post => action.id !== post.id)
    
        default:
            return state
    }
}
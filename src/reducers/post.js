export const postReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            return [
                ...state,
                action.post
            ]
        
        case 'GET_POSTS':
            return action.posts

        case 'DELETE_POST':
            return state.filter( post => action.id !== post.id)
    
        default:
            return state
    }
}
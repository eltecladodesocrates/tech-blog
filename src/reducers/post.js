export const postReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            
            return [
                ...state,
                action.post
            ]
        
        case 'GET_POSTS':
            return action.posts

        
    
        default:
            return state
    }
}
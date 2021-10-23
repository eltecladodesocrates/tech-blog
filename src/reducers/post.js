export const postReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            
            return [
                ...state,
                action.post
            ]
    
        default:
            return state
    }
}
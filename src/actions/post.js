export const createPost = (id, title, content) => ({
    type: 'CREATE_POST',
    post: {
        id,
        title,
        content
    }
})
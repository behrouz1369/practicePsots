

export default function postsReducer(posts,action) {

    switch (action.type) {
        case 'initialPosts':
            return action?.posts

        default:
            return posts
    }
}

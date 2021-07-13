export default {
    actions: {
        async fetchPosts(context) {
            const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const posts = await resPosts.json()  
            
            context.commit('updatePosts', posts)
        },
        async fetchComments(context) {
            const resComments = await fetch(`https://jsonplaceholder.typicode.com/comments`);
            const comments = await resComments.json()  
            
            context.commit('updateComments', comments)
        },
        async fetchUsers(context) {
            const resUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const users = await resUsers.json()  
            
            context.commit('updateUsers', users)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        updateComments(state,comments) {
            state.comments = comments
        },
        updateUsers(state,users) {
            state.users = users
        },
    },
    state: {
        posts: [],
        comments: [],
        users: [],
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        postsCount(state) {
            return state.posts.length
        },
        allComments(state) {
            return state.comments
        },
        allUsers(state) {
            return state.users
        }
    },
}
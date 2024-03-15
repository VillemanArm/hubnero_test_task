export const teamModule = {
    state: {
        link: 'link from teamModule'
    },
    getters: {
        // sortedAndSearchedPosts(state, getters) {
        //     return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery) || post.body.toLowerCase().includes(state.searchQuery))
        // },

    },
    mutations: {
        // setPosts(state, posts) {
        //     state.posts = posts;
        // },
       
    },
    actions: {
        // async getPosts({state, commit}) {
        //     commit('setPage', 1)
        //     try {
        //         commit('setPostsLoading', true)
        //         const response = await axios.get(
        //             state.serverURL, {
        //                 params: {
        //                     _sort: 'date,id',
        //                     _order: 'desc,desc',
        //                     _page: state.page,
        //                     _per_page: state.limit
        //                 }
        //             }
        //         )
        //         commit( 'setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        //         commit('setPosts', response.data)
        //     } catch (error) {
        //         console.log(error.message)
        //     } finally {
        //         commit('setPostsLoading', false)
        //     }
        // },
        
    },
    namespaced: true,
}
export const TeamPageModule = {
    state: {
        users: [
            {
                name: 'Sarah',
                lastName: 'Connor',
                team: 'Crosty',
                role: 'Team Lead',
                gmail: 'sarahconnor@gmail.com',
                birthday: '25.04.1994',
                age: 28,
                telegram: '@sarahconnor',
                lastLogin: '03.11.2021',
                isOnline: true,
                gender: 'female',
                hireDate: '01.02.2023',
                avatar: 'https://insight-webstudio.ru/files_for_another_projects/avatar_1.png',
            },
            {
                name: 'Ernest',
                lastName: 'Eberly',
                team: 'Flamethrower',
                role: 'Semantic Specialist',
                gmail: 'ernesteberly@gmail.com',
                birthday: '25.04.1994',
                age: 23,
                telegram: '@ErnestEberly',
                lastLogin: '03.11.2021',
                isOnline: false,
                gender: 'male',
                hireDate: '12.02.2020',
                avatar: 'https://insight-webstudio.ru/files_for_another_projects/avatar_1.png',
            },
            {
                name: 'Arnold',
                lastName: 'Brown',
                team: 'Gunters',
                role: 'Seo Specialist',
                gmail: 'arnoldbrown@gmail.com',
                birthday: '12.04.1989',
                age: 31,
                telegram: '@arnoldbrown',
                lastLogin: '02.11.2021',
                isOnline: true,
                gender: 'male',
                hireDate: '01.08.2020',
                avatar: 'https://insight-webstudio.ru/files_for_another_projects/avatar_1.png',
            },
        ]
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
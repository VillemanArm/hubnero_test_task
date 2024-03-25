export const TeamPageModule = {
    state: {
        isSortDescending: true,
        sortOption: '',
        searchQuery: '',
        searchField: '',
        isAddUser: false,
        isEditUser: false,
        users: [
            {
                id: 1,
                name: 'Sarah Connor',
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
                id: 2,
                name: 'Ernest Eberly',
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
                id: 3,
                name: 'Arnold Brown',
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
        ],

    },
    getters: {

        sortedUsers(state) {
            if (state.isSortDescending) {
                return [...state.users].sort((user1, user2) => user1[state.sortOption]?.localeCompare(user2[state.sortOption]))
            }

            return [...state.users].sort((user1, user2) => user2[state.sortOption]?.localeCompare(user1[state.sortOption]))
        },
        sortedAndSearchedUsers(state, getters) {
            if (state.searchField && state.searchQuery) {
                return getters.sortedUsers.filter(user => user[state.searchField].toLowerCase().includes(state.searchQuery))
            }
            return getters.sortedUsers
            
        },

    },
    mutations: {
        setIsSortDescending(state, bool) {
            state.isSortDescending = bool;
        },
        setSortOption(state, option) {
            state.sortOption = option
        },
        setSearchQuery(state, query) {
            state.searchQuery = query
        },
        setSearchField(state, fieldName) {
            state.searchField = fieldName
        },
        addUser(state, newUser) {
            state.users.push(newUser)
        },
        setIsAddUser(state, bool) {
            state.isAddUser = bool
        },
        setIsEditUser(state, bool) {
            state.isEditUser = bool
        },

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
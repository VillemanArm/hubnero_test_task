export const HeaderPanelModule = {
    state: {
        user: {
            name: 'Ernest',
            lastName: 'Eberly',
            avatar: 'https://insight-webstudio.ru/files_for_another_projects/avatar_1.png',
            role: 'HR'
        },
        isUnreadNotification: true,
        isSearch: false,
    },
    getters: {

    },
    mutations: {
        setIsSearch(state, bool) {
            state.isSearch = bool
        }
    },
    actions: {

    },
    namespaced: true,
}
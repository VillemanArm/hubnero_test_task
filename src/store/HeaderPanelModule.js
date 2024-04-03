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
        isMenu: false,
        isUserMenu: false,
        isNotifications: false,
    },
    getters: {

    },
    mutations: {
        setIsSearch(state, bool) {
            state.isSearch = bool
        },
        setIsMenu(state, bool) {
            state.isMenu = bool
        },
        setIsUserMenu(state, bool) {
            state.isUserMenu = bool
        },
        setIsNotifications(state, bool) {
            state.isNotifications = bool
        },
        setIsUnreadNotification(state, bool) {
            state.isUnreadNotification = bool
        },
    },
    actions: {

    },
    namespaced: true,
}
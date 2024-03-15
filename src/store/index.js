// import { createStore } from 'vuex'
import { teamModule } from '@/store/teamModule'

// export default createStore({
//     state: {
//         asideLink: 'link'
//     },
//     getters: {
//     },
//     // modules: { // данные импортируемые для отдельных компонентов, чтобы не засорять глобальный store
//     //     posts: teamModule
//     // },

// })

import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        asideLink: 'link from store'
    },
    getters: {
    },
    modules: { // данные импортируемые для отдельных компонентов, чтобы не засорять глобальный store
        team: teamModule
    },
})
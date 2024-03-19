// import { createStore } from 'vuex'
import { TeamModule } from '@/store/TeamModule'
import { NavPannelModule } from '@/store/NavPannelModule'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        asideLink: 'link from store'
    },
    getters: {
    },
    modules: { // данные импортируемые для отдельных компонентов, чтобы не засорять глобальный store
        team: TeamModule,
        nav: NavPannelModule
    },
})
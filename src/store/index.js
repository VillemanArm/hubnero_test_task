// import { createStore } from 'vuex'
import { NavPanelModule } from '@/store/NavPanelModule'
import { HeaderPanelModule } from '@/store/HeaderPanelModule'
import { TeamPageModule } from '@/store/TeamPageModule'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    getters: {
    },
    modules: {
        nav: NavPanelModule,
        header: HeaderPanelModule,
        team: TeamPageModule,
    },
})
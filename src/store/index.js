// import { createStore } from 'vuex'
import { NavPannelModule } from '@/store/NavPannelModule'
import { HeaderPannelModule } from '@/store/HeaderPannelModule'
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
        nav: NavPannelModule,
        header: HeaderPannelModule,
        team: TeamPageModule,
    },
})
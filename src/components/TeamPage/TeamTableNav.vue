<script>

export default  {
    components: {},
    props: {
        propsTemplate: {
            type: Function,
            required: true,
        },
        },
    data() {
        return {
        
        }
    },
    methods: {

    },
}
</script>

<template>
    <div v-if="$store.getters['team/maxPage'] > 1" class="team-table__nav">
        <div :class="{ 'team-table__nav-arrow': true, 'team-table__nav-arrow_active': $store.state.team.currentPage !== 1 }"
            @click="$store.commit('team/decreaseCurrentPage')">
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8591AE">
                <path d="M4.66666 0.666626L1.33333 3.99996L4.66666 7.33329" stroke="evenodd" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>

        <div v-for="page in $store.getters['team/maxPage']" :key="page">
            <div v-if="page === 1 || page === $store.getters['team/maxPage'] || (page <= $store.state.team.currentPage + 2 && page >= $store.state.team.currentPage - 2)"
                :class="{ 'team-table__nav-button': true, 'team-table__nav-button_active': page === $store.state.team.currentPage }"
                @click="$store.commit('team/setCurrentPage', page)">
                <div>{{ page }}</div>
            </div>
            <div v-else-if="page === $store.state.team.currentPage + 3 || page === $store.state.team.currentPage - 3"
                class="team-table__nav-skip">
                <div>...</div>
            </div>
        </div>

        <div :class="{ 'team-table__nav-arrow': true, 'team-table__nav-arrow_active': $store.state.team.currentPage !== $store.getters['team/maxPage'] }"
            @click="$store.dispatch('team/increaseCurrentPage')">
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8591AE">
                <path d="M1.33334 7.33337L4.66668 4.00004L1.33334 0.666707" stroke="evenodd" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>

<style lang='sass'>
    @import '@/assets/constants.sass'

    .team-table__nav
        width: 1788rem 
        height: 68rem
        padding: 0 16rem
        display: flex
        align-items: center
        position: relative
        bottom: 0

    .team-table__nav-button
        width: 36rem 
        height: 36rem
        display: flex
        align-items: center
        justify-content: center

        border-radius: 12rem
        cursor: pointer
        color: $secondary-font-color

        &:hover
            background-color: $background-color
            color: $primary-font-color

    .team-table__nav-button_active
        background-color: $background-color
        color: $primary-font-color

    .team-table__nav-skip
        width: 36rem 
        height: 36rem
        display: flex
        align-items: center
        justify-content: center

        color: $secondary-font-color

    .team-table__nav-arrow
        width: 36rem 
        height: 36rem
        display: flex
        align-items: center
        justify-content: center

    .team-table__nav-arrow_active:hover
        background-color: $background-color
        cursor: pointer

        &>svg
            stroke: $primary-font-color

</style>
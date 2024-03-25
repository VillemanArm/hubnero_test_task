<script>
import TeamTableSearch from '@/components/TeamPage/TeamTableSearch'

export default  {
    components: { TeamTableSearch },
    props: {
        item: {
            type: Object,
            required: true,
        },
        },
    data() {
        return {
        
        }
    },
    methods: {
        sortDescending() {
            this.$store.commit('team/setSortOption', this.item.sortOption)
            this.$store.commit('team/setIsSortDescending', true)
        },
        sortAscending() {
            this.$store.commit('team/setSortOption', this.item.sortOption)
            this.$store.commit('team/setIsSortDescending', false)
        },

    },
}
</script>

<template>
    <div class="item">
        <div class="item__search">
            <TeamTableSearch v-if="item.isSearchable" :searchField="item.sortOption"/>
        </div>
        <div class="item__name">
            {{ item.name }}
        </div>
        <div v-if="item.isSortable" class="item__sort">
            <div class="item__sort-up" @click="sortAscending()">
                <svg width="8" height="5" viewBox="0 0 8 5" fill="#C2C9DA" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.37539 0.187909C3.6406 -0.0625283 4.07351 -0.0625283 4.33872 0.187909L7.40967 3.08781C7.8332 3.48775 7.53008 4.16675 6.92801 4.16675L0.786105 4.16675C0.184028 4.16675 -0.119093 3.48775 0.30444 3.08781L3.37539 0.187909Z"
                        fill="evenodd" />
                </svg>
            </div>
            <div class="item__sort-down" @click="sortDescending()">
                <svg width="8" height="5" viewBox="0 0 8 5" fill="#C2C9DA" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.33872 4.14559C4.07351 4.39602 3.6406 4.39602 3.37539 4.14559L0.30444 1.24568C-0.119092 0.845743 0.184028 0.166748 0.786105 0.166748L6.92801 0.166749C7.53008 0.166749 7.8332 0.845743 7.40967 1.24569L4.33872 4.14559Z"
                        fill="evenodd" />
                </svg>
            </div>

        </div>
    </div>

</template>

<style lang='sass'>
    @import '@/assets/constants.sass'

    .item
        height: 64rem
        padding-left: 16rem
        display: flex
        align-items: center
        gap: 4rem

        font-size: 12rem
        font-weight: 500
        line-height: 130%


        &:not(:last-child)
            border-right: 2rem solid $light-grey 

    .item__sort
        width: 20rem
        height: 20rem
        display: grid
        gap: 4rem
        align-content: center
        justify-content: center
        
    .item__sort-up, .item__sort-down 
        width: 8rem 
        height: 5rem

        & svg
            position: relative
            top: -7rem
            cursor: pointer

            &:hover
                fill: $primary-font-color

</style>
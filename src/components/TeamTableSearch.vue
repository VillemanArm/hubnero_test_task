<script>
import AutoInput from '@/components/UI/AutoInput'

export default  {
    components: { AutoInput },
    props: {
        searchField: {
            type: String,
            required: true,
        },
        },
    data() {
        return {

        }
    },
    methods: {
        setSearchParams() {  
            if (this.searchField !== this.$store.state.team.searchField) {
                this.$store.commit('team/setSearchField', this.searchField)
                this.$store.commit('team/setSearchQuery', '')
            } else {
                this.$store.commit('team/setSearchField', '')
            }
        },

        handleInput(query) {
            this.$store.commit('team/setSearchQuery', query)
        }
        

    },
}
</script>

<template>
    <div :class="{
        item__search: true,
    item__search_active: searchField === $store.state.team.searchField,
        }">
        <div class="item__search-icon" @click="setSearchParams()">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#8591AE"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.0948 5.69849C15.1373 7.74093 15.1373 11.0524 13.0948 13.0948C11.0524 15.1373 7.74095 15.1373 5.6985 13.0948C3.65606 11.0524 3.65606 7.74093 5.6985 5.69849C7.74095 3.65605 11.0524 3.65605 13.0948 5.69849"
                    stroke="evenodd" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.8333 15.8333L13.0917 13.0917" stroke="evenodd" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
        <AutoInput v-if="searchField === $store.state.team.searchField" class="item__search-input"
            :handleInput="handleInput" />

    </div>


</template>

<style lang='sass'>
    @import '../assets/constants.sass'

    .item__search
        position: relative

        border-radius: 6rem

        &:hover
            background-color: $block-background-color

    .item__search_active
        background-color: $block-background-color

        & svg
            stroke: $accent-color

    .item__search-icon
        cursor: pointer

        &:hover svg
            stroke: $accent-color

    .item__search-input
        position: absolute
        width: 186rem

</style>
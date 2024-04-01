<script>
import AutoInput from '@/components/UI/AutoInput.vue'

export default {
    components: { AutoInput },
    methods: {
        handleSearch() {

        },
        toggleSearch() {
            this.$store.commit('header/setIsSearch', !this.$store.state.header.isSearch)
        }
    }
}


</script>

<template>
    <div class="header-search">
        <div class="header-search__button" @click="toggleSearch()">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#8591AE"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.0948 5.69849C15.1373 7.74093 15.1373 11.0524 13.0948 13.0948C11.0524 15.1373 7.74095 15.1373 5.6985 13.0948C3.65606 11.0524 3.65606 7.74093 5.6985 5.69849C7.74095 3.65605 11.0524 3.65605 13.0948 5.69849"
                    stroke="evenodd" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.8333 15.8333L13.0917 13.0917" stroke="evenodd" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
        <transition name="header-search">
            <AutoInput v-if="$store.state.header.isSearch" class="header-search__input" :handleInput="handleSearch" />
        </transition>

    </div>


</template>

<style lang='sass'>
    @import '@/assets/constants.sass'

    .header-search
        display: flex
        align-items: center
        gap: 14rem


    .header-search__button
        width: 24rem
        height: 24rem

        border-radius: 8rem
        cursor: pointer

        &:hover
            background-color: $background-color

        & svg
            width: 100%
            height: 100%

            &:hover
                stroke: $accent-color

    .header-search__input
        width: 300rem

    .header-search-enter-active
        animation: openSearch 0.6s

    .header-search-leave-active
        animation: openSearch 0.6s reverse

    @keyframes openSearch 
        from 
            padding: 0 
            width: 0

        to 
            padding: 0 6rem
            width: 300rem
	
</style>
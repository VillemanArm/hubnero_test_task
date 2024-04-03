<script>
import DropList from '@/components/UI/DropList'

export default {
    components: { DropList },
    methods: {
        toggleUserMenu() {
            this.$store.commit('header/setIsUserMenu', !this.$store.state.header.isUserMenu)
        }
    }
}


</script>

<template>
    <div class="header__user">
        <div class="header__user-avatar">
            <img :src="$store.state.header.user.avatar" alt="avatar">
        </div>
        <div class="header__user-name">
            {{ $store.state.header.user.name }} {{ $store.state.header.user.lastName }}
        </div>
        <div class="header__user-menu">
            <div :class="{ 'header__user-menu-button': true, 'header__user-menu-button_active': $store.state.header.isUserMenu }"
                @click="toggleUserMenu()">
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" stroke="#8591AE"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.952393 1.33334L4.28573 4.66668L7.61906 1.33334" stroke="evenodd" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
            <DropList :openingCondition="$store.state.header.isUserMenu">
                <ul class="header__user-menu-list">
                    <li>
                        <a href="">Info</a>
                    </li>
                    <li>
                        <a href="">Settings</a>
                    </li>
                    <li>
                        <a href="">Quit</a>
                    </li>
                </ul>
            </DropList>
        </div>
    </div>


</template>

<style lang='sass'>
    @import '@/assets/constants.sass'
    .header__user
        padding-left: 28rem
        display: flex
        align-items: center
        gap: 12rem

        border-left: 2px solid $light-grey
        cursor: pointer

    .header__user-avatar
        width: 32rem
        height: 32rem

        & img
            border-radius: 8rem

    .header__user-name
        font-weight: 500

    .header__user-menu-button
        width: 20rem
        height: 20rem
        display: flex
        align-items: center
        justify-content: center

        background-color: $background-color
        border-radius: 6rem

        & svg
            stroke: $secondary-font-color

        &:hover
            background-color: $accent-color

            & svg
                stroke: $block-background-color

    .header__user-menu-button_active
        background-color: $accent-color

        & svg
            stroke: $block-background-color
            transform: rotate(180deg)


    .header__user-menu-list
        right: 22rem
        padding-top: 22rem

        font-size: 14rem

        & > li:not(:last-child)           
            border-bottom: 1px solid $light-grey
        

        & a:hover
            color: $accent-color
        
        & li
            min-width: 110rem
            padding: 10rem 14rem
            position: relative

            background-color: $block-background-color

	
</style>
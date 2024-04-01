<script>
// import OpeningMenu from '@/components/UI/OpeningMenu'

export default {
    // components: { OpeningMenu },
    data() {
        return {

        }
    },
    methods: {
        handleSearch() {

        },
        toggleMenu() {
            this.$store.commit('header/setIsMenu', !this.$store.state.header.isMenu)
        }
    }
}


</script>

<template>
    <div class="header-menu">
        <div class="header-menu__button" @click="toggleMenu()">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="#2A355A" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.000999451" y="0.5" width="16" height="1" rx="0.5" fill="evenodd" />
                <rect x="0.000999451" y="5.5" width="16" height="1" rx="0.5" fill="evenodd" />
                <rect x="0.000999451" y="10.5" width="16" height="1" rx="0.5" fill="evenodd" />
            </svg>
        </div>
        <!-- <OpeningMenu :openingCondition="this.$store.state.header.isMenu">
            <ul class="header-menu__list">
                <li>
                    <a href="">menu 1st lvl</a>
                    <ul>
                        <li><a href="">menu 2nd lvl</a></li>
                        <li><a href="">menu 2nd lvl</a></li>
                        <li><a href="">menu 2nd lvl</a></li>
                    </ul>

                </li>
                <li><a href="">menu 1st lvl</a></li>
                <li><a href="">menu 1st lvl</a></li>
                <li><a href="">menu 1st lvl</a></li>
                <li><a href="">menu 1st lvl</a></li>
            </ul>

        </OpeningMenu> -->
        <Transition name="opening-menu">
            <ul v-if="$store.state.header.isMenu" class=" header-menu__list">
                <li>
                    <a href="">menu 1st lvl</a>
                    <ul>
                        <li><a href="">menu 2nd lvl</a></li>
                        <li><a href="">menu 2nd lvl</a></li>
                        <li><a href="">menu 2nd lvl</a></li>
                    </ul>

                </li>
                <li><a href="">menu 1st lvl</a></li>
                <li><a href="">menu 1st lvl</a></li>
                <li><a href="">menu 1st lvl</a></li>
                <li><a href="">menu 1st lvl</a></li>
            </ul>

        </Transition>
    </div>


</template>

<style lang='sass'>
    @import '@/assets/constants.sass'
    .header-menu
        position: relative

    .header-menu__button svg:hover
        fill: $accent-color
        cursor: pointer

    .header-menu__list
        position: absolute
        list-style-type: none
        transform-origin: 0 0

        & ul
            list-style-type: none

        & li
            position: relative

            & ul
                position: absolute
                left: 100%
                top: 0

    .header-menu__list
        margin-top: 10rem

        font-size: 14rem

        & > li:not(:last-child)           
            border-bottom: 1px solid $light-grey
        

        & a:hover
            color: $accent-color
        
        & li
            min-width: 110rem
            padding: 10rem 14rem

            background-color: $block-background-color
            

    .opening-menu-enter-active
        animation: openMenu 1s

    .opening-menu-leave-active
        animation: openMenu 1s reverse

    @keyframes openMenu 
        from 
            transform: rotateX(-90deg)
            

        to 
            transform: rotateX(0deg)

    


	
</style>
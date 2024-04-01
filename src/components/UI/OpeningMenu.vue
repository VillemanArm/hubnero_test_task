<script>

export default {
    components: {},
    props: {
        openingCondition: Boolean,
    },
}

</script>

<template>
    <transition name="opening-menu">
        <div v-if="openingCondition" :class="{
            'menu-wrap': true,
            // 'menu-active': $store.state.header.isMenu,
        }">
            <slot></slot>
        </div>
    </transition>

</template>

<style lang='sass'>
    @import '../../assets/constants.sass'

    .menu-wrap
        position: absolute
        z-index: 1
        // opacity: 1

        & ul
            list-style-type: none
            // transform: rotateX(-90deg)
            transform-origin: 0 0
            transition: 0.6s linear
            // visibility: hidden
           
            & li
                position: relative

                & ul
                    position: absolute
                    left: 100%
                    top: 0

        
    // .menu-active ul
    //         transform: rotateX(0deg)
    //         visibility: visible



    // .opening-menu-enter-active, .opening-menu-leave-active 
    //     transition: opacity 1s linear

    // .opening-menu-enter-from, .opening-menu-leave-to
    //     opacity: 0

    // .opening-menu-enter-to, .opening-menu-leave-from
    //     opacity: 1

        //animation: openMenu  0.6s linear

    // .opening-menu-leave-active
    //     animation: openMenu  0.6s linear reverse

    // @keyframes openMenu 
    //     from 
    //         transform: scaleY(0.01)
    //         transform-origin: top

    //     to 
    //         transform: scaleY(1)





</style>

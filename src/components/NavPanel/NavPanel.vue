<script>
import NavLink from '@/components/NavPanel/NavLink'

export default  {
    components: {NavLink},
    props: {
        // propsTemplate: {
        //     type: Function,
        //     required: true,
        // },
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
    <div class="nav">
        <div class="nav__block">
            <div class="nav-logo">
                <div class="nav-logo__img">
                    <img src="/img/nav/logo.svg" alt="hubnero">
                </div>
            </div>
            <div class="nav-links">
                <NavLink 
                    v-for="(link, index) in $store.state.nav.links" 
                    :key="index" 
                    :to="link.link"
                    :link="link"
                />
            </div>
        </div>

    <div class="nav-add">
        <button type="button" class="nav-add__button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#8591AE" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6V14" stroke="#evenodd" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 10H6" stroke="#evenodd" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
    </div>
</template>

<style scoped lang='sass'>
    @import '@/assets/constants.sass'

    .nav
        min-height: 100vh
        display: grid
        align-content: space-between 

    .nav-logo
        height: 76rem
        display: flex
        justify-content: center
        align-items: center

    .nav-logo__img
        width: 20rem
        height: 20rem

    .nav-add
        height: 76rem
        width: 100%
        display: flex
        align-items: center
        justify-content: center

        border-top: 2rem solid $light-grey

    .nav-add__button
        width: 20rem
        height: 20rem
        display: block

        box-sizing: border-box

        background-color: $background-color
        border: none
        border-radius: 6rem

        & svg
            width: 20rem
            height: 20rem

        &:hover
            background-color: $accent-color

            & svg
                stroke: $block-background-color


</style>
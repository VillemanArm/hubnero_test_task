<script>
import NavLink from '@/components/NavLink'

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
</template>

<style scoped lang='sass'>
    @import '../assets/constants.sass'

    .nav
        min-height: 100vh

    .nav-logo
        height: 76rem
        display: flex
        justify-content: center
        align-items: center

    .nav-logo__img
        width: 20rem
        height: 20rem

</style>
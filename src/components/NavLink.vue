<script>

export default  {
    components: {},
    props: {
        link: {
            type: Object,
            required: true,
        },
        },
    data() {
        return {
        
        }
    },
    methods: {

    },
    mounted() {
        
    },
}
</script>

<template>
    <div class="nav-link">
        <div class="nav-link__selector">
            <svg 
                width="4" 
                height="20"     
                viewBox="0 0 4 20"  
                :style="{
                    fill: $route.path === link.link  ? '#8F20EF' : 'none'
                }"             
                xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M4 4C4 1.79086 2.20914 0 0 0V20C2.20914 20 4 18.2091 4 16V4Z"/>
            </svg>

        </div>

        <router-link 
            :to="link.link"
        >   
            <div 
                class="nav-link__icon" 
                :style="{
                    stroke: $route.path === link.link ? '#8F20EF' : '#8591AE'
                }"
                v-html="link.icon"
            >
            </div>
        </router-link>
    </div>

</template>

<style lang='sass'>
    @import '../assets/constants.sass'

    .nav-link
        height: 44rem
        margin-bottom: 8rem
        position: relative
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer

        &:hover 
            & .nav-link__icon>svg
                stroke: $accent-color

            & .nav-link__selector>svg
                fill: $accent-color !important

    .nav-link__selector
        width: 4rem
        height: 20rem
        position: absolute
        left: 0

        &>svg
            width: 4rem
            height: 20rem
            fill: $block-background-color

    .nav-link__icon>svg
        width: 20rem
        height: 20rem

</style>
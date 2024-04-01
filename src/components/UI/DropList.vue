<script>

export default {
    components: {},
    props: {
        openingCondition: Boolean,
    },
}

</script>

<template>
    <transition name="dropping-list">
        <slot v-if="openingCondition" class="menu-wrap"></slot>
    </transition>

</template>

<style scoped lang='sass'>
    @import '../../assets/constants.sass'

    ul  
        transform-origin: 0 0
        list-style-type: none 
        z-index: 1
        position: absolute
            
        
    .dropping-list-enter-active 
        animation: droppingList 0.5s

    .dropping-list-leave-active
        animation: droppingList 0.5s reverse

    @keyframes droppingList 
        from 
            transform: rotateX(-90deg)
            
        to 
            transform: rotateX(0deg)


</style>

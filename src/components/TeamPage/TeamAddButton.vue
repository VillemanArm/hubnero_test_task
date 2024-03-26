<script>

</script>

<template>
    <button class="team__add" type="button" @click="$store.commit('team/setIsAddUser', true)">
        <div class="team__add-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#8591AE"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6V14" stroke="#evenodd" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 10H6" stroke="#evenodd" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <span>Add new Employee</span>
    </button>

</template>

<style scoped lang='sass'>
    @import '@/assets/constants.sass'

    .team__add
        width: fit-content
        padding: 12rem 16rem
        display: flex
        align-items: center
        gap: 12rem

        color: $tertiary-font-color
        background-color: $accent-color
        border-radius: 12rem
        outline: none
        border: 2rem solid $accent-color  
        transition: all ease 0.2s 
        cursor: pointer

        &:hover          
            background-color: $block-background-color
            color: $accent-color
            

            & .team__add-icon
                background-color: $accent-color

    .team__add-icon
        width: 20rem
        height: 20rem

        background-color: rgba(255, 255, 255, 0.2)
        border-radius: 6rem

        & svg
            width: 20rem
            height: 20rem
            stroke: $block-background-color

</style>
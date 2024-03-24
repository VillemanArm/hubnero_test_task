<script>
import TeamStatistic from '@/components/TeamStatistic'
import TeamTable from '@/components/TeamTable'
import ModalWindow from '@/components/UI/ModalWindow'
import NewUserForm from '@/components/NewUserForm'

export default  {
    components: { TeamStatistic, TeamTable, ModalWindow, NewUserForm },
    props: {
        // link: {
        //     type: Object,
        //     required: true,
        // },
        },
    data() {
        return {
            isAddUser: false,
        }
    },
    methods: {
        setAddUser(bool) {
            this.isAddUser = bool
        }
    },
    mounted() {

    },
}
</script>

<template>
    <div class="team">
        <TeamStatistic />

        <button class="team__add" type="button" @click="setAddUser(true)">
            <div class="team__add-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#8591AE"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6V14" stroke="#evenodd" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14 10H6" stroke="#evenodd" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <span>Add new Employee</span>
        </button>

        <ModalWindow v-if="isAddUser" :header="'Add User'" :close="setAddUser">
            <NewUserForm />
        </ModalWindow>

        <TeamTable />

    </div>

</template>

<style lang='sass'>
    @import '../assets/constants.sass'

    .team
        padding: 28rem
        display: grid
        grid-template-rows: auto auto 1fr
        gap: 28rem

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
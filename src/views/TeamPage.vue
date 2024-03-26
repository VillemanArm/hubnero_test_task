<script>
import TeamStatistic from '@/components/TeamPage/TeamStatistic'
import TeamTable from '@/components/TeamPage/TeamTable'
import ModalWindow from '@/components/UI/ModalWindow'
import NewUserForm from '@/components/TeamPage/NewUserForm'
import EditUserForm from '@/components/TeamPage/EditUserForm'
import TeamAddButton from '@/components/TeamPage/TeamAddButton'

export default  {
    components: { TeamStatistic, TeamTable, ModalWindow, NewUserForm, EditUserForm, TeamAddButton },

    methods: {
        closeNewUser() {
            return this.$store.commit('team/setIsAddUser', false)
        },
        closeEditUser() {
            return this.$store.commit('team/setIsEditUser', false)
        },

    },
}
</script>

<template>
    <div class="team">
        <TeamStatistic />

        <TeamAddButton />

        <TeamTable />

        <ModalWindow v-if="$store.state.team.isAddUser" :header="'Add employee'" :close="closeNewUser">
            <NewUserForm />
        </ModalWindow>

        <ModalWindow v-if="$store.state.team.isEditUser" :header="'Edit employee'" :close="closeEditUser">
            <EditUserForm />
        </ModalWindow>



    </div>

</template>

<style lang='sass'>
    @import '@/assets/constants.sass'

    .team
        padding: 28rem
        display: grid
        grid-template-rows: auto auto 1fr
        gap: 28rem

</style>